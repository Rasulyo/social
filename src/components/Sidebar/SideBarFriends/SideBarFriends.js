import React from 'react'
import s from './Sidebar.module.css'



function SideBarFriends(props) {
  return (
      <div className={s.friends}>
          <div className={s.friends_item}>
            <img src="https://static.remove.bg/remove-bg-web/3661dd45c31a4ff23941855a7e4cedbbf6973643/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png" alt="" />
            {props.name}
          </div>  
      </div>
  )
}

export default SideBarFriends