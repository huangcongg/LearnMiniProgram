// pages/home/home.js
// getApp()获取App()产生的实例对象
// const app = getApp();
// console.log(app.globalData.name);
// console.log(app.globalData.age);

// 注册页面
// 页面也有自己的生命周期函数
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 1.监听页面的生命周期函数
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad');
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success(res){
        console.log(res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload');
  },

 

  

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 3. 监听wxml中相关的一些事件
  handleGetUserInfo(event){
    console.log(event);
  },
  handleViewClick(){
    console.log('哈哈哈，被点击了');
  },

  // 其他事件
  // 监听页面的滚动
  onPageScroll(obj) {
    console.log(obj);
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('页面滚动到底部');
  },
   /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('下拉刷新的事件');
  },
})