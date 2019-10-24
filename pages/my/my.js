// import { Address } from '../../utils/address.js';
// import { Order } from '../order/order-model.js';
import { My } from '../my/my-model.js';

// var address = new Address();
// var order = new Order();
var my = new My();


Page({
  data:{

  },

  onLoad:function(options){
    this._loadData();
  },

  _loadData:function(){
    my.getUserInfo((data)=>{
      this.setData({
        userInfo:data
      })
    })
  },

  onGotUserInfo:function(e){
    console.log(e.detail.errMsg);

  }
})