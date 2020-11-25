Page({

  /**
   * 页面的初始数据
   */
  data: {
    showIndex: 0,
    maskData: [{
      title: '东方钢铁商务有限公司',
      titleChecked:false,
      list: [{
        text: '循环宝',
        id: 1,
        checked: false
      }, {
        text: '商模',
        id: 2,
        checked: true
      }, {
        text: '会务',
        id: 3,
        checked: true
      }, {
        text: '大客户',
        checked: true,
        id: 4
      }, {
        text: '其它部门',
        checked: true,
        id: 5
      }]
    }, {
      title: '东方钢铁商务有限公司',
      titleChecked:true,
      list: [{
        text: '循环宝',
        id: 1,
        checked: false
      }, {
        text: '商模',
        id: 2,
        ckecked: true
      }, {
        text: '会务',
        id: 3,
        checked: true
      }, {
        text: '大客户',
        checked: true,
        id: 4
      }, {
        text: '其它部门',
        checked: true,
        id: 5
      }]
    }, {
      title: '东方钢铁商务有限公司',
      titleChecked:true,
      list: [{
        text: '循环宝',
        id: 1,
        checked: false
      }, {
        text: '商模',
        id: 2,
        checked: true
      }, {
        text: '会务',
        id: 3,
        checked: true
      }, {
        text: '大客户',
        checked: true,
        id: 4
      }, {
        text: '其它部门',
        checked: true,
        id: 5
      }]
    }, ]
  },
  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  panel: function (e) {
    console.log(e.currentTarget.dataset)
    if (e.currentTarget.dataset.index != this.data.showIndex) {
      this.setData({
        showIndex: e.currentTarget.dataset.index
      })
    } else {
      this.setData({
        showIndex: 0
      })
    }
  },


})