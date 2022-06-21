/*
 * @lc app=leetcode.cn id=1108 lang=javascript
 *
 * [1108] IP 地址无效化
 */

// @lc code=start
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let invalidAddress = ""
    for(let i = 0; i < address.length; i++) {
        if(address[i] === '.') {
            invalidAddress += `[${address[i]}]`
        } else {
            invalidAddress += address[i]
        }
    }
    return invalidAddress
};
// @lc code=end

