// pages/home/home.js
const app = getApp()
app.globalData.token
Page({
  handleShowToast() {
    wx.showToast({
      title: '加载中ing',
      duration: 3000,
      icon: 'loading',
      mask: true,
      success: function(){
        console.log('展示弹窗成功');
      },
      fail: function(){
        console.log('展示弹窗失败');
      },
      complete: function(){
        console.log('完成函数的调用');
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容，哈哈哈',
      // showCancel: false,
      cancelText: '退出',
      cancelColor: 'red',
      success: res => {
        if(res.cancel){
          console.log('用户点击了取消');
        }
        if(res.confirm){
          console.log('用户点击了确定');
        }
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: '加载ing',
      mask: true
    })
    setTimeout(() => {
      wx.hideLoading({
        // 必须手动调用hideLoading才会让loading消失
        success: (res) => {},
      })  
    }, 1000);
    
  },
  handleShowAction() {
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor: 'red',
      success: res => {
        console.log(res);
      }
    })
  },
  onShareAppMessage: function(options) {
    return {
      title: '你好啊，李银河',
      path: '/pages/about/about',
      imageUrl: 'http://picapi.zhituad.com/photo/44/45/17DFC.jpg'
    }
  }
})