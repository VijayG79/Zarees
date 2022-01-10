import React from "react";
import { Col, Row } from "reactstrap";
import logo from '../images/ZareesLogo.jpeg';
import banner from '../images/banner.jpg';
import { Input, Space } from 'antd';
import { AudioOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import './nav.css'


function NavBar(props) {
    const { Search } = Input;
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    const onSearch = value => console.log(value);
    return (
        <div className="">
            <div className="Navbar">
            <Row>
                <Col lg={2} className="makecenter">
                    <img src={logo} style={{height:120}}/>
                </Col>
                <Col lg={7} className="makecenter">
                    <Space direction="vertical">
                        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 350 }} />
                    </Space>
                </Col>
                <Col lg={1} className="makecenter">
                <ShoppingCartOutlined />Cart
                </Col>
                <Col lg={1} className="makecenter"><Button type="primary" >
          Login
        </Button></Col>
            </Row>
            </div>
            <div className="menubar">
             <Row>
               <Col lg={2}>Clothing</Col>
               <Col lg={2}>Shoes</Col>
               <Col lg={2}>Accesories</Col>
               <Col lg={2}>ActiveWear</Col>
               <Col lg={2}>Gifts&Living</Col>
               <Col lg={2}>Inspiration</Col>
             </Row>
            </div>
            <Row></Row>
            <Row></Row>
            <div className="banner">
                <Row>
                    <img src={banner}/>
                </Row>
            </div>
        </div>
    );
}
export default NavBar;