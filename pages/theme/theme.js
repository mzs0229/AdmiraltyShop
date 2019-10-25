import {Theme} from 'theme-model.js';
var theme = new Theme()

Page({

  data:{

  },

  onLoad:function(options){
    console.log('onload')
    var id = options.id
    var name = options.name
    this.data.id = id
    this.data.name = name


    this._loadData();

  },

  onReady:function() {
    console.log('onready')
    console.log(this.data);
    wx.setNavigationBarTitle({
      title: this.data.themeInfo.description
    });
  },

  _loadData:function(){
    console.log('loaddata')
    theme.getProductsData(this.data.id,(data)=>{
      this.setData({
        themeInfo:data    
      })
      
    })
   
    
  },



  onProductsItemTap: function (event) {

    var id = theme.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../product/product?id=' + id
    });
  },
  

})