/*
 * @Author: chenyang_pc
 * @Date:   2017-10-28 22:08:02
 * @Last Modified by:   chenyang_pc
 * @Last Modified time: 2018-03-01 17:40:20
 */

$(function() {
	
	Mock.mock('http://g.cn', {
		"list|6": [{
			"poster": "@image('230x100')",
			"height|100-300": 100,
			"text": "@ctitle(4,8)"
		}]
	});

	// 实例化waterfall组件
	var waterfall1 = new Waterfall({
		url: "http://g.cn",
		threshold: -200
	});

});