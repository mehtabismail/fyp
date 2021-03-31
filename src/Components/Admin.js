import React, { Component } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './new.css';

import Header from './Header';

export default class Admin extends Component {
    render() {
        return (
            <div style={{backgroundColor: "#bab9b8",}}>
                <div style = {{height:"92vh", backgroundColor: "black", marginRight:"170vh", marginTop:"8vh"}}>
                <ProSidebar>
                        <Menu >
                        <MenuItem>Admin View</MenuItem>
                        <SubMenu title="Components">
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                        </Menu>
            </ProSidebar>
                </div>
                <div style={{backgroundColor: "white"}}>
                    <Header />
                </div>
                
            </div>
            
        )
    }
}

