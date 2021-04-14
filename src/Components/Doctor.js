import React, { Component } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './new.css';
import Test from './Test'

import Header from './Header';

export default class Doctor extends Component {


    render() {
        return (
            
            <div className="doctor-screen" style={{backgroundColor:""}}>
                <div className="doctor-header">
                    <Header />
                    <div style={{ height: "92vh", backgroundColor: "black",  marginTop: "6vh" }}> 
                    <ProSidebar >
                        <Menu >
                            <MenuItem>Doctor View</MenuItem>
                            <SubMenu title="Components">
                                <MenuItem onClick={this.continue}>Add Report</MenuItem>
                                <MenuItem>Update Report</ >
                                <MenuItem>Delete Report</MenuItem>
                            </SubMenu>
                        </Menu>
                    </ProSidebar>
                    </div>   
                </div>    
            </div>
        )
    }
}














