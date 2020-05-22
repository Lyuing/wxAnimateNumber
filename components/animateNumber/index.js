// components/animateNumber/index.js

const CONFIG = {
  during: 1,        // :number 动画时间
  height: 40,       // :number 滚动行高 px
  width: '100%',    // 组件整体宽度
  ease: 'cubic-bezier(0, 1, 0, 1)',   // 动画过渡效果
  color: '#FF5837', // 字体颜色
  columnStyle: '',  // 字体单元 覆盖样式
}
const LOCK = 500

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: Number,
      observer (n){
        this.run(n)
      }
    },
    max: {
      type: Number,
      value: 100,
      observer (){
        this.setRange()
      }
    },
    min: {
      type: Number,
      value: 0,
      observer (){
        this.setRange()
      }
    },
    options: {
      type: Object,
      value: {}
    },
  },
  data: {
    columns: [],
    key: 0,
    _options: JSON.parse(JSON.stringify(CONFIG)),
  },

  attached(){
    this.setRange()
    this.renderStyle()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setRange(){
      let { max,min } = this.properties
      let arr = []

      min = parseInt(min)
      max = parseInt(max)
      if(max - min < 0){
        max = min
      }else if(max - min > LOCK){
        max = min + LOCK
      }

      for(let i = min; i<= max; i++){
        arr.push(i)
      }
      this.setData({
        columns: arr,
        max,
        min,
      })
      
      // 范围调整后，修正当前 value
      if(this.properties.value) {
        this.run(this.properties.value)
      }

    },
    run(n){
      let { max,min } = this.data
      let index;
      n = parseInt(n)
      n = n<min ? min :
          n>max ? max : n
      index = this.data.columns.indexOf(n)
      this.setData({
        key: index>-1 ? index : 0
      })
    },
    renderStyle(){
      /**
       * color,
       * columnStyle, 
       * width, 
       * height, 
       * during, 
       * ease, 
       */
      let options = this.properties.options,
        _options = this.data._options;
      console.log('options:',options)
      Object.keys(options).map(i=>{
        let val = options[i]
        switch (i) {
          case 'during':
          case 'height':
            if(parseInt(val) || val === 0 || val === '0'){
              _options[i] = val
            }
            break;
          default:
            val && (_options[i] = val);
            break;
        }
        
      })
      this.setData({
        _options
      })
      console.log(this.data._options)
    },
  }
})

