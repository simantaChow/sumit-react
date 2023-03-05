import React from "react";

class Clock extends React.Component{
    state={date:new Date()};
    
    componentDidMount(){
        this.clockTimter = setInterval(()=>this.tick(),1000);
    }

    componentWillUnmount(){
        clearInterval(this.clockTimter);
    }

    tick(){
        this.setState({
            date: new Date(),
        });
    }
    
    render(){
        return(
            <h1>
                {this.state.date.toLocaleTimeString(this.props.local)}
            </h1>
        );
    }
}

export default Clock;