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


//     const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light-theme');
  // const toggleTheme = () => {
  //   setTheme(prevTheme => {
  //     const newTheme = prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
  //     localStorage.setItem('theme', newTheme);
  //     return newTheme;
  //   });
  // };


const openSidebar = () => {
        setIsSidebarOpen(true);
      };

const closeSidebar = () => {
        setIsSidebarOpen(false);
      };


    return (
        <AppContext.Provider value={{
             isSidebarOpen, openSidebar, closeSidebar, location, page, toggleTheme, isLoading
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