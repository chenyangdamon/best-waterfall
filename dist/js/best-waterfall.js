/*!
 * JavaScript Components best-waterfall
 * @author : chenyangdamon
 * @email  : 645230634@qq.com
 * @github : https://github.com/chenyangdamon
 * @Date   : 2017-02-28 22:08:02
 */
;
(function(root, factory) {
	if (typeof define === "function" && define.amd) {
		// AMD模式
		define(["jquery"], function() {
			factory.apply(root, arguments)
		});
	} else {
		// 全局模式
		factory.call(root, root.$);
	}
})(window, function($) {
	/**
	 * [Waterfall description]
	 * @return {[type]} [description]
	 */
	var Waterfall = function() {
		/**
		 * [defaultsOption description]
		 * @type {Object}
		 */
		this.defaultsOption = {
			// 瀑布流容器
			container: ".best-waterfall-wrapper",
			// 列宽
			width: 200,
			// 列内填充
			padding: 10,
			// 延迟加载配置
			lazy: {
				// 阈值
				threshold: -100,
				// 加载中
				s: "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibGRzLXNwaW5uZXIiIHdpZHRoPSI2MHB4IiAgaGVpZ2h0PSI2MHB4IiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBzdHlsZT0iYmFja2dyb3VuZDogbm9uZTsiPjxnIHRyYW5zZm9ybT0icm90YXRlKDAgNTAgNTApIj4KICA8cmVjdCB4PSI0OCIgeT0iMjQiIHJ4PSI5LjYiIHJ5PSI0LjgiIHdpZHRoPSI0IiBoZWlnaHQ9IjEyIiBmaWxsPSIjZjEwMjE1Ij4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiB0aW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iLTAuOTE2NjY2NjY2NjY2NjY2NnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+CiAgPC9yZWN0Pgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMzAgNTAgNTApIj4KICA8cmVjdCB4PSI0OCIgeT0iMjQiIHJ4PSI5LjYiIHJ5PSI0LjgiIHdpZHRoPSI0IiBoZWlnaHQ9IjEyIiBmaWxsPSIjZjEwMjE1Ij4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiB0aW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iLTAuODMzMzMzMzMzMzMzMzMzNHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+CiAgPC9yZWN0Pgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNjAgNTAgNTApIj4KICA8cmVjdCB4PSI0OCIgeT0iMjQiIHJ4PSI5LjYiIHJ5PSI0LjgiIHdpZHRoPSI0IiBoZWlnaHQ9IjEyIiBmaWxsPSIjZjEwMjE1Ij4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiB0aW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iLTAuNzVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogIDwvcmVjdD4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDkwIDUwIDUwKSI+CiAgPHJlY3QgeD0iNDgiIHk9IjI0IiByeD0iOS42IiByeT0iNC44IiB3aWR0aD0iNCIgaGVpZ2h0PSIxMiIgZmlsbD0iI2YxMDIxNSI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIgdGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjY2NjY2NjY2NjY2NjY2NjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogIDwvcmVjdD4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDEyMCA1MCA1MCkiPgogIDxyZWN0IHg9IjQ4IiB5PSIyNCIgcng9IjkuNiIgcnk9IjQuOCIgd2lkdGg9IjQiIGhlaWdodD0iMTIiIGZpbGw9IiNmMTAyMTUiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIHRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC41ODMzMzMzMzMzMzMzMzM0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4KICA8L3JlY3Q+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTAgNTApIj4KICA8cmVjdCB4PSI0OCIgeT0iMjQiIHJ4PSI5LjYiIHJ5PSI0LjgiIHdpZHRoPSI0IiBoZWlnaHQ9IjEyIiBmaWxsPSIjZjEwMjE1Ij4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiB0aW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iLTAuNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+CiAgPC9yZWN0Pgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDUwIDUwKSI+CiAgPHJlY3QgeD0iNDgiIHk9IjI0IiByeD0iOS42IiByeT0iNC44IiB3aWR0aD0iNCIgaGVpZ2h0PSIxMiIgZmlsbD0iI2YxMDIxNSI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIgdGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjQxNjY2NjY2NjY2NjY2NjdzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogIDwvcmVjdD4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDIxMCA1MCA1MCkiPgogIDxyZWN0IHg9IjQ4IiB5PSIyNCIgcng9IjkuNiIgcnk9IjQuOCIgd2lkdGg9IjQiIGhlaWdodD0iMTIiIGZpbGw9IiNmMTAyMTUiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIHRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC4zMzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4KICA8L3JlY3Q+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgyNDAgNTAgNTApIj4KICA8cmVjdCB4PSI0OCIgeT0iMjQiIHJ4PSI5LjYiIHJ5PSI0LjgiIHdpZHRoPSI0IiBoZWlnaHQ9IjEyIiBmaWxsPSIjZjEwMjE1Ij4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiB0aW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iLTAuMjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogIDwvcmVjdD4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDI3MCA1MCA1MCkiPgogIDxyZWN0IHg9IjQ4IiB5PSIyNCIgcng9IjkuNiIgcnk9IjQuOCIgd2lkdGg9IjQiIGhlaWdodD0iMTIiIGZpbGw9IiNmMTAyMTUiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIHRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC4xNjY2NjY2NjY2NjY2NjY2NnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+CiAgPC9yZWN0Pgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMzAwIDUwIDUwKSI+CiAgPHJlY3QgeD0iNDgiIHk9IjI0IiByeD0iOS42IiByeT0iNC44IiB3aWR0aD0iNCIgaGVpZ2h0PSIxMiIgZmlsbD0iI2YxMDIxNSI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIgdGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjA4MzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4KICA8L3JlY3Q+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgzMzAgNTAgNTApIj4KICA8cmVjdCB4PSI0OCIgeT0iMjQiIHJ4PSI5LjYiIHJ5PSI0LjgiIHdpZHRoPSI0IiBoZWlnaHQ9IjEyIiBmaWxsPSIjZjEwMjE1Ij4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiB0aW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+CiAgPC9yZWN0Pgo8L2c+PC9zdmc+",
				// 加载失败
				e: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIGNsYXNzPSJsZGktYThnYW90IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIHN0eWxlPSJ3aWR0aDoxMDBweDt3ZWJraXQtbG9naWNhbC13aWR0aDoxMDBweDt3ZWJraXQtbG9naWNhbC1oZWlnaHQ6MTAwcHg7dXNlci1zZWxlY3Q6bm9uZTt0cmFuc2Zvcm0tb3JpZ2luOjUwcHggNTBweDtzdHJva2Utd2lkdGg6MXB4O3I6MHB4O3BvaW50ZXItZXZlbnRzOmFsbDtwZXJzcGVjdGl2ZS1vcmlnaW46NTBweCA1MHB4O292ZXJmbG93LXk6aGlkZGVuO292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93OmhpZGRlbjtpbmxpbmUtc2l6ZToxMDBweDtoZWlnaHQ6MTAwcHg7ZGlzcGxheTpibG9jaztkOm5vbmU7YmxvY2stc2l6ZToxMDBweDtiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlIC8gYXV0byBwYWRkaW5nLWJveCBib3JkZXItYm94IiA+PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiIHN0eWxlPSJ4OjBweDt1c2VyLXNlbGVjdDpub25lO3RyYW5zZm9ybS1vcmlnaW46NTBweCA1MHB4O3RyYW5zZm9ybTpub25lO3N0cm9rZS13aWR0aDoxcHg7cjowcHg7cG9pbnRlci1ldmVudHM6YWxsO3BlcnNwZWN0aXZlLW9yaWdpbjowcHggMHB4O292ZXJmbG93LXk6aGlkZGVuO292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93OmhpZGRlbjtkaXNwbGF5OmJsb2NrIiA+PGcgY2xhc3M9IiIgc3R5bGU9Ing6MHB4O3VzZXItc2VsZWN0Om5vbmU7dHJhbnNmb3JtLW9yaWdpbjo1MHB4IDUwcHg7dHJhbnNmb3JtOm1hdHJpeCgwLjU3LCAwLCAwLCAwLjU3LCAwLCAwKTtzdHJva2Utd2lkdGg6MXB4O3I6MHB4O3BvaW50ZXItZXZlbnRzOmFsbDtwZXJzcGVjdGl2ZS1vcmlnaW46MHB4IDBweCIgPjxnIGNsYXNzPSIiIHN0eWxlPSJ4OjBweDt1c2VyLXNlbGVjdDpub25lO3RyYW5zZm9ybS1vcmlnaW46NTBweCA1MHB4O3RyYW5zZm9ybTpub25lO3N0cm9rZS13aWR0aDoxcHg7cjowcHg7cG9pbnRlci1ldmVudHM6YWxsO3BlcnNwZWN0aXZlLW9yaWdpbjowcHggMHB4IiA+PHN0eWxlIHR5cGU9InRleHQvY3NzIiBjbGFzcz0ibGQgIiBzdHlsZT0ieTowcHg7eDowcHg7dXNlci1zZWxlY3Q6bm9uZTt0cmFuc2Zvcm0tb3JpZ2luOjUwcHggNTBweDt0cmFuc2Zvcm06bm9uZTtzdHJva2Utd2lkdGg6MXB4O3I6MHB4O3BvaW50ZXItZXZlbnRzOmFsbDtkOm5vbmUiID4uc3Qwe2ZpbGw6I2Y0ZTZjODtzdHJva2U6IzMyMzIzMjtzdHJva2UtbGluZWpvaW46cm91bmR9LnN0MCwuc3QxLC5zdDIsLnN0M3tzdHJva2Utd2lkdGg6My41O3N0cm9rZS1taXRlcmxpbWl0OjEwfS5zdDF7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO2ZpbGw6I2YzZTRjNztzdHJva2U6IzMyMzIzMn0uc3QyLC5zdDN7ZmlsbDojZDY1YTYyO3N0cm9rZTojMDAwMTAxfS5zdDN7ZmlsbDojZmZmO3N0cm9rZTojMzIzMjMyfS5zdDR7ZmlsbDojZTBlMGUwO3N0cm9rZTojMDAwMTAxO3N0cm9rZS13aWR0aDo2fS5zdDQsLnN0NSwuc3Q2e3N0cm9rZS1taXRlcmxpbWl0OjEwfS5zdDV7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7ZmlsbDpub25lO3N0cm9rZTojMDAwMTAxO3N0cm9rZS13aWR0aDo1fS5zdDZ7ZmlsbDojZTE1YzY0O3N0cm9rZTojMzIzMjMyO3N0cm9rZS13aWR0aDozLjV9LnN0N3tmaWxsOiNlNmU2ZTZ9LnN0OHtmaWxsOiNlMGUwZTB9LnN0OXtmaWxsOiNmN2IyNmF9LnN0MTAsLnN0MTEsLnN0MTJ7ZmlsbDojZTZlNmU2O3N0cm9rZTojMzIzMjMyO3N0cm9rZS13aWR0aDozLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTB9LnN0MTEsLnN0MTJ7ZmlsbDojYjNiNGI0fS5zdDEye2ZpbGw6I2Y3YjI2YX0uc3QxM3tvcGFjaXR5Oi4yfS5zdDE0e2ZpbGw6I2UxNWM2NH0uc3QxNXtmaWxsOiNmNDdlNWZ9LnN0MTZ7ZmlsbDojODQ5Yjg3fS5zdDE3LC5zdDE4LC5zdDE5e2ZpbGw6I2Y0N2U1ZjtzdHJva2U6IzMyMzIzMjtzdHJva2Utd2lkdGg6My41O3N0cm9rZS1taXRlcmxpbWl0OjEwfS5zdDE4LC5zdDE5e3N0cm9rZS1saW5lam9pbjpyb3VuZH0uc3QxOXtmaWxsOnVybCgjU1ZHSURfMV8pO3N0cm9rZS13aWR0aDo3fS5zdDIwe2ZpbGw6IzY2Nn0uc3QyMXtmaWxsOiMzMjMyMzJ9LnN0MjJ7ZmlsbDojNjU2NjY2fS5zdDIzLC5zdDI0e2ZpbGw6I2Y3YjI2YTtzdHJva2U6IzMyMzIzMjtzdHJva2Utd2lkdGg6My41O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMH0uc3QyNHtmaWxsOiNlMTVjNjR9LnN0MjV7ZmlsbDojZmZmfS5zdDI2LC5zdDI3e3N0cm9rZS1saW5lam9pbjpyb3VuZH0uc3QyNntmaWxsOnVybCgjU1ZHSURfMl8pO3N0cm9rZS13aWR0aDozLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlOiNmZmZ9LnN0Mjd7b3BhY2l0eTouMjtzdHJva2U6IzAwMH0uc3QyNywuc3QyOCwuc3QyOSwuc3QzMHtzdHJva2Utd2lkdGg6My41O3N0cm9rZS1taXRlcmxpbWl0OjEwfS5zdDI4e2ZpbGw6bm9uZTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2U6I2ZmZn0uc3QyOSwuc3QzMHtzdHJva2U6IzMyMzIzMn0uc3QyOXtzdHJva2UtbGluZWpvaW46cm91bmQ7ZmlsbDp1cmwoI1NWR0lEXzNfKX0uc3QzMHtmaWxsOnVybCgjU1ZHSURfNF8pfS5zdDMwLC5zdDMxLC5zdDMye3N0cm9rZS1saW5lam9pbjpyb3VuZH0uc3QzMXtzdHJva2U6IzMyMzIzMjtzdHJva2Utd2lkdGg6My41O3N0cm9rZS1taXRlcmxpbWl0OjEwO2ZpbGw6I2UwZTBlMH0uc3QzMntmaWxsOnVybCgjU1ZHSURfNV8pfS5zdDMyLC5zdDMze3N0cm9rZTojMzIzMjMyO3N0cm9rZS13aWR0aDozLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTB9LnN0MzMsLnN0MzR7ZmlsbDpub25lO3N0cm9rZS1saW5lam9pbjpyb3VuZH0uc3QzNCwuc3QzNSwuc3QzNntzdHJva2U6IzMyMzIzMjtzdHJva2Utd2lkdGg6My41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwfS5zdDM1e3N0cm9rZS1saW5lam9pbjpyb3VuZDtmaWxsOiNmN2IyNmF9LnN0MzZ7ZmlsbDpub25lfS5zdDM3e2ZpbGw6I2FjYmQ4MX0uc3QzOHtmaWxsOiNmNGU2Yzh9LnN0Mzl7ZmlsbDojYWNiZDgxO3N0cm9rZTojMzIzMjMyfS5zdDM5LC5zdDQwLC5zdDQxLC5zdDQyLC5zdDQze3N0cm9rZS13aWR0aDozLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTB9LnN0NDB7b3BhY2l0eTouMjtzdHJva2U6IzAwMH0uc3Q0MSwuc3Q0Miwuc3Q0M3tmaWxsOiNmNGU2Yzg7c3Ryb2tlOiMzMjMyMzJ9LnN0NDIsLnN0NDN7ZmlsbDpub25lO3N0cm9rZTojNjY2fS5zdDQze3N0cm9rZTojODQ5Yjg3O3N0cm9rZS13aWR0aDo4fS5zdDQ0LC5zdDQ1LC5zdDQ2LC5zdDQ3LC5zdDQ4e2ZpbGw6dXJsKCNTVkdJRF82Xyk7c3Ryb2tlOiMzMjMyMzI7c3Ryb2tlLXdpZHRoOjMuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMH0uc3Q0NSwuc3Q0Niwuc3Q0Nywuc3Q0OHtmaWxsOm5vbmU7c3Ryb2tlOiNmZmZ9LnN0NDYsLnN0NDcsLnN0NDh7ZmlsbDp1cmwoI1NWR0lEXzdfKTtzdHJva2U6IzMyMzIzMn0uc3Q0Nywuc3Q0OHtmaWxsOnVybCgjU1ZHSURfOF8pO3N0cm9rZS1saW5lam9pbjpyb3VuZH0uc3Q0OHtmaWxsOnVybCgjU1ZHSURfOV8pfS5zdDQ5LC5zdDUwLC5zdDUxe2ZpbGw6bm9uZTtzdHJva2U6Izg0OWI4NztzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMH0uc3Q1MCwuc3Q1MXtmaWxsOnVybCgjU1ZHSURfMTBfKTtzdHJva2U6IzMyMzIzMjtzdHJva2Utd2lkdGg6My41fS5zdDUxe2ZpbGw6bm9uZX0uc3Q1Miwuc3Q1M3tzdHJva2U6I2ZmZjtzdHJva2Utd2lkdGg6My41O3N0cm9rZS1saW5lY2FwOnJvdW5kfS5zdDUye3N0cm9rZS1taXRlcmxpbWl0OjEwO2ZpbGw6dXJsKCNTVkdJRF8xMV8pfS5zdDUze2ZpbGw6dXJsKCNTVkdJRF8xMl8pfS5zdDUzLC5zdDU0LC5zdDU1e3N0cm9rZS1taXRlcmxpbWl0OjEwfS5zdDU0e3N0cm9rZS1saW5lam9pbjpyb3VuZDtmaWxsOiNhY2JkODE7c3Ryb2tlOiMzMjMyMzI7c3Ryb2tlLXdpZHRoOjMuNX0uc3Q1NXtmaWxsOm5vbmU7c3Ryb2tlOiNmZmY7c3Ryb2tlLXdpZHRoOjZ9LnN0NTYsLnN0NTcsLnN0NTgsLnN0NTksLnN0NjB7c3Ryb2tlLXdpZHRoOjMuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMH0uc3Q1NntzdHJva2UtbGluZWNhcDpyb3VuZDtmaWxsOiNmN2IyNmE7c3Ryb2tlOiNmZmZ9LnN0NTcsLnN0NTgsLnN0NTksLnN0NjB7ZmlsbDojZjRlNmM4O3N0cm9rZTojZTE1YzY0fS5zdDU4LC5zdDU5LC5zdDYwe2ZpbGw6bm9uZX0uc3Q1OSwuc3Q2MHtzdHJva2U6I2ZmZjtzdHJva2Utd2lkdGg6OH0uc3Q2MHtmaWxsOnVybCgjU1ZHSURfMTNfKTtzdHJva2U6IzMyMzIzMjtzdHJva2Utd2lkdGg6My41fS5zdDYxe2ZpbGw6IzAwMDEwMX0uc3Q2MntmaWxsOnVybCgjU1ZHSURfMTRfKX0uc3Q2M3tmaWxsOiM0YTM4MjZ9LnN0NjR7ZmlsbDpub25lO3N0cm9rZTojNGEzODI2O3N0cm9rZS13aWR0aDo1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwfS5zdDY1e2ZpbGw6dXJsKCNTVkdJRF8xNV8pfS5zdDY2e2ZpbGw6dXJsKCNTVkdJRF8xNl8pfS5zdDY3e2ZpbGw6dXJsKCNTVkdJRF8xN18pfS5zdDY4e2ZpbGw6dXJsKCNTVkdJRF8xOF8pfS5zdDY5e2ZpbGw6dXJsKCNTVkdJRF8xOV8pfS5zdDcwLC5zdDcxe2ZpbGw6bm9uZTtzdHJva2Utd2lkdGg6NX0uc3Q3MHtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2U6IzRhMzgyNn0uc3Q3MXtzdHJva2U6IzAwMH0uc3Q3MSwuc3Q3Miwuc3Q3Mywuc3Q3NHtzdHJva2UtbWl0ZXJsaW1pdDoxMH0uc3Q3MntzdHJva2UtbGluZWpvaW46cm91bmQ7ZmlsbDojZTBlMGUwO3N0cm9rZTojMDAwMTAxO3N0cm9rZS13aWR0aDo2fS5zdDczLC5zdDc0e2ZpbGw6IzAwMDEwMTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NTtzdHJva2UtbGluZWNhcDpyb3VuZH0uc3Q3NHtmaWxsOiNhMGM4ZDd9LnN0NzV7ZmlsbDp1cmwoI1NWR0lEXzIwXyl9LnN0NzZ7ZmlsbDp1cmwoI1NWR0lEXzIxXyl9LnN0Nzd7ZmlsbDp1cmwoI1NWR0lEXzIyXyl9LnN0Nzh7ZmlsbDp1cmwoI1NWR0lEXzIzXyl9LnN0Nzl7ZmlsbDp1cmwoI1NWR0lEXzI0Xyl9LnN0ODB7ZmlsbDojMDAwMTAxO3N0cm9rZTojNGEzODI2O3N0cm9rZS13aWR0aDo1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwfS5zdDgxe2ZpbGw6dXJsKCNTVkdJRF8yNV8pfS5zdDgye2ZpbGw6I2EwYzhkN30uc3Q4M3tmaWxsOiM5ZWM0ZDJ9LnN0ODR7ZmlsbDojZjBhZTZifS5zdDg1LC5zdDg2e2ZpbGw6I2Q2NWE2MjtzdHJva2U6IzMyMzIzMjtzdHJva2Utd2lkdGg6My41O3N0cm9rZS1taXRlcmxpbWl0OjEwfS5zdDg2e2ZpbGw6IzMyMzIzMjtzdHJva2U6IzAwMDEwMTtzdHJva2Utd2lkdGg6NjtzdHJva2UtbGluZWpvaW46cm91bmR9LnN0ODd7ZmlsbDojZDY1YTYyfS5zdDg4e2ZpbGw6IzQ5MzcyN30uc3Q4OXtmaWxsOnVybCgjU1ZHSURfMjZfKX0uc3Q5MHtmaWxsOiNkNjVhNjI7c3Ryb2tlOiMzMjMyMzI7c3Ryb2tlLXdpZHRoOjMuNTtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTB9LnN0OTF7ZmlsbDojZjNlNGM3fS5zdDkye2ZpbGw6I2YwYWU2YjtzdHJva2U6IzMyMzIzMjtzdHJva2Utd2lkdGg6My41O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMH0uc3Q5M3tmaWxsOiM2NjUwM2F9PC9zdHlsZT4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIzNC4yMTgyIiB5MT0iMjYuNDEwNCIgeDI9IjY1Ljg4NDkiIHkyPSI3My43NDM3IiBjbGFzcz0ibGQgIiBzdHlsZT0ieTowcHg7eDowcHg7dXNlci1zZWxlY3Q6bm9uZTt0cmFuc2Zvcm0tb3JpZ2luOjUwcHggNTBweDt0cmFuc2Zvcm06bm9uZTtzdHJva2Utd2lkdGg6MXB4O3I6MHB4O3BvaW50ZXItZXZlbnRzOmFsbDtwZXJzcGVjdGl2ZS1vcmlnaW46MHB4IDBweDtkOm5vbmUiID48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNkNGQwZDAiIGNsYXNzPSJsZCAiIHN0eWxlPSJ5OjBweDt4OjBweDt1c2VyLXNlbGVjdDpub25lO3RyYW5zZm9ybS1vcmlnaW46NTBweCA1MHB4O3RyYW5zZm9ybTpub25lO3RvcDphdXRvO3N0cm9rZS13aWR0aDoxcHg7c3RvcC1jb2xvcjpyZ2IoMjEyLCAyMDgsIDIwOCk7cjowcHg7cG9pbnRlci1ldmVudHM6YWxsO3BlcnNwZWN0aXZlLW9yaWdpbjowcHggMHB4O2Q6bm9uZTtjb2xvcjpyZ2IoNTEsIDUxLCA1MSkiID48L3N0b3A+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Q0ZDBkMCIgY2xhc3M9ImxkICIgc3R5bGU9Ink6MHB4O3g6MHB4O3VzZXItc2VsZWN0Om5vbmU7dHJhbnNmb3JtLW9yaWdpbjo1MHB4IDUwcHg7dHJhbnNmb3JtOm5vbmU7dG9wOmF1dG87c3Ryb2tlLXdpZHRoOjFweDtzdG9wLWNvbG9yOnJnYigyMTIsIDIwOCwgMjA4KTtyOjBweDtwb2ludGVyLWV2ZW50czphbGw7cGVyc3BlY3RpdmUtb3JpZ2luOjBweCAwcHg7ZDpub25lO2NvbG9yOnJnYig1MSwgNTEsIDUxKSIgPjwvc3RvcD48L2xpbmVhckdyYWRpZW50Pgo8ZyBjbGFzcz0ibGQgIiBzdHlsZT0ieTowcHg7eDowcHg7dXNlci1zZWxlY3Q6bm9uZTt0cmFuc2Zvcm0tb3JpZ2luOjUwcHggNTBweDt0cmFuc2Zvcm06bm9uZTtzdHJva2Utd2lkdGg6MXB4O3I6MHB4O3BvaW50ZXItZXZlbnRzOmFsbDtwZXJzcGVjdGl2ZS1vcmlnaW46MHB4IDBweDtkOm5vbmUiID48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlPSIjZDRkMGQwIiBjbGFzcz0iIiBzdHlsZT0id2lkdGg6YXV0bzt1c2VyLXNlbGVjdDpub25lO3N0cm9rZS13aWR0aDozLjVweDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2U6cmdiKDIxMiwgMjA4LCAyMDgpO3I6NDBweDtwb2ludGVyLWV2ZW50czphbGw7cGVyc3BlY3RpdmUtb3JpZ2luOjBweCAwcHg7ZmlsbDp1cmwoJyNTVkdJRF8xXycpO2Q6bm9uZTtjeTo1MHB4O2N4OjUwcHgiID48L2NpcmNsZT48L2c+CjxnIGNsYXNzPSJsZCAiIHN0eWxlPSJ5OjBweDt4OjBweDt1c2VyLXNlbGVjdDpub25lO3RyYW5zZm9ybS1vcmlnaW46NTBweCA1MHB4O3RyYW5zZm9ybTpub25lO3N0cm9rZS13aWR0aDoxcHg7cjowcHg7cG9pbnRlci1ldmVudHM6YWxsO3BlcnNwZWN0aXZlLW9yaWdpbjowcHggMHB4O2Q6bm9uZSIgPjxsaW5lIGNsYXNzPSJzdDQ1IiB4MT0iMzEuNSIgeTE9IjY4LjUiIHgyPSI2OC41IiB5Mj0iMzEuNSIgc3Ryb2tlPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0eWxlPSJ1c2VyLXNlbGVjdDpub25lO3N0cm9rZS13aWR0aDozLjVweDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2U6cmdiKDI1NSwgMjU1LCAyNTUpO3I6MHB4O3BvaW50ZXItZXZlbnRzOmFsbDtwZXJzcGVjdGl2ZS1vcmlnaW46MHB4IDBweDtmaWxsOm5vbmUiID48L2xpbmU+PC9nPgo8ZyBjbGFzcz0ibGQgIiBzdHlsZT0ieTowcHg7eDowcHg7dXNlci1zZWxlY3Q6bm9uZTt0cmFuc2Zvcm0tb3JpZ2luOjUwcHggNTBweDt0cmFuc2Zvcm06bm9uZTtzdHJva2Utd2lkdGg6MXB4O3I6MHB4O3BvaW50ZXItZXZlbnRzOmFsbDtwZXJzcGVjdGl2ZS1vcmlnaW46MHB4IDBweDtkOm5vbmUiID48bGluZSBjbGFzcz0ic3Q0NSIgeDE9IjY4LjUiIHkxPSI2OC41IiB4Mj0iMzEuNSIgeTI9IjMxLjUiIHN0cm9rZT0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHlsZT0idXNlci1zZWxlY3Q6bm9uZTtzdHJva2Utd2lkdGg6My41cHg7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlOnJnYigyNTUsIDI1NSwgMjU1KTtyOjBweDtwb2ludGVyLWV2ZW50czphbGw7cGVyc3BlY3RpdmUtb3JpZ2luOjBweCAwcHg7ZmlsbDpub25lIiA+PC9saW5lPjwvZz4KPG1ldGFkYXRhIHhtbG5zOmQ9Imh0dHBzOi8vbG9hZGluZy5pby9zdG9jay8iIGNsYXNzPSJsZCAiIHN0eWxlPSJ5OjBweDt4OjBweDt1c2VyLXNlbGVjdDpub25lO3RyYW5zZm9ybS1vcmlnaW46NTBweCA1MHB4O3RyYW5zZm9ybTpub25lO3N0cm9rZS13aWR0aDoxcHg7cjowcHg7cG9pbnRlci1ldmVudHM6YWxsO2Q6bm9uZSIgPjxkOm5hbWUgY2xhc3M9ImxkICIgc3R5bGU9Ink6MHB4O3g6MHB4O3VzZXItc2VsZWN0Om5vbmU7dHJhbnNmb3JtLW9yaWdpbjo1MHB4IDUwcHg7dHJhbnNmb3JtOm5vbmU7c3Ryb2tlLXdpZHRoOjFweDtyOjBweDtwb2ludGVyLWV2ZW50czphbGw7ZDpub25lIiA+ZmFpbDwvZDpuYW1lPgoKCjxkOnRhZ3MgY2xhc3M9ImxkICIgc3R5bGU9Ink6MHB4O3g6MHB4O3VzZXItc2VsZWN0Om5vbmU7dHJhbnNmb3JtLW9yaWdpbjo1MHB4IDUwcHg7dHJhbnNmb3JtOm5vbmU7c3Ryb2tlLXdpZHRoOjFweDtyOjBweDtwb2ludGVyLWV2ZW50czphbGw7ZDpub25lIiA+ZmFpbCxyZWplY3QsZGVueSxuZWdhdGl2ZSxyZWZ1c2UsZXJyb3IsY2FuY2VsLGRyb3Asd2FybmluZzwvZDp0YWdzPgoKCjxkOmxpY2Vuc2UgY2xhc3M9ImxkICIgc3R5bGU9Ink6MHB4O3g6MHB4O3VzZXItc2VsZWN0Om5vbmU7dHJhbnNmb3JtLW9yaWdpbjo1MHB4IDUwcHg7dHJhbnNmb3JtOm5vbmU7c3Ryb2tlLXdpZHRoOjFweDtyOjBweDtwb2ludGVyLWV2ZW50czphbGw7ZDpub25lIiA+Y2MtYnk8L2Q6bGljZW5zZT4KCgo8ZDpzbHVnIGNsYXNzPSJsZCAiIHN0eWxlPSJ5OjBweDt4OjBweDt1c2VyLXNlbGVjdDpub25lO3RyYW5zZm9ybS1vcmlnaW46NTBweCA1MHB4O3RyYW5zZm9ybTpub25lO3N0cm9rZS13aWR0aDoxcHg7cjowcHg7cG9pbnRlci1ldmVudHM6YWxsO2Q6bm9uZSIgPmE4Z2FvdDwvZDpzbHVnPjwvbWV0YWRhdGE+PC9nPjwvZz4KPHN0eWxlIHR5cGU9InRleHQvY3NzIiBjbGFzcz0ibGQgIiBzdHlsZT0ieTowcHg7eDowcHg7dXNlci1zZWxlY3Q6bm9uZTt0cmFuc2Zvcm0tb3JpZ2luOjUwcHggNTBweDt0cmFuc2Zvcm06bm9uZTtzdHJva2Utd2lkdGg6MXB4O3I6MHB4O3BvaW50ZXItZXZlbnRzOmFsbDtkOm5vbmUiID5wYXRoLGVsbGlwc2UsY2lyY2xlLHJlY3QscG9seWdvbixwb2x5bGluZSxsaW5lIHsgc3Ryb2tlLXdpZHRoOiAwOyB9QGtleWZyYW1lcyBsZHQtYm91bmNlLWluIHsKICAwJSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDApOwogIH0KICA1JSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wODQ2KTsKICAgIHRyYW5zZm9ybTogc2NhbGUoMC4wODQ2KTsKICB9CiAgNiUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMTkxKTsKICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xOTEpOwogIH0KICA3JSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zMjU1KTsKICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zMjU1KTsKICB9CiAgOCUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNDgwNCk7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNDgwNCk7CiAgfQogIDklIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjY0Nik7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNjQ2KTsKICB9CiAgMTAlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgxMTYpOwogICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgxMTYpOwogIH0KICAxMSUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTY2NSk7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTY2NSk7CiAgfQogIDEyJSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTsKICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsKICB9CiAgMTMlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIwNjkpOwogICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIwNjkpOwogIH0KICAxNCUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMjc5Nik7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjc5Nik7CiAgfQogIDE5JSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNTU4KTsKICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNTU4KTsKICB9CiAgMjAlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA3KTsKICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNyk7CiAgfQogIDIxJSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45ODIzKTsKICAgIHRyYW5zZm9ybTogc2NhbGUoMC45ODIzKTsKICB9CiAgMjIlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkwMSk7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTAxKTsKICB9CiAgMjMlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgzMjgpOwogICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgzMjgpOwogIH0KICAyNSUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNzU1MSk7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzU1MSk7CiAgfQogIDI5JSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44NTE2KTsKICAgIHRyYW5zZm9ybTogc2NhbGUoMC44NTE2KTsKICB9CiAgMzElIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk3Myk7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTczKTsKICB9CiAgMzMlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA4NTcpOwogICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4NTcpOwogIH0KICAzNSUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUzOCk7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUzOCk7CiAgfQogIDQwJSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNzcxKTsKICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNzcxKTsKICB9CiAgNDIlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk5NTQpOwogICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk5NTQpOwogIH0KICA0NSUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTA1Nyk7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTA1Nyk7CiAgfQogIDUyJSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OTA4KTsKICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OTA4KTsKICB9CiAgNTYlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA2MjMpOwogICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2MjMpOwogIH0KICA2NCUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTg0NSk7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTg0NSk7CiAgfQogIDEwMCUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpOwogICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsKICB9Cn0KQC13ZWJraXQta2V5ZnJhbWVzIGxkdC1ib3VuY2UtaW4gewogIDAlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTsKICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7CiAgfQogIDUlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjA4NDYpOwogICAgdHJhbnNmb3JtOiBzY2FsZSgwLjA4NDYpOwogIH0KICA2JSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4xOTEpOwogICAgdHJhbnNmb3JtOiBzY2FsZSgwLjE5MSk7CiAgfQogIDclIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjMyNTUpOwogICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMyNTUpOwogIH0KICA4JSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC40ODA0KTsKICAgIHRyYW5zZm9ybTogc2NhbGUoMC40ODA0KTsKICB9CiAgOSUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNjQ2KTsKICAgIHRyYW5zZm9ybTogc2NhbGUoMC42NDYpOwogIH0KICAxMCUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuODExNik7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODExNik7CiAgfQogIDExJSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NjY1KTsKICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NjY1KTsKICB9CiAgMTIlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpOwogICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOwogIH0KICAxMyUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMjA2OSk7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjA2OSk7CiAgfQogIDE0JSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yNzk2KTsKICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNzk2KTsKICB9CiAgMTklIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1NTgpOwogICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1NTgpOwogIH0KICAyMCUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDcpOwogICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3KTsKICB9CiAgMjElIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk4MjMpOwogICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4MjMpOwogIH0KICAyMiUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTAxKTsKICAgIHRyYW5zZm9ybTogc2NhbGUoMC45MDEpOwogIH0KICAyMyUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuODMyOCk7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODMyOCk7CiAgfQogIDI1JSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43NTUxKTsKICAgIHRyYW5zZm9ybTogc2NhbGUoMC43NTUxKTsKICB9CiAgMjklIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjg1MTYpOwogICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1MTYpOwogIH0KICAzMSUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTczKTsKICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NzMpOwogIH0KICAzMyUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDg1Nyk7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDg1Nyk7CiAgfQogIDM1JSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNTM4KTsKICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNTM4KTsKICB9CiAgNDAlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA3NzEpOwogICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3NzEpOwogIH0KICA0MiUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTk1NCk7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTk1NCk7CiAgfQogIDQ1JSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45MDU3KTsKICAgIHRyYW5zZm9ybTogc2NhbGUoMC45MDU3KTsKICB9CiAgNTIlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk5MDgpOwogICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk5MDgpOwogIH0KICA1NiUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDYyMyk7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYyMyk7CiAgfQogIDY0JSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45ODQ1KTsKICAgIHRyYW5zZm9ybTogc2NhbGUoMC45ODQ1KTsKICB9CiAgMTAwJSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOwogIH0KfQoubGR0LWJvdW5jZS1pbiB7CiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApOwogIHRyYW5zZm9ybTogc2NhbGUoMCk7CiAgLXdlYmtpdC1hbmltYXRpb246IGxkdC1ib3VuY2UtaW4gMXMgZWFzZS1vdXQgZm9yd2FyZHM7CiAgYW5pbWF0aW9uOiBsZHQtYm91bmNlLWluIDFzIGVhc2Utb3V0IGZvcndhcmRzOwp9PC9zdHlsZT48L3N2Zz48L3N2Zz4="
			},
			// 接口url
			url: ""
		};

		this.init.apply(this, arguments);
	};

	/**
	 * [prototype description]
	 * @type {Object}
	 */
	Waterfall.prototype = {
		/**
		 * [constructor description]
		 * @type {String}
		 */
		constructor: Waterfall,
		/**
		 * 初始化
		 * @param userOption
		 */
		init: function(userOption) {
			var _this = this;

			_this.option = $.extend({}, _this.defaultsOption, userOption);
			_this._container = $(_this.option.container);

			if (!(_this._container instanceof jQuery)) return;
			// 每个列表项的宽度
			_this._width = _this.option.width;
			// 列表项的内填充
			_this._padding = _this.option.padding;
			// 列的高度
			_this._heightArray = [];
			// 是否重新定位列表项
			_this._bReset = false;
			// 是否加载完毕
			_this._bLoaded = true;
			// 已经获取数据
			_this._resData = [];
			_this._mtime = 0;
			// 懒加载
			_this._lazy = _this.option.lazy;

			_this.bindEvent();
			_this._getColum();
		},
		/**
		 * 注册事件
		 * [bindEvent description]
		 * @return {[type]} [description]
		 */
		bindEvent: function() {
			var _this = this;
			// 窗口重置
			$(window).resize(function() {
				_this._bReset = true;
				_this._getColum();
			});

			// 页面滚动
			$(window).scroll(function() {
				if (_this._isRequestMore()) {
					_this._request();
				} else {
					_this._throttle(_this._lazyload, _this);
				}
			});
		},
		/**
		 * 是否可用加载更多
		 * [_isRequestMore description]
		 * @return {Boolean} [description]
		 */
		_isRequestMore: function() {
			var _this = this,
				_top = _this._container.offset().top,
				_minColHeight = _this._getMostColumn(true).sum,
				_viewH = _this._viewH(),
				_scrollTop = _this._scrollTop();
			return _viewH + _scrollTop > _minColHeight + _top;
		},
		/**
		 * 获取总列数
		 * [_getColum description]
		 * @return {[type]} [description]
		 */
		_getColum: function() {
			var _this = this;
			_this._column = ((_this._container.outerWidth() - _this._padding) / (_this._width + _this._padding)) | 0;

			// 如果列表<1则不渲染列表
			if (!_this._column) return;

			// 判断是加载数据还是重新定位
			_this[_this._bReset ? "_reset" : "_request"]();
		},
		/**
		 * 请求数据
		 * [_request description]
		 * @return {[type]} [description]
		 */
		_request: function() {
			var _this = this;
			// 加载未完成
			if (!_this._bLoaded) return;
			// 当前状态是加载中
			_this._bLoaded = false;

			$.ajax({
				url: _this.option.url,
				type: "GET",
				dataType: "json",
				success: function(data) {
					// 记录追加数据前最大长度
					_this._maxLen = _this._resData.length;
					// 追加新数据
					_this._resData = _this._resData.concat(data.list)
					// 开始渲染
					_this._render(_this._resData);
				},
				error: function(errMsg) {
					console.log("waterfall-数据请求失败...");
				}
			})
		},
		/**
		 * 重新定位
		 * [_reset description]
		 * @return {[type]} [description]
		 */
		_reset: function() {
			var _this = this;
			// 重新渲染
			_this._render(_this._container.children());
		},

		/**
		 * 渲染数据
		 * [_loadData description]
		 * @return {[type]} [description]
		 */
		_render: function(items) {
			var _this = this,
				_data = items,
				_minCol = null,
				_maxCol = null,
				_minColId = 0,
				_height = 0,
				_Element = null,
				_css = null;

			// 重新定位
			if (_this._bReset) {
				// 将页面中已存在的列表项全部重新定位
				$.each(_data, function(index, element) {

					_height = $(this).height();

					$(this)
						.addClass("best-waterfall-item")
						.animate(_this._setPos(index, _height), _this._mtime);
					// 获取最长的列，
					_maxCol = _this._getMostColumn();

					if (!_maxCol) return;

					// 计算容器的高度值
					_this._container.height(_maxCol.sum + _this._padding);

				});
				// 重新定位完毕后，再次置为加载数据
				_this._bReset = false;
			} else
			// 加载新数据
			{
				// 有多少条数据就生成多少列表项
				for (var i = 0, len = _data.length; i < len; i++) {
					// 已渲染过的列表项直接跳过
					if (i < _this._maxLen) continue;

					var _Element = $('<div class="best-waterfall-con"><div class="image"><img class="_img" _src="' + _data[i].poster + '" src="' + _this._lazy.s + '" style="height:' + _data[i].height + 'px"/></div><div class="text">' + _data[i].text + '</div></div>');

					_this._container.append(_Element);
					_Element
						.addClass("best-waterfall-item")
						.animate(_this._setPos(i, _Element.height()), _this._mtime);

					// 获取最长的列，
					_maxCol = _this._getMostColumn();

					if (!_maxCol) return;

					// 计算容器的高度值
					_this._container.height(_maxCol.sum + _this._padding);
				}
				_this._bLoaded = true;
				_this._lazyload();
			}
		},
		/**
		 * 延迟加载图片
		 * [_lazyload description]
		 * @return {[type]} [description]
		 */
		_lazyload: function() {
			var _this = this,
				_viewH = _this._viewH(),
				_scrollTop = _this._scrollTop();

			$("._img").each(function() {

				var _This = $(this),
					_src = $(this).attr("_src"),
					_parentTop = $(this).closest(".best-waterfall-wrapper").offset();
				_position = $(this).closest(".best-waterfall-item").position();

				// 没有图片src，不处理 
				if (!_src) return;

				var oImage = new Image();

				if (_position.top + _parentTop.top < _viewH + _scrollTop + _this._lazy.threshold) {

					oImage.src = _src;

					// 如果图片已经加载过
					if (oImage.completed) {
						_this._fadeImage(oImage.src, _This);
						return;
					}

					// 图片加载成功
					oImage.onload = function() {
						_this._fadeImage(oImage.src, _This);
					};

					// 图片加载失败
					oImage.onerror = function() {
						_this._fadeImage(_this._lazy.e, _This);
					};

				}
			});
		},
		/**
		 * 计算每个列表项的left、top、height值
		 * [_setPos description]
		 * @param {[type]} i       [description]
		 * @param {[type]} _height [description]
		 */
		_setPos: function(i, _height) {
			var _this = this,
				_css = null;
			// 第一行的数据
			if (i < _this._column) {
				// 第一行每个列表项的
				_css = {
					// 列表项的left
					left: i * (_this._width + _this._padding) + _this._padding,
					// 列表项的top
					top: _this._padding,
					// 列表项的height
					height: _height
				};
				// 每列数据
				_this._heightArray[i] = {
					// 列号
					colId: i,
					// 列的left值
					left: i * (_this._width + _this._padding) + _this._padding,
					// 列中全部的高度值
					height: [_height + _this._padding]
				};
			} else {
				// >=2行的数据

				// 获取最矮的列
				_minCol = _this._getMostColumn(true);

				if (!_minCol) return;

				// 最矮列的列号
				_minColId = _minCol.colId;

				_css = {
					// 列表项的left
					left: _this._heightArray[_minColId].left,
					// 列表项的top
					top: _minCol.sum + _this._padding,
					// 列表项的height
					height: _height
				};
				// 将当前列表项高度加入最矮列中
				_this._heightArray[_minColId].height.push(_height + _this._padding);
			}

			_css.width = _this._width; // 列表项的width 

			return _css;

		},
		/**
		 * 找出数组中最值的一个列表项
		 * [_getMostColumn description]
		 * @param  {[type]} bool [description]
		 * @return {[type]}      [description]
		 */
		_getMostColumn: function(bool) {
			var _this = this,
				// 取最小或最大值,默认是false，取最大值
				_bool = bool || false,
				_len = _this._heightArray.length,
				_arr = [];

			// 把每列中的高度值取出
			for (var i = 0; i < _len; i++) {
				_arr.push({
					// 列号
					colId: i,
					// 计算每列高度之和
					sum: _this._getSum(_this._heightArray[i].height)
				});
			}
			// 得到最值列
			return _this._getMostArray(_arr, _bool);
		},
		/**
		 * 获取数组中最值
		 * [_getMostArray description]
		 * @param  {[type]} arr  [description]
		 * @param  {[type]} bool [description]
		 * @return {[type]}      [description]
		 */
		_getMostArray: function(arr, bool) {
			var _arr = [],
				// 取最小或最大值,默认是false，取最大值
				_bool = bool || false,
				// 最值
				_val = 0,
				_len = arr.length,
				// 最值列
				_mostCol = null;

			if (!_len) return;
			// 把全部列的高度之和存入数组
			for (var i = 0; i < _len; i++) {
				_arr.push(arr[i].sum);
			}

			// 求最值
			_val = Math[_bool ? "min" : "max"].apply(Math, _arr);

			// 获取最值所在的列
			for (var i = 0, _len = arr.length; i < _len; i++) {
				// 如果找到，则跳出for循环
				if (arr[i].sum === _val) {
					_mostCol = arr[i];
					break;
				}
			}
			return _mostCol;
		},
		/**
		 * 数组元素求和
		 * [_getSum description]
		 * @param  {[type]} arr [description]
		 * @return {[type]}     [description]
		 */
		_getSum: function(arr) {
			var _sum = 0;
			for (var i = 0, len = arr.length; i < len; i++) {
				_sum += arr[i];
			}
			return _sum;
		},
		/**
		 * 图片淡入
		 * [_fadeImage description]
		 * @param  {[type]} src     [description]
		 * @param  {[type]} context [description]
		 * @return {[type]}         [description]
		 */
		_fadeImage: function(src, context) {
			context.css("opacity", "0")
				.attr("src", src)
				.removeAttr("_src")
				.animate({
					"opacity": 1
				}, 500);
		},
		/**
		 * 函数防抖
		 * [_throttle description]
		 * @param  {[type]} handler [description]
		 * @param  {[type]} context [description]
		 * @return {[type]}         [description]
		 */
		_throttle: function(handler, context) {
			clearTimeout(handler.timer);
			handler.timer = clearTimeout(function() {
				handler.call(context);
			}, 100);
		},
		/**
		 * 可视区域高度
		 * [_viewH description]
		 * @return {[type]} [description]
		 */
		_viewH: function() {
			return $(window).height();
		},
		/**
		 * 页面顶部隐藏高度
		 * [_scrollTop description]
		 * @return {[type]} [description]
		 */
		_scrollTop: function() {
			return $(window).scrollTop();
		}
	};
	/**
	 * [Waterfall description]
	 * @type {[type]}
	 */
	if (typeof define === "function" && define.amd) {
		// AMD模式
		return Waterfall;
	} else {
		// 全局模式
		this.Waterfall = Waterfall;
	}

});