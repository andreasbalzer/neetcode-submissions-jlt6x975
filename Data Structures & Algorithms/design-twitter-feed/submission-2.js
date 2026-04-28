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
        this.time = 1;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        console.log(`postTweet ${userId} ${tweetId}`);
        this.follow(userId, userId);
        if (!this.posts.has(userId)) {
            this.posts.set(userId, []);
        }
        this.posts.get(userId).push([tweetId, this.time++]);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        console.log(`getNewsFeed ${userId}`);
        const feed = new Heap((item) => item[1]);
        for (let user of this.following.get(userId).keys()) {
            for (let tweet of this.posts.get(user)) {
                feed.enqueue([tweet[0], tweet[1]]);
                if (feed.size > 10) {
                    console.log(`feed size ${feed.size} dequeue`);
                    const item = feed.dequeue();
                    console.log(`dequeued ${item}`);
                }
            }
        }
        const result = [];
        while (feed.size) {
            result.push(feed.dequeue()[0]);
        }

        return result.reverse();
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
        this.following.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (followerId === followeeId) {
            return;
        }
        console.log(`unfollow ${followerId}-X>${followeeId}`);
        this.following.get(followerId).delete(followeeId);
    }
}
