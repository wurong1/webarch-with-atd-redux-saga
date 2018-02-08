import React, { Component } from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router';
import menuData from './sidebar.json';
import logo from './asset/logo.png';
import './sidebar.scss';

const { Sider } = Layout;

function getAncestorKey(current) {
  let ancestor = [];
  menuData.forEach(menu => {
    menu.groups.forEach(group => {
      group.items.forEach(item => {
        if (current === item.key) {
          ancestor.push(menu.key);
        }
      });
    });
  });
  return ancestor;
}

export default class Sidebar extends Component {
  constructor({ pathname }) {
    super();
    this.state = {
      current: pathname,
      openKeys: getAncestorKey(pathname)
    };
  }

  componentWillReceiveProps({ pathname }) {
    if (pathname && pathname !== this.state.current) {
      this.setState({ current: pathname });
    }
  }

  handleClick = e => {
    this.setState({ current: e.key });
  }

  handleOpenChange = openKeys => {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    this.setState({ openKeys: [latestOpenKey] });
  }

  render() {
    return (
      <Sider width={190} className="sidebar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo"/>
            <div className="logo-title">
              <p>点融XXXX系统</p>
              <p className="logo-subtitle">dianrong tech</p>
            </div>
          </Link>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[this.state.current]}
          openKeys={this.state.openKeys}
          onClick={this.handleClick}
          onOpenChange={this.handleOpenChange}
        >
          {
            menuData.map(menu => {
              return (
                <Menu.SubMenu key={menu.key} title={<span><img src={require('./asset/' + menu.imgPath)} /><span>{menu.title}</span></span>}>
                  {
                    menu.groups.map((group, idx) => {
                      return (
                        <Menu.ItemGroup key={idx} title={group.title}>
                          {
                            group.items.map(item => {
                              return <Menu.Item key={item.key}><Link to={item.key}>{item.title}</Link></Menu.Item>;
                            })
                          }
                        </Menu.ItemGroup>
                      );
                    })
                  }
                </Menu.SubMenu>
              );
            })
          }
        </Menu>
      </Sider>
    );
  }
}

Sidebar.__ANT_LAYOUT_SIDER = true;
