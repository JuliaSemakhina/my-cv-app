import React, { useState, useContext, useEffect } from 'react'

import { sublinks } from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    
    const getStorageTheme = () => {
        let theme = 'light-theme';
        if (localStorage.getItem('theme')) {
          theme = localStorage.getItem('theme');
        }
        return theme;
      };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page: '', links: []});
    const [theme, setTheme] = useState(getStorageTheme());
    const [isLoading, setLoading] = useState(true);
  

    const toggleTheme = () => {
      if (theme === 'light-theme') {
        setTheme('dark-theme');
      } else {
        setTheme('light-theme');
      }
    };
  
    useEffect(() => {
      document.documentElement.className = theme;
      localStorage.setItem('theme', theme);
    }, [theme]);


const openSidebar = () => {
        setIsSidebarOpen(true);
      };

const closeSidebar = () => {
        setIsSidebarOpen(false);
      };

const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);  
};

const closeSubmenu = () => {
    setIsSubmenuOpen(false)
};

    return (
        <AppContext.Provider value={{
            isSubmenuOpen, isSidebarOpen, openSubmenu, openSidebar, closeSidebar, closeSubmenu, location, page, toggleTheme, isLoading
        }} >
            {children}
        </AppContext.Provider>
    ) 
}


//custom hook
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}