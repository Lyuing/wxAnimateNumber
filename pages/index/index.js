//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    value: 0,
    numberVal: '',

    start: -50,
    limit: 200,

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
  onRun(){
    this.setData({
      numberVal: this.data.value
    })
  },
  onInput(e){
    let value = e.detail.value
    this.setData({
      value
    })
  },
  
})
