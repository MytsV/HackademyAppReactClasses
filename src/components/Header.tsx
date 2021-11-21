import React from 'react';
import { HeaderProps } from '../objects/HeaderProps';
import MenuItem from './MenuItem';

interface HeaderState {
  menuExpanded: boolean,
}

export default class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: any) {
    super(props);
    this.state = { menuExpanded: false };
  }

  getMenuItems(): JSX.Element[] {
    return this.props.menuItems
    .map((item, index) => 
      <MenuItem info={item} active={this.isActive(index)}/>
    );
  };

  isActive(index: number): boolean {
      return this.props.activeIndex === index;
  };

  onClickBurger(): void {
    this.setState({menuExpanded: !this.state.menuExpanded});
  }

  getBurgerClass() {
    var className: string = this.state.menuExpanded ? 'fas fa-times ' : 'fas fa-bars ';
    className += 'text-indigo-900 text-2xl';
    return className;
  }

  render() {
    return <div id="header" className="bg-white py-6 px-5 flex justify-between align-center items-center">
      <a href="."><span id="logo">CryptoTrade</span></a>
      <div id="nav-bar">
        {this.getMenuItems()}
      </div>
      <i className={this.getBurgerClass()} id="burger-menu" onClick={this.onClickBurger}></i>
      {this.state.menuExpanded ? <div id="menu-expanded">
        {this.getMenuItems()}
      </div> : null}
    </div>;
  }
}