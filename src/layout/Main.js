import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import "../style/component/Main.scss"


import Nav from './Nav'
import FloatPlugin from '../component/FloatPlugin';
import Hitokoto from '../component/Hitokoto';

import {isMobile} from '../utils/mobile'
import RouterConfig from '../config/router'


function Main() {
  const nav_list = [
    {title:'首页',to:'/index'},
    {title:'开发成果',to:'/works'},
    {title:'Anything',to:'/anything'},
  ]
  let class_name = 'App';
  if(isMobile()){
    class_name+=' mobile';
  }else{
    class_name+=' pc';
  }

  const routes = RouterConfig.map((item,index)=>{
    return (
      <Route path={item.path} component={item.component} exact key={index}/>
    )
  })

  return (
    <div className={class_name}>
      <FloatPlugin/>
      <BrowserRouter>
      <Nav nav_list={nav_list} className='header'/>
      <Hitokoto/>
      <div className='split-line'></div>
        <div className='body'>{routes}</div>
      </BrowserRouter>
    </div>
  );
}

export default Main;
