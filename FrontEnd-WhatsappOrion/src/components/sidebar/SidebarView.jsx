import React, { useState, useEffect } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import {IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import TimelineIcon from '@mui/icons-material/Timeline';
import EmailIcon from '@mui/icons-material/Email';
import Avatar from '@mui/material/Avatar';



const Sidebar = ({ isCollapsed, toggleSidebar }) => {


    return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>

      <div className={"sidebar-header"}>
        <IconButton onClick={toggleSidebar}>
          <MenuIcon style={{ color: '#fff' }} />
        </IconButton>
      </div>
      <div className="sidebar-logo">
        {!isCollapsed ? (
          <img
            src="https://via.placeholder.com/150x50"
            alt="Logo"
            className="logo"
          />
        ) : (
          <img
            src="https://via.placeholder.com/50x50"
            alt="Logo colapsado"
            className="logo-collapsed"
          />
        )}
      </div>

      <div className="sidebar-menu">
        <div className="menu-item" >
          <HomeIcon className="icon" />
          <span>Inicio</span>
        </div>
        <hr className="divider" />
        {!isCollapsed && <p className="menu-title">Menú principal</p>}


        <div className="menu-item" >
            <Link to={"/GestorCliente"} className='menu-link'>
            <EmailIcon className="icon" />
            <span>Gestor de mensajes</span>
            </Link>
        </div>

        <div className="menu-item">
         <Link to={"/GestorFlujo"} className='menu-link'>
          <TimelineIcon className="icon" />
          <span>Gestor de flujos</span>
          </Link>
        </div>

        <div className="menu-item">
        <Link to={"/ConfigDatos"} className='menu-link'>
          <SettingsIcon className='icon'/>
          <span>Configuracion</span>
        </Link>
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="user-info">
          <Avatar
            alt="User"
            src="https://via.placeholder.com/50"
            className="user-avatar"
          />
          <div>
            <p className="user-name">Joe Doe</p>
            <p className="user-role">Ingeniero de software</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
