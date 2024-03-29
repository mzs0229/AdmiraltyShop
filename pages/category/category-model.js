import {Base} from '../../utils/base.js';

class Category extends Base
{
  constructor(){
    super()
  }

  getCategoryType(callback){
    var param = {
      url:'category/all',
      sCallback:function(data){
        callback&&callback(data);
        console.log(data)
      }
    }
    this.request(param);
    
  }

  getProductsByCategory(id,callback){
    var param = {
      url:'product/by_category?id='+id,
      sCallback:function(data){
        callback&&callback(data);
      }
    }
    this.request(param);
  }
}

export {Category};




