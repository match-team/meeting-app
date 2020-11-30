// pages/Inventory/InventoryDetail/InventoryDetail.js
import { requestModel } from "../../../models/index"
var app=getApp();
const inventoryModel = new requestModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkdata:{},
    fileUrl:app.globalData.base_url+'/',
    isdata:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let tcheckdata=JSON.parse(options.item);
    inventoryModel.getCheckDetail(tcheckdata.id).then(res=>{
      console.log(res)
        if(res.success){
          this.setData({
            checkdata:res.detail,
            isdata:true
          })
        }else{            
        }
    })
 
  },
  handleInventory(){
    var that = this;
    wx.scanCode({ //扫描API
      success(res) { //扫描成功
        console.log(res.result) //输出回调信息
        let goods=JSON.parse(res.result)
        console.log(goods)
        let cd =that.data.checkdata.checkDetails.filter(item=>item.goodsRecord.goodsNum==goods.goodsNum)
        if(cd.length==0){
          wx.showToast({
            title: '数据不匹配',
            duration: 1000
          })
          return
        }
        wx.showToast({
          title: '成功',
          duration: 1000
        })
        wx.navigateTo({
          url: '/pages/Inventory/InventoryDetail/confirm/confirm?checkdata='+JSON.stringify(cd[0])+'&item='+JSON.stringify(that.data.checkdata),
        })
      },
      fail(res){
        wx.showToast({
          title: '解析失败',
          duration: 1000
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
    if(this.data.isdata){
      inventoryModel.getCheckDetail(this.data.checkdata.id).then(res=>{
        console.log(res)
          if(res.success){
            this.setData({
              checkdata:res.detail,
              isdata:true
            })
          }else{ 
            wx.showToast({
              title: '更新数据失败',
              duration: 1000
            })        
          }
      })
    }
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