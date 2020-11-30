// pages/Scrap/scrapApply/scrapApply.js
import { requestModel } from "../../../models/index"
const inventoryModel = new requestModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{},
    goods:{}
  },
  goback(){
    wx.navigateBack({
      delta: 0,
    })
  },
  onLoad: function (options) {
    let item = JSON.parse(options.item);
    this.setData({
      item:item
    })
    let param = {id:item.goodsId,size:1,current:1};
    inventoryModel.getGoodsRecordList(param).then(res=>{
       if(res.success){
        let records = res.detail.records;
        if(records.length>0){
          this.setData({
            goods:records[0]
          })
        }
       }else{
         wx.showToast({
           title: res.msg,
           duration:2000,
           icon:'none'
         })
       }
       
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