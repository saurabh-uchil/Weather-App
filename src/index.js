import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';

class App extends React.Component{
    state = {lat: null, errMsg:null}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat:position.coords.latitude})
            },
            err => this.setState({errMsg:err.message})
            );
    }

    renderComponent(){
        if(this.state.lat && !this.state.errMsg){
            return(
                <div>
                <h1><SeasonDisplay lat={this.state.lat}/></h1>
                </div>
            );     
        }
        if(!this.state.lat && this.state.errMsg){
        return(
            <div>
            <p>Error: {this.state.errMsg}</p>
            </div>
        );     
    }
    if(!this.state.lat && !this.state.errMsg){
        return(
            <div>
            <Spinner message="Please accept the user request"/>
            </div>
        );     
    }
    }

    render(){
        return(
            <div>{this.renderComponent()}</div>
        );
    }
}
ReactDom.render(<App/>,document.querySelector('#root'))