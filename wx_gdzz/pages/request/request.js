// pages/request/request.js
const pre = '../../static/images/dice_';
const fix = '.png';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tar: '',
    src1: '',
    src2: '',
    src3: '',
    src4: '',
    src5: '',
    src6: '',
    src8:'../../images/app_active.png',
    x:30,
    y:480

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
    // wx.request({
    //   url: 'http://127.0.0.1/hello',
    //   data: {
    //     name: 'tom',
    //     age: 11
    //   },
    //   header: {
    //     "content-type": "application/x-www-form-urlencoded"
    //   },
    //   method: 'POST',
    //   success: res => {
    //     this.setData({
    //       tar: res.data
    //     })
    //   },
    //   fail: res => {

    //   },
    //   complete: res => {

    //   }
    //   // 省略其他参数
    // })
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

  },
  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },
  tz:function(res){
    var mycars = new Array()
    for(var i=1;i<=6;i++){
      var num = Math.floor(Math.random() * 6) + 1;
      var mysrc = 'src' + i;
      var myurl = pre + num + fix;
      mycars[i - 1] = myurl;
    }
    this.setData({
      src1: mycars[0],
      src2: mycars[1],
      src3: mycars[2],
      src4: mycars[3],
      src5: mycars[4],
      src6: mycars[5],
      x: 30,
      y: 480
    })
  }
})