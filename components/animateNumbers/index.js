// components/animateNumbers/index.js

Component({

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
    
  },
  data: {
    columns: [],
    keys: [],
  },

  attached(){
    this.setRange()
    // this.renderStyle()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setRange(){
      let { max,min } = this.properties

      min = parseInt(min) >= 0 ? parseInt(min): 0
      max = parseInt(max) > min ? parseInt(max): min

      let columns = this.initColumn(max);

      this.setData({
        columns,
        max, 
        min,
      })

      // 范围调整后，修正当前 value
      if(this.properties.value) {
        this.run(this.properties.value)
      }

    },
    initColumn(n){
      let digit = (n + '').length,
          arr = [],
          rows = [' ', '0','1','2','3','4','5','6','7','8','9'];
      for(let i = 0; i< digit; i++){
        if(i) {
          arr.unshift(rows)
        }else{
          arr.unshift( rows.slice(1) )
        }
      }
      return arr
    },

    run(n){
      let { max,min } = this.data;
      let value = parseInt(n);
          value = value<min ? min :
          value>max ? max : value;
      let valueArr = value.toString().split(''), 
          lengths = this.data.columns.length,
          indexs = [];

      while(valueArr.length){
        let figure = valueArr.pop();
        if(indexs.length){
          indexs.unshift(parseInt(figure) +1)
        }else{
          indexs.unshift(parseInt(figure))
        }
      }
      while( indexs.length < lengths ){
        indexs.unshift(0)
      }
      this.setData({
        keys: indexs
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

