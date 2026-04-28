class Heap {
    constructor(accessor) {
        this.data = [];
        this.size = 0;
        this.accessor = accessor;
    }

    enqueue(value) {
        console.log("enqueue " + value);
        this.data.push(value);
        this.size++;
    }

    dequeue() {
        console.log("dequeue");
        this.data.sort((a, b) => this.accessor(a) - this.accessor(b));
        console.log(this.data);
        if (this.size === 0) {
            return undefined;
        }

        this.size--;
        return this.data.shift();
    }
}

class Twitter {
    constructor() {
        this.following = new Map();
        this.posts = new Map();
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        console.log(`postTweet ${userId} ${tweetId}`);
        if (!this.posts.has(userId)) {
            this.posts.set(userId, []);
        }
        this.posts.get(userId).push(tweetId);
        if (this.posts.get(userId).length > 10) {
            this.posts.get(userId).shift();
        }
        this.time++;
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        console.log(`getNewsFeed ${userId}`);
        const feed = new Heap((item) => item[0]);
        const followees = this.following.get(userId) ?? new Set();
        const followeesArray = Array.from(followees.keys());
        console.log("array");
        console.log(followeesArray);
        followeesArray.push(userId);
        for (let followee of followeesArray) {
            const tweets = this.posts.get(followee) || [];
            if (tweets.length === 0) {
                continue;
            }
            const index = tweets.length - 1;
            const tweetId = tweets[index];
            feed.enqueue([tweetId*-1, followee, index - 1]);
        }

        const result = [];
        while (feed.size && result.length < 10) {
            const [tweetId, followeeId, nextIndex] = feed.dequeue();
            result.push(tweetId*-1);
            if (nextIndex >= 0) {
                const nextTweet = this.posts.get(followeeId)[nextIndex];
                feed.enqueue([nextTweet*-1, followeeId, nextIndex - 1]);
            }
        }

        return result;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        console.log(`follow ${followerId}->${followeeId}`);
        if (!this.following.has(followerId)) {
            this.following.set(followerId, new Set());
        }
        if (followerId === followeeId) {
            return;
        }
        this.following.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        console.log(`unfollow ${followerId}-X>${followeeId}`);
        this.following.get(followerId)?.delete(followeeId);
    }
}
