# wxAnimateNumber
小程序数字滚动

![image](https://raw.githubusercontent.com/LY-u/wxAnimateNumber/master/example/demo.gif)
![image](https://img2020.cnblogs.com/blog/1367213/202005/1367213-20200526160723087-1804393568.gif)

> 两种组件类型：
  > animateNumber: 范围内的所有数字连贯滚动，显示效果佳，但仅限于上下500内，否则页面卡顿  
  > animateNumbers: 各个数位的数字单独滚动，0以上皆可
  
```
// animateNumber 使用示例
<animate-number value="{{value}}" min='{{-50}}' max='{{300}}' options='{{options}}'/>

// 配置项如下
options: {
  during: 1,            // (number) 动画时间
  height: 40,           // (number) 滚动行高 px
  width: '100%',        // (string) 组件整体宽度
  ease: 'cubic-bezier(0, 1, 0, 1)',   // (string) 动画过渡效果
  color: '#FF5837',     // (string) 字体颜色
  columnStyle: '',      // (string) 字体单元 覆盖样式
}


// animateNumbers 使用示例
<animate-numbers value="{{value}}" min='{{0}}' max='{{999}}' options='{{options}}'/>

// 配置项如下
options: {
  during: 1,            // (number) 动画时间
  height: 40,           // (number) 滚动行高 px
  cellWidth: 24,        // (number) 单个数字宽度 px
  ease: 'cubic-bezier(0, 1, 0, 1)',   // (string) 动画过渡效果
  color: '#FF5837',     // (string) 字体颜色
  columnStyle: '',      // (string) 字体单元 覆盖样式
}

```
