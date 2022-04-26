/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
	const moneyMap = {
		5: 0,
		10: 0,
		20: 0,
	}
	for(let i = 0; i < bills.length; i++) {
		const getMoney = bills[i]
		moneyMap[getMoney] = moneyMap[getMoney] + 1
		let backMoney = getMoney - 5
		if(backMoney >= 10 && moneyMap[10]) {
			backMoney = backMoney - 10
			moneyMap[10] = moneyMap[10] - 1
		}
		while(backMoney >= 5 && moneyMap[5]) {
			moneyMap[5] = moneyMap[5] - 1
			backMoney = backMoney - 5
		}
		if(backMoney) return false
	}
	return true
};
// @lc code=end

