import React from 'react'
import '../style/component/FloatPlugin.scss'


class FloatPlugin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content:'test'
        }
    }
    render(){
        return  (
            <div id='float-plugin'>
                <p>{this.state.content}</p>
            </div>
        )
    }
}

export default FloatPlugin;