class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const map = new Map();
        for (let [a, b] of prerequisites) {
            if (!map.has(a)) {
                map.set(a, []);
            }
            map.get(a).push(b);
        }

        const visiting = new Set();
        const result = new Set();
        const dfs = (course) => {
            if (visiting.has(course)) {
                return false;
            }

            if ((map.get(course) || []).length === 0) {
                result.add(course);
                return true;
            }

            visiting.add(course);

            for (let dep of map.get(course)) {
                if (!dfs(dep)) {
                    return false;
                }
            }

            visiting.delete(course);
            result.add(course);

            return true;
        }

        for (let index = 0; index < numCourses; index++) {
            if (!dfs(index)) {
                return [];
            }
        }

        return Array.from(result.values());
    }
}
