import React from 'react';
import { useContext, useState } from "react";
import UserContext from "../../context/userContext/UserContext";
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';


export const SideBar = () => {
    
    const user = useContext(UserContext);
  return (
    <div className='sidebar'>
        <div className='sidebaritems'>
            <div className='sidebaritem' onClick={(e) => user.setIsSidebar(user.isSidebar=1)}>
                <div className='sidebaritemicon' >
                    <CorporateFareIcon />
                </div>
                <div>
                    <p className='sidebaritemtext'>
                       Add Admin
                    </p>
                </div>
            </div>
            <div className='sidebaritem ' onClick={(e) => user.setIsSidebar(user.isSidebar=2)}>
                <div className='sidebaritemicon analysis' >
                    <SupervisorAccountIcon />
                </div>
                <div>
                    <p className='sidebaritemtext'>
                       All Users
                    </p>
                </div>
            </div>
            <div className='sidebaritem ' onClick={(e) => user.setIsSidebar(user.isSidebar=3)}>
                <div className='sidebaritemicon analysis' >
                    <QueryStatsIcon />
                </div>
                <div>
                    <p className='sidebaritemtext'>
                       Analytics
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
