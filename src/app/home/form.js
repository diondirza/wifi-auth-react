import React, {Component} from 'react';

class Form extends Component {
  static propTypes = {
    onSubmit: React.PropTypes.func
  }

  render() {
    return (
      <div className="content">
        <form>
          <div className="input-field">
            <input id="username" type="text" className="validate" autoComplete="off"/>
            <label htmlFor="username">Username</label>
          </div>

          <div className="input-field">
            <input id="password" type="password" className="validate" />
            <label htmlFor="password">Password</label>
          </div>

          <div className="btn-wrapper">
            <a className="waves-effect waves-light btn-flat btn-submit" onClick={this.props.onSubmit}>Continue</a>
          </div>
          <p>
            Don't have an account? <a href="#">Get one &#10095;</a>
          </p>
        </form>
        <div className="loader">
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-white">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>

          <div className="result">
            <img src="http://placehold.it/75x75" width="75" height="75" alt="Ajax Result" />
          </div>
        </div>
    </div>
    );
  }
}

export default Form;
