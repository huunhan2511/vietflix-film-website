import { notification } from 'antd';

export const openNotificationWithIcon = (type,description,placement) => {
    notification[type]({
      description: description,
      placement : placement,
      style:{
        backgroundColor : "#191919",
        color : "#fff"
      },
      duration : 3.0
    });
  };