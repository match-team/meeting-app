// pages/Inventory/InventoryDetail/confirm/confirm.js
import { requestModel } from "../../../../models/index"
const inventoryModel = new requestModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:{},
    checkdata:{},
    applyRecord:{},
    item:{},
    buttonHiddle:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let item =JSON.parse(options.item);
    let cd = JSON.parse(options.checkdata);
  
    this.setData({
      item:item,
      checkdata:cd,
      goods:cd.goodsRecord
    })
    if(cd.applyRecords && cd.applyRecords.length>0){
      this.setData({
        applyRecord:cd.applyRecords[0]
      })
    }
  },
  detailHandle(e){
    let tstatus = e.currentTarget.dataset.status;
    inventoryModel.detailHandle({id:this.data.checkdata.id,status:tstatus}).then(res=>{
        if(res.success){
          //修改本地数据中的值
          let checkDetails = this.data.item.checkDetails;
          for(let i=0;i<checkDetails.length;i++){
              if(checkDetails[i].id==this.data.checkdata.id){
                checkDetails[i].status=tstatus
              }
          }
          wx.showToast({
            title: '修改成功',
            icon:'none'
          })
          this.setData({
            buttonHiddle:true
          })
          //跳转到盘点详情页面
          // wx.navigateTo({
          //   url: '/pages/Inventory/InventoryDetail/InventoryDetail?item='+JSON.stringify(this.data.item)
          // })

        }else{
          
          wx.showToast({
            title: res.msg,
            icon:'none'
          })
        }
    })
  },
  goback(){
    wx.navigateBack({
      delta: 0,
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