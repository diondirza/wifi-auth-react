import React, {Component} from 'react';
import classnames from 'classnames';

class Form extends Component {
  static propTypes = {
    submit: React.PropTypes.bool,
    result: React.PropTypes.string,
    onSubmit: React.PropTypes.func
  }

  render() {
    const {submit, result} = this.props;
    const formClass = classnames({
      'blurred': submit
    });
    const loaderClass = classnames({
      'loader': true,
      'active': submit
    });
    const preloaderClass = classnames({
      'preloader-wrapper': true,
      'big': true,
      'active': submit && result === ''
    });
    const resultClass = classnames({
      'result': true,
      'active': submit && result !== ''
    });
    const imgSrc = `assets/images/${result}.png`;

    return (
      <div className="content">
        <form className={formClass}>
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
        <div className={loaderClass}>
          <div className={preloaderClass}>
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

          <div className={resultClass}>
            <img src={imgSrc} width="75" height="75" alt="Ajax Result" />
          </div>
        </div>
    </div>
    );
  }
}

export default Form;
