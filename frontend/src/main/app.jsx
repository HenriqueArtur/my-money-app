import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Routes from './routes'
import Footer from '../common/template/footer'

export default props => (
    <div className="wrapper">
        <Header/>
        <SideBar/>
        <div className="content-wrapper">
            <Routes />
        </div>
        <Footer></Footer>
    </div>
)