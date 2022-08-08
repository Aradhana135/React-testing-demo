import React, { useState } from 'react'
const status={
  Hovered:'hovered',
  Normal:'normal'  
}
const Link = ({page,children}) => {
    const[Status,setstatus]=useState(status.Hovered)
    const onMouseEnter = () => {
        setstatus(status.Hovered);
      };
    
      const onMouseLeave = () => {
        setstatus(status.Normal);
      };
    
      return (
        <a
          className={status}
          href={page || '#'}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {children}
        </a>
      );
    }


export default Link