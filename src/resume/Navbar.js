import React from 'react'
import logo2 from './images/logo2.png'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext} from './context'
import { CgDarkMode } from "react-icons/cg";

const Navbar = () => {

  const { openSidebar, toggleTheme } = useGlobalContext();

  return (
    <nav className='nav d-f_jc-c'> 
    <div className='nav-center'>
      <div className='nav-header'>
      <img src={logo2} alt='stripe' className='nav-logo'/>
      <CgDarkMode className='theme-icon' onClick={toggleTheme} />
      <button className='btn toggle-btn' onClick={openSidebar}>
        <FaBars />
      </button>
      </div>
      <ul className='nav-links'>
        <li>
          <button className='link-btn'><span>/</span><a href='#projects'>projects</a></button>
        </li>

        <li>
          <button className='link-btn' ><span>/</span><a href='#skills'>skills</a></button>
        </li>

        <ul className='link-socials d-f_jc-c'>
        <li>
          <button className='link-btn'><span>/</span><a href='#skills'>education</a></button>
        </li>
        <li>
          <button className='link-btn'><span>/</span><a href='#contacts'>contacts</a></button>
        </li>
        </ul>
        {/* <button className='btn theme-btn' onClick={toggleTheme} onMouseOver={displaySubmenu}>Theme</button> */}
      <div className="switch-btn" id="_2nd-toggle-btn"  onClick={toggleTheme}>
      <input type="checkbox" id="theme-toggle"/>
      <label htmlFor="theme-toggle"></label>
      <span ></span>
    </div>
      </ul>
    </div>
    </nav>
  )
}

export default Navbar

// const Navbar = () => {
//   const { openSidebar, toggleTheme } = useGlobalContext();

//   return (
//     <nav className='nav d-f_jc-c'>
//       <div className='nav-center'>
//         <div className='nav-header'>
//           <img src={logo2} alt='stripe' className='nav-logo' />
//           <CgDarkMode className='theme-icon' onClick={toggleTheme} />
//           <button className='btn toggle-btn' onClick={openSidebar}>
//             <FaBars />
//           </button>
//         </div>
//         <ul className='nav-links'>
//           <li>
//             <a href='#projects' className='link-btn'><span>/</span>projects</a>
//           </li>
//           <li>
//             <a href='#skills' className='link-btn'><span>/</span>skills</a>
//           </li>
//         </ul>
//         <div className='link-socials d-f_jc-c'>
//           <a href='#skills' className='link-btn'><span>/</span>education</a>
//           <a href='#contacts' className='link-btn'><span>/</span>contacts</a>
//         </div>
//         <div className="switch-btn" id="_2nd-toggle-btn" onClick={toggleTheme}>
//           <input type="checkbox" id="theme-toggle" />
//           <label htmlFor="theme-toggle"></label>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
