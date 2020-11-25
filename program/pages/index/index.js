Page({

  /**
   * 页面的初始数据
   */
  data: {
    closeAll:true,
    OpenTodolist:true,
    Todolist:['你有 1 个会议冲突待处理','你有 2 个会议即将开始','你有 1 个会议申请变更待处理','你有 1 个会议申请变更成功']
  },
  goDetail(){
    wx.navigateTo({
      url: '/pages/index/metting-detail/metting-detail',
    })
  },
  createMetting(){
    wx.navigateTo({
      url: '/pages/createMetting/createMetting',
    })
  },
  closeAll(){
    this.setData({
      closeAll:false
    })
  },
  handleCalendar(){
    wx.navigateTo({
      url: '/pages/calendar/calendar',
    })
  },
  handleOpenList(){
    this.setData({
      OpenTodolist:!this.data.OpenTodolist
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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