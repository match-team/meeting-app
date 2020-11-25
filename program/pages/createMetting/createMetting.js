// pages/createMetting/createMetting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    errorMsg:'',
    showTopTips: false,
   
    radioItems: [{
        name: 'cell standard',
        value: '0',
        checked: false
      },
      {
        name: 'cell standard',
        value: '1',
        checked: false
      }
    ],
    checkboxItems: [{
        name: 'B121会议室.',
        value: '0',
        checked: false
      },
      {
        name: 'B801会议室.',
        value: '1',
        checked: false
      },
      {
        name: 'B761会议室.',
        value: '2',
        checked: false
      },
      {
        name: 'A921会议室.',
        value: '3',
        checked: true
      },
      {
        name: 'B321会议室.',
        value: '4',
        checked: false
      },
    ],
    items: [{
        name: 'USA',
        value: '美国'
      },
      {
        name: 'CHN',
        value: '中国',
        checked: 'true'
      },
      {
        name: 'BRA',
        value: '巴西'
      },
      {
        name: 'JPN',
        value: '日本'
      },
      {
        name: 'ENG',
        value: '英国'
      },
      {
        name: 'TUR',
        value: '法国'
      },
    ],

    date: "2016-09-01",
    time: "12:01",

    countryCodes: ["+86", "+80", "+84", "+87"],
    countryCodeIndex: 0,

    countries: ["中国", "美国", "英国"],
    countryIndex: 0,

    accounts1: ["参会人员", "QQ", "Email"],
    accounts2: ["指定部门", "QQ", "Email"],
    accounts3: ["指定人员", "QQ", "Email"],
    accountIndex: 0,

    isAgree: false,
    formData: {

    },
    rules: [{
      name: 'radio',
      rules: {
        required: true,
        message: '单选列表是必选项'
      },
    }, {
      name: 'checkbox',
      rules: {
        required: true,
        message: '多选列表是必选项'
      },
    }, {
      name: 'qq',
      rules: {
        required: true,
        message: 'qq必填'
      },
    }, {
      name: 'mobile',
      rules: [{
        required: true,
        message: 'mobile必填'
      }, {
        mobile: true,
        message: 'mobile格式不对'
      }],
    }, {
      name: 'vcode',
      rules: {
        required: true,
        message: '验证码必填'
      },
    }, {
      name: 'idcard',
      rules: {
        required: true,
        message: 'idcard必填'
      },
    }]
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    console.log(e.detail.value)
    if(e.detail.value==1){
      this.setData({
        showTopTips:true,
        errorMsg:'当前时间段已经没有会议室了，你可以更改会议时间活向已预约会议室会议申请变更会议！'
      })
    }

    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems,
      [`formData.radio`]: e.detail.value
    });
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    var checkboxItems = this.data.checkboxItems,
      values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems,
      [`formData.checkbox`]: e.detail.value
    });
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value,
      [`formData.date`]: e.detail.value
    })
  },
  formInputChange(e) {
    const {
      field
    } = e.currentTarget.dataset
    this.setData({
      [`formData.${field}`]: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindCountryCodeChange: function (e) {
    console.log('picker country code 发生选择改变，携带值为', e.detail.value);

    this.setData({
      countryCodeIndex: e.detail.value
    })
  },
  bindCountryChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);

    this.setData({
      countryIndex: e.detail.value
    })
  },
  bindAccountChange: function (e) {
    console.log('picker account 发生选择改变，携带值为', e.detail.value);

    this.setData({
      accountIndex: e.detail.value
    })
  },
  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  },
  submitForm() {
    wx.navigateTo({
      url: '/pages/createMetting/mettingSucess/mettingSuccess',
    })
    // this.selectComponent('#form').validate((valid, errors) => {
    //   console.log('valid', valid, errors)
    //   if (!valid) {
    //     const firstError = Object.keys(errors)
    //     if (firstError.length) {
    //       this.setData({
    //         error: errors[firstError[0]].message
    //       })

    //     }
    //   } else {
    //     wx.showToast({
    //       title: '校验通过'
    //     })
    //   }
    // })
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