import React from 'react'
import '../App.css';
import Main from './Main';



import {SidebarData} from './SidebarData'

function Sidebar () {
    return (
        <div className='Content'>
            <div className='container'>
        <div className='Sidebar'>
            <ul className='SidebarList'>
           {SidebarData.map((val, key)=> {
            return (
                <li key={key} className="row" 
                id={window.location.pathname == val.link ? "active" : ""}
                 onClick={()=>{window.location.pathname= val.link}}>
                {" "}
                <div id="icon"> {val.icon} </div> {" "}
                <div id="title">
                    {val.title}
                </div>
            </li>
            );
           })}
           </ul>
        </div>
        </div>
        
        <Main />

        </div>
    );
}

export default Sidebar  
 