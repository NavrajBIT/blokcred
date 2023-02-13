import React from 'react';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';



export const SubNavbar = () => {
  return (
    <div className='subnavbar'>
        <div className='heading'>
            <div>
                {/* <img className='headingicon' alt='dashboard' /> */}
                <AdminPanelSettingsIcon />
            </div>
            <div >
                <h5 className='title1'>ADMIN</h5>
            </div>
        </div>
    </div>
  )
}
