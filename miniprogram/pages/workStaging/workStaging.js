// pages/workStaging/workStaging.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    pendingList: [{ name: '待办方案', value: 100 }, { name: '已办课题', value: 99 }, { name: '我的请求', value: 1 }, { name: '我的请求', value: 1 }],
    meetingList: [{ title: '会议主题', content: 'sdsds' }, { title: '会议时间', content: 'sdsds' }, { title: '会议地点', content: 'sdsds' }],
    processList: [
      { title: '差旅报销kjhjkh' },
      { title: '出差报备' },
      { title: '请假流程' },
      { title: '对外付款' },
      { title: '员工入职' },
      { title: '员工离职' },
      { title: '请假流程' },
      { title: '招聘申请' }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
