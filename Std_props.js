import React from 'react'

export default class Std_props extends React.Component{
    render(){
        return(
            
            <div style={{backgroundColor:'skyblue', margin:20}}>Student
             <h1>{this.props.name}</h1>
             <h3>{this.props.email}</h3>
             </div>
        )
    }
} 