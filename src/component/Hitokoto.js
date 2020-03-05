import React from 'react'

import '../style/component/Hitokoto.scss'

class Hitokoto extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            word:'loading...'
        }
    }
    componentDidMount = ()=>{
        this.getHitokoto();
    }
    getHitokoto = ()=>{
        fetch('https://v1.hitokoto.cn/?c=i&encoding=json&charset=utf-8').then(res=>{
            return res.json();
        }).then(json=>{

            this.setState({
                word:json.hitokoto,
                author:json.from_who,
                origin:json.from
            })
        })
    }

    render (){
        return (
        <div id='hitokoto'>{this.state.word}{(()=>{
            return this.state.origin?`——《${this.state.origin}》`:""
        })()}{(()=>{
            return this.state.author?this.state.author:""
        })()}</div>
        )
    }
}
export default Hitokoto