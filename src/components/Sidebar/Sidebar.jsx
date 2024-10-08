import React, { useContext, useState } from 'react'
import '../Sidebar/Sidebar.css'
import { Assets } from "../../assets/assets";
import { Context } from '../../Context/Context';

const Sidebar = () => {

    const [sidenav, setSideNav] = useState(false);
    const {onSent,prevRecent,setRecent,newChat} = useContext(Context);
    
    // onSent and setRecent are use laterly for future

    return (
        <div className='sidebar'>

            <div className="sidenav-top">
                <img onClick={()=>setSideNav(previous=>!previous)} className='menu' src={Assets.menu_icon} />

                <div onClick={()=>newChat()} className="new-chat">
                    <img src={Assets.plus_icon} />
                    {sidenav ? <p>New Chat</p> : null}
                </div>

                {sidenav ? <div className="recent">

                    <p className='title'>Recent</p>
                    {prevRecent.map((items,index)=>{
                        return (
                            <div className="recent-items">
                            <img src={Assets.message_icon} />
                            <p>{items.slice(0,18)}...</p>
    
                        </div>
                        )
                    })}
                   

                </div> : null}

            </div>

            <div className="sidenav-bottom">
                <div className="bottom-item recent-items">
                    <img src={Assets.question_icon} />
                    {sidenav?<p>Help</p>:null}
                </div>

                <div className="bottom-item recent-items">
                    <img src={Assets.history_icon} />
                    {sidenav?<p>Activity</p>:null}
                </div>

                <div className="bottom-item recent-items">
                    <img src={Assets.setting_icon} />
                    {sidenav?<p>Settings</p>:null}
                </div>


            </div>
        </div>
    )
}

export default Sidebar