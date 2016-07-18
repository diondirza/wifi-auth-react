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
        <form ref="form" action="%%AUTH_POST_URL%%" className={formClass} onSubmit={(e) => this.props.onSubmit(e)}>
          <input type="hidden" name="%%REDIRID%%" value="%%PROTURI%%" />
          <input type="hidden" name="%%MAGICID%%" value="%%MAGICVAL%%" />
          <div className="input-field">
            <input id="username" ref="username" name="%%USERNAMEID%%" type="text" className="validate" autoComplete="off"/>
            <label htmlFor="username">Username</label>
          </div>

          <div className="input-field">
            <input id="password" ref="password" name="%%PASSWORDID%%" type="password" className="validate" />
            <label htmlFor="password">Password</label>
          </div>

          <div className="btn-wrapper">
            <button type="submit" className="waves-effect waves-light btn-flat btn-submit">Continue</button>
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
