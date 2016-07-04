import React, {Component} from 'react';
import Header from './home/header';
import Form from './home/form';

class App extends Component {
  state = {
    submit: false,
    result: 'success'
  };


  onSubmit = () => {
    let submit = true;

    this.setState({
      submit: submit
    });
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
                  <Form onSubmit={this.onSubmit}></Form>
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
