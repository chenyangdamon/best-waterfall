# best-waterfall 是什么?
应用于web开发的瀑布流组件,实现滚动页面异步加载数据、图片懒加载、窗口重置布局自动更新.
# 演示
[Demo](https://chenyangdamon.github.io/best-waterfall/dist/)
# 依赖
- jquery
# 安装
## script
```html
// import jquery.js
<script type="text/javascript" src="js/jquery.js"></script>
// import best-waterfall.js
<script type="text/javascript" src="js/best-waterfall.js"></script>
```
# 使用
index.js
```html
<script type="text/javascript">
$(function(){
  
  // 实例化Waterfall
  var waterfall=new Waterfall(options);
  
});
</script>
```
# 结构
## 配置项
|属性|说明|默认值|字段类型|
|:---|---|---|---|
| `container`|待处理的DOM元素,是一个jQuery对象.|`".best-waterfall-wrapper"`|`String`|
| `width`|列宽.|`200`|`Number`|
| `padding`|列内填充.|`10`|`Number`|
| `lazy`|延迟加载配置,`threshold`是阈值,`s`是加载中动画icon,`e`是加载时icon.|`{threshold:"",s:"",e:""}`|`Object`|
| `url`|接口url.|`""`|`String`|


