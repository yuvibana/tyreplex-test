import React from 'react'
import AppHeader from './common/AppHeader'
import AppFooter from './common/AppFooter'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <AppHeader />
            <Outlet />
            <AppFooter />
        </>
    )
}

export default Layout