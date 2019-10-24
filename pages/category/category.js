import {
  Category
} from '../category/category-model.js';

var category = new Category();

Page({


  data: {
    currentMenuIndex: 0,
    loadedData: {}
  },

  onLoad: function(options) {
    this._loadData();
  },

  isLoadedData: function(index) {
    if (this.data.loadedData[index]) {
      return true;
    } else {
      return false;
    }
  },

  changeCategory: function(event) {
    var index = category.getDataSet(event, 'index'),
      id = category.getDataSet(event, 'id');

    this.setData({
      currentMenuIndex: index
    })
    if (!this.data.loadedData[index]) {
      category.getProductsByCategory(id, (data) => {
        var dataObj = {
          products: data,
          topImgUrl: this.data.categoryTypeArr[index].img.url,
          title: this.data.categoryTypeArr[index].name
        }
        this.setData({
          categoryProducts: dataObj
        })
        this.data.loadedData[index] = dataObj;
      })
    } else {
      this.setData({
        categoryProducts: this.data.loadedData[index]
      })
    }
  },

  _loadData: function() {
    category.getCategoryType((categoryData) => {
      this.setData({
        categoryTypeArr: categoryData
      });

      category.getProductsByCategory(categoryData[0].id, (data) => {
        var dataObj = {
          products: data,
          topImgUrl: categoryData[0].img.url,
          title: categoryData[0].name
        }
        this.setData({
          categoryProducts: dataObj
        })
        this.data.loadedData[0] = dataObj;
      })
    })
  },

  onProductsItemTap: function(event) {
    var id = category.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../product/product?id=' + id
    });
  },

})