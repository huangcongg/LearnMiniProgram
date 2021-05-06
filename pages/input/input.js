// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handleInput(e){
    console.log('input中',e);
  },
  handleFocus(e){
    console.log('获得焦点',e);
  },
  handleBlur(e){
    console.log('失去焦点',e);
  }
})