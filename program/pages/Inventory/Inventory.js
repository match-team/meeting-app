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
    
    let goodsId=e.currentTarget.dataset.detail[0].goodsId
    console.log(e.currentTarget.dataset.detail[0].goodsId)

    wx.navigateTo({
      
      url: '/pages/Inventory/InventoryDetail/InventoryDetail?goodId='+goodsId
    })
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