import React from 'react';
import { X, Plus, Menu } from 'lucide-react';
import NavigationItem from './Sidebar/NavigationItem';
import RecentSection from './Sidebar/RecentSection';
import BottomSection from './Sidebar/BottomSection';
import { navigation, recentItems } from './Sidebar/navigationConfig';
import styles from './Sidebar/Sidebar.module.css';

const Sidebar = ({ open, setOpen }) => {

  return (
    <>
      {/* Mobile sidebar overlay */}
      <div className={`${styles.sidebarMobile} ${open ? styles.sidebarMobileOpen : ''}`}>
        <div className={styles.overlay} onClick={() => setOpen(false)} />
        <div className={styles.sidebarContent}>
          {/* Header */}
          <div className={styles.header}>
            <h1 className={styles.title}>AI Call Center</h1>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setOpen(!open)}
            className={styles.toggleButton}
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* New Conversation Button */}
          <button className={styles.newConversationButton}>
            <Plus className={styles.newConversationIcon} />
            Nueva conversación
          </button>

          {/* Navigation */}
          <nav className={styles.navigation}>
            <ul className={styles.navList}>
              {navigation.slice(1).map((item) => (
                <NavigationItem
                  key={item.name}
                  item={item}
                  onClick={() => setOpen(false)}
                  collapsed={false}
                />
              ))}
            </ul>
          </nav>

          {/* Recent Section */}
          <RecentSection recentItems={recentItems} />

          {/* Bottom Section */}
          <BottomSection />
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className={`${styles.sidebar} ${!open ? styles.sidebarCollapsed : ''}`}>
        {/* Header */}
        {open && (
          <div className={styles.header}>
            <h1 className={styles.title}>AI Call Center</h1>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`${styles.toggleButton} ${!open ? styles.toggleButtonCollapsed : ''}`}
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* New Conversation Button */}
        <button className={`${styles.newConversationButton} ${!open ? styles.newConversationButtonCollapsed : ''}`}>
          <Plus className={styles.newConversationIcon} />
          {open && 'Nueva conversación'}
        </button>

        {/* Navigation */}
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            {navigation.slice(1).map((item) => (
              <NavigationItem
                key={item.name}
                item={item}
                onClick={() => setOpen(false)}
                collapsed={!open}
              />
            ))}
          </ul>
        </nav>

        {/* Recent Section */}
        {open && <RecentSection recentItems={recentItems} />}

        {/* Bottom Section */}
        {open && <BottomSection />}
      </div>
    </>
  );
};

export default Sidebar;