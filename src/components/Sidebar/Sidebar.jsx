import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Sidebar.module.css'
import SideBarFriends from './SideBarFriends/SideBarFriends'



function Sidebar(props) {
  let friends = props.state.friends.map(item => <SideBarFriends id={item.id} name={item.name} />)
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/musics" activeClassName={s.activeLink}>Musics</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
      </div>
      <div className={s.friends}>
        {friends}
      </div>
    </nav>
  )
}

export default Sidebar