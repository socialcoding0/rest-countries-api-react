import React from 'react'
import Header from '../components/Header'

import { Outlet } from 'react-router-dom'
function MainLayout({ darkmode, setDarkMode }) {
    return (
        <div>
            <Header darkmode={darkmode} setDarkMode={setDarkMode} />
            <main className='main-d'>
                <Outlet />
            </main>

        </div>
    )
}

export default MainLayout