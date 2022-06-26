/*
 * @lc app=leetcode.cn id=710 lang=javascript
 *
 * [710] 黑名单中的随机数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function(n, blacklist) {
    this.map = new Map()
    blacklist.sort((a, b) => b - a)
    let blength = blacklist.length
    this.range = n - blength
    let i = 0
    let right = n - 1
    while(i < blength) {
        if(blacklist[i] >= n - blength) {
            this.map.set(blacklist[i], blacklist[i])
            i++
        } else {
            if(!this.map.has(right)) {
                this.map.set(blacklist[i], right)
                i++
            }
            right--
        }
    }
};

/**
 * @return {number}
 */
Solution.prototype.pick = function() {
    let r = Math.floor(Math.random() * this.range)
    return this.map.get(r) || r
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
//  var obj = new Solution(5, [1,3,4])
// console.log(obj.pick())
// @lc code=end

