import MenuItemProps from "../objects/MenuItemProps";
import React from 'react';

export default class MenuItem extends React.Component<MenuItemProps> {
    render() {
        let className: string = "menu-item " + (this.props.active ? "menu-item-highlighted" : "");
        return <a href={this.props.info.link}>
            <span className={className}>{this.props.info.name}</span>
        </a>
    }
}