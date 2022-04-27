/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels2 = function(s) {
	const wordMap = {}
	for(let i = 0; i < s.length; i++) {
		wordMap[s[i]] ? wordMap[s[i]]++ : wordMap[s[i]] = 1
	}
	const result = []
	let stack = []
	let count = 0
	for(let i = 0; i < s.length; i++) {
		wordMap[s[i]]--
		count++
		if (wordMap[s[i]]) {
			stack.push(s[i])
		} else {
			if(stack.every(item => wordMap[item] === 0)) {
				result.push(count)
				stack = []
				count = 0
			}
		}
	}
	return result
};

var partitionLabels = function(s) {
    let hash = {}
    for(let i = 0; i < s.length; i++) {
        hash[s[i]] = i
    }
    let result = []
    let left = 0
    let right = 0
    for(let i = 0; i < s.length; i++) {
        // 记录区间内字符最后出现的位置
        right = Math.max(right, hash[s[i]])
        if(right === i) {
            result.push(right - left + 1)
            left = i + 1
        }
    }
    return result
};
// @lc code=end

