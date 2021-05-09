// components/my-mslot/my-mslot.js
Component({
  options:{
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    counter: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  // 外界给组件传入额外的样式
  externalClassess: [],

  // 可以监听properties和data的改变
  observers: {
    counter: function(newVal) {
      console.log(newVal);
    }
  },

  // 组件的生命周期函数  
  // 1.监听所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log('监听组件所在页面显示出来的');
    },
    hide() {
      console.log('监听组件所在页面隐藏起来时');
    },
    resize() {
      console.log('监听页面尺寸改变');
    }
  },
  // 2.监听组件本身的生命周期
  lifetimes: {
    created() {
      console.log('组件被创建');
    },
    attached() {
      console.log('组件被添加到页面');
    },
    ready() {
      console.log('组件被渲染出来');
    },
    moved() {
      console.log('组件被移动到另外一个节点');
    },
    detached() {
      console.log('组件被移除掉');
    }
  }
})
