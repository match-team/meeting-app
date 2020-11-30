import { requestModel } from "../../models/index"

const inventoryModel = new requestModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    limit:10,
    page:1,
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    inventoryModel.getInventoryList({limit:this.data.limit,page:this.data.page}).then(res=>{
      if(res.success){
        //console.log(res);
        this.setData({
          list:res.detail.records
        })
      }else{
        wx.showToast({
          title: res.msg,
          icon:'none'
        })
      }
    })
  },
  goDetail(e){
   // console.log(e.currentTarget.dataset.item);
    if(e.currentTarget.dataset.item.checkDetails.length>0){
    //  let id=e.currentTarget.dataset.item.id;
      let item = e.currentTarget.dataset.item;
      wx.navigateTo({
        url: '/pages/Inventory/InventoryDetail/InventoryDetail?item='+JSON.stringify(item)
      })
    } else{
        wx.showToast({
          title: '无需盘点',
          icon: 'none',
          duration: 2000
        })
    }
  
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})