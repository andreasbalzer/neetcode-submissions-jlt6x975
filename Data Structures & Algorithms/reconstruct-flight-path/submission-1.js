class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        tickets.sort((a, b) => a[1].localeCompare(b[1]));
        const map = new Map();
        tickets.forEach((ticket) => {
            if (!map.has(ticket[0])) {
                map.set(ticket[0], []);
            }
            map.get(ticket[0]).push(ticket[1]);
        });

        const result = ["JFK"];
        const dfs = (location) => {
            if (result.length === tickets.length + 1) {
                return true;
            }
            if (!map.has(location)) {
                return false;
            }
            const destinations = map.get(location);
            for (let index = 0; index < destinations.length; index++) {
                const destination = destinations[index];
                destinations.splice(index, 1);
                result.push(destination);
                if (dfs(destination)) {
                    return true;
                }
                destinations.splice(index, 0, destination);
                result.pop();
            }
            return false;
        };

        dfs("JFK");
        return result;

    }
}
