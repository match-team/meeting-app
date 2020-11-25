import { jump } from '../../components/calendar/main.js';



Page({

  data: {
    Schedule:[],
    calendarConfig: {
      showLunar: true,
      emphasisWeek: true,
      defaultDay:true,
      theme: 'elegant',
      onlyShowCurrentMonth: 1,
      markToday: '今',
    },
  },
  afterTapDay(e) {
    console.log('afterTapDay', e.detail); // => { currentSelect: {}, allSelectedDays: [] }
  },

  onSwipe(e) {
    console.log('onSwipe', e.detail);
    const dates = this.calendar.getCalendarDates();
  },

  whenChangeMonth(e) {
    console.log('whenChangeMonth', e.detail);
    // => { current: { month: 3, ... }, next: { month: 4, ... }}
  },

  whenChangeWeek(e) {
    console.log('whenChangeWeek', e.detail);

  },

  onTapDay(e) {
    console.log('onTapDay', e.detail); // => { year: 2019, month: 12, day: 3, ...}
  },

  afterCalendarRender(e) {
   
    this.calendar.setTodoLabels({
      pos: 'bottom', // 待办点标记位置 ['top', 'bottom']
      dotColor: 'purple', // 待办点标记颜色
      // circle: true, // 待办圆圈标记设置（如圆圈标记已签到日期），该设置与点标记设置互斥
      showLabelAlways: true, // 点击时是否显示待办事项（圆点/文字），在 circle 为 true 及当日历配置 showLunar 为 true 时，此配置失效
      days: [
        {
          year: 2020,
          month: 11,
          day: 1,
          color: '#f40' // 单独定义代办颜色 (标记点、文字)
        },
        {
          year: 2020,
          month: 11,
          day: 15
        }
      ]
    });
    console.log('afterCalendarRender', e);
    console.log(e.detail.todoConfig.days)
    this.setData({
      Schedule:e.detail.todoConfig.days
    })
  },
  onLoad(){

   
  }
});