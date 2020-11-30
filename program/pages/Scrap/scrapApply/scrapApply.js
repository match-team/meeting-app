// pages/Scrap/scrapApply/scrapApply.js
import { requestModel } from "../../../models/index"
const inventoryModel = new requestModel()
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{},
    buttonHidden:false,
    base_url:app.globalData.base_url
  },

  handleAuditPass(e){
    let id = e.currentTarget.dataset.id;
    inventoryModel.destroyrecordAuditPass(id).then(res=>{
        if(res.success){
          wx.showToast({
            title: '审核成功',
            icon:'none',
            duration:2000
          })
          this.setData({
            buttonHidden:true
          })
        }else{
          wx.showToast({
            title: res.msg,
            icon:'none',
            duration:2000
          })
        }
    })
 
  },
  handleAuditNoPass(e){
    let id = e.currentTarget.dataset.id;
    inventoryModel.destroyrecordAuditNoPass(id).then(res=>{
      if(res.success){
        wx.showToast({
          title: '审核成功',
          icon:'none',
          duration:2000
        })
        this.setData({
          buttonHidden:true
        })
      }else{
        wx.showToast({
          title: res.msg,
          icon:'none',
          duration:2000
        })
      }
    })
    // wx.navigateTo({
    //   url: '/pages/Scrap/scrapApply/mettingSucess/mettingSuccess',
    // })
  },
  goback(){
    wx.navigateBack({
      delta: 0,
    })
  },
  onLoad: function (options) {
    this.setData({
      item:JSON.parse(options.item)
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