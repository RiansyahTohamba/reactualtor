// App.js
import React from 'react';
import Buttons from '../contekan/buttons';
import Result from '../contekan/result';

class AppCalc extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            result: "0",
        }
        this.handleclicks = this.handleclicks.bind(this);
    }

    handleclicks = (value) => {
        switch (value) {
            case '1':
            case '2':
            case '+':
            case '-':
                if(this.state.result === '0'){
                    this.setState({result: this.state.result + value});
                }
                break;
            case '=':
                this.setState({result: eval(this.state.result)})    
                break;
            default:
                break;    
        }
    }

    render(){
        return ( 
            <div className='myCalculator'>
                
            </div>
        )
    }
}
export default AppCalc;