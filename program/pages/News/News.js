import { requestModel } from "../../models/index"

const scrapModel = new requestModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:1,
    size:10,
    list:[]
  },
  goDetail(){
    wx.navigateTo({
      url: '/pages/Scrap/scrapApply/scrapApply',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    scrapModel.getNewList({current:this.data.current,size:this.data.size}).then(res=>{
      console.log(res)
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