import React from 'react'
import '../style/component/Nav.scss';
import {NavLink} from 'react-router-dom'


class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nav_list:props.nav_list,
            cur_nav:(()=>{if(props.nav_list){return props.nav_list[0].title}})(),
        }
    }

    createNavLinks=()=>{
        const nav_content = this.state.nav_list.map((item,index)=>{
            return (
            <div className='nav-item' title={item.explain||""} key={index}>
                <NavLink className='nav-item-text' to={item.to}>{item.title}</NavLink>
            </div>
            )
        });
        return nav_content;
    }

    render(){
       let nav_content = this.createNavLinks();
        return (
            <div className={this.props.className+' nav'}>
                {nav_content}
            </div>
        )
    }
}

export default Nav;