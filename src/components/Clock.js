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

    hadleClick(){
        console.log('the button was clicked')
    }
    
    render(){
        return(
            <div>
                <h1>
                    {this.state.date.toLocaleTimeString(this.props.local)}
                </h1>
                <button onClick={this.hadleClick}>Cleck here</button>
            </div>
        );
    }
}

export default Clock;