import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';

function Header({ darkmode, setDarkMode }) {


    const onDarkMode = () => {
        if (!darkmode) {
            document.querySelector("body").classList.add("dark-mode");
        }
        else {
            document.querySelector("body").classList.remove("dark-mode");
        }
        setDarkMode(!darkmode);
        console.log(darkmode);



    }

    return (
        <div className='header-wrapper'>
            <div className='container header'>
                <h1 className='header-title'>Where in the world?</h1>
                <div onClick={onDarkMode} className='toggle-theme'>

                    {darkmode ? (<div className='theme-container dark'>
                        <FontAwesomeIcon icon={faSun} />
                        <span className='theme-name'>Light Mode</span>
                    </div>) : (
                        <div className='theme-container light'>
                            <FontAwesomeIcon icon={faMoon} />
                            <span className='theme-name'>Dark Mode</span>
                        </div>)}

                    {/* <div className='theme-container dark'>
                    <FontAwesomeIcon icon={faSun} />
                    <span className='theme-name'>Light Mode</span>
                </div> */}
                </div>
            </div>
        </div >
    )
}

export default Header;