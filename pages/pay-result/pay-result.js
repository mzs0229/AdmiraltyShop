Page({
  data:{

  },

  onLoad:function(options){
    this.setData({
      payResult:options.flag,
      id:options.id,
      from:options.from
    });
  },

  viewOrder:function(event){
    wx.navigateBack({
      delta:1
    })
  }
})