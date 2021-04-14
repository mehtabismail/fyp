import React, { Component } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './new.css';
import Test from './Test'

import Header from './Header';

export default class Admin extends Component {


    render() {
        return (

            <div className="admin-screen" style={{ backgroundColor: "" }}>
                <div className="admin-header">
                    <Header />
                    <div style={{ height: "92vh", backgroundColor: "black", marginTop: "8vh" }}>
                        <ProSidebar >
                            <Menu >
                                <MenuItem>Admin View</MenuItem>
                                <SubMenu title="Components">
                                    <MenuItem onClick={this.continue}>Add Hospital</MenuItem>
                                    <MenuItem>Search Hospital</MenuItem>
                                    <MenuItem>Delete Hospital</MenuItem>
                                </SubMenu>
                            </Menu>
                        </ProSidebar>
                    </div>
                </div>
            </div>
        )
    }
}


// style={{ height: "92vh", backgroundColor: "black", marginRight: "170vh", marginTop: "8vh" }}











