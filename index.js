import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';
import Spinner from './Spinner';

class App extends React.Component {   
        state ={lat: null,errorMessage:''};


    componentDidMount(){ window.navigator.geolocation.getCurrentPosition(
        (position)=> this.setState({lat:position.coords.latitude}),
        (err) =>this.setState({errorMessage: err.message})
           );}

    render(){
        if(this.state.lat && !this.state.errorMessage){
            return <SeasonsDisplay lat={this.state.lat} />
        }
        else if(!this.state.lat && this.state.errorMessage){
            return <div>Error Message: {this.state.errorMessage}</div>
        }
         else return <Spinner message="Please accept location reques"/>;
    };
}

ReactDOM.render(<App />, document.querySelector('#root'));
