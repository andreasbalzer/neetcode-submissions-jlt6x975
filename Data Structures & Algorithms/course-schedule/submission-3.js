class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const map = new Map();
        for (let [a, b] of prerequisites) {
            if (!map.has(a)) {
                map.set(a, []);
            }
            map.get(a).push(b);
        }

        const visiting = new Set();

        const dfs = (course) => {
            if (visiting.has(course)) {
                return false;
            }

            const deps = map.get(course) || [];
            if (deps.length === 0) {
                return true;
            }

            visiting.add(course);
            
            for (let dep of deps) {
                if (!dfs(dep)) {
                    return false;
                }
            }
    
            visiting.delete(course);
            map.set(course, []);
            return true;
        };

        for (let index = 0; index < numCourses; index++) {
            if (!dfs(index)) {
                return false;
            }
        }

        return true;

    }
}
