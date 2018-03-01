/*
 * @Author: chenyang_pc
 * @Date:   2017-10-28 22:08:02
 * @Last Modified by:   chenyang_pc
 * @Last Modified time: 2018-03-01 18:08:29
 */

$(function() {
	
	// mock数据
	Mock.mock('http://g.cn', {
		"list|6-12": [{
			"poster": "@image('230x100','#f5dac3','png','cy')",
			"height|80-360": 100,
			"text": "@ctitle(4,10)"
		}]
	});

	// 实例化waterfall组件
	var waterfall1 = new Waterfall({
		width:190,
		url: "http://g.cn",
		threshold: -200
	});

});