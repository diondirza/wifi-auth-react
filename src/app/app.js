import $ from 'jquery';
import React, {Component} from 'react';
import Header from './home/header';
import Form from './home/form';

const initState = {
  submit: false,
  result: ''
};

class App extends Component {
  state = initState;

  onSubmit = () => {
    this.setState({
      submit: true
    });

    setTimeout(() =>{
      this.onSuccess();
    },3000);
  }

  onSuccess = () => {
    this.setState({
        result: 'success'
    });
  }

  onFailed = () => {
    this.setState({
        result: 'failed'
    });
    setTimeout(()=>{
      this.setState(initState);
    },1000);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 l8 offset-l2">
            <div className="z-depth-2 auth-container">
              <div className="row">
                <div className="col s12 l6 auth-header-wrapper">
                  <Header submit={this.state.submit} result={this.state.result}></Header>
                </div>

                <div className="col s12 l6 auth-form-wrapper">
                  <Form {...this.state} onSubmit={this.onSubmit}></Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
