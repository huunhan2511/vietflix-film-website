import React, {useState} from 'react'

const Notification = ({content, color, show}) => {
  const [styte] = useState("bg-"+color+"-400 bg-opacity-40 text-"+color+"-700");
  return(
    <div className= {styte} id="notification">
      {content}
    </div>
  )
};
export default Notification;