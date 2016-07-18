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

  onSubmit = (e) => {
    let self = this;
    e.preventDefault();

    this.setState({
      submit: true
    });

    const form = this.refs.formComponent.refs.form;
    const $form = $(form);
    const url = $form.prop('action');

    $.post(url, $form.serialize(), function() {
      self.onSuccess();
    }).fail(function() {
      self.onFailed();
    });
  }

  onSuccess = () => {
    setTimeout(() => {
      this.setState({
        result: 'success'
      });
    }, 3000);
  }

  onFailed = () => {
    setTimeout(() => {
      this.setState({
        result: 'failed'
      });
      setTimeout(() => {
        this.setState(initState);
      }, 1000);
    }, 3000);
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
                  <Form ref="formComponent" {...this.state} onSubmit={this.onSubmit}></Form>
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
