//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    numberVal: 0,

    start: -50,
    limit: 299,

    options: {
      color: 'green',
      during: 2,
      height: 50,
      width: '100px',
      columnStyle: 'font-weight: normal',
    },
  },
  //事件处理函数
  onReset: function() {
    this.setData({
      numberVal: 0
    })
  },
  onInput(e){
    let value = e.detail.value
    this.setData({
      numberVal: value
    })
  },
  
})
