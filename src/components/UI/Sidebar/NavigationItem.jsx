import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './NavigationItem.module.css';

const NavigationItem = ({ item, onClick, collapsed = false }) => {
  const location = useLocation();
  const isActive = location.pathname === item.href;
  
  return (
    <li className={styles.navItem}>
      <Link
        to={item.href}
        className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''} ${collapsed ? styles.navLinkCollapsed : ''}`}
        onClick={onClick}
        title={collapsed ? item.name : ''}
      >
        <item.icon className={styles.navIcon} />
        {!collapsed && <span className={styles.navText}>{item.name}</span>}
      </Link>
    </li>
  );
};

export default NavigationItem;