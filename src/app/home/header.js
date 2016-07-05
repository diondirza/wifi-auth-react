import React, {Component} from 'react';
import classnames from 'classnames';

class Header extends Component {
  static propTypes = {
    submit: React.PropTypes.bool,
    result: React.PropTypes.string
  }

  componentDidUpdate() {
    const {text} = this.refs;
    const {submit, result} = this.props;
    const submitMsgs = {
      '': 'Loading .^1000.^1000.',
      'success': 'Login successfully.',
      'failed': 'Login failed.'
    };

    $(text).next().remove();

    if (submit) {
      $(text).removeData('typed');
      $(text).typed({
        strings: [submitMsgs[result]]
      });
    }
  }

  render() {
    const {submit, result} = this.props;
    let textClass = classnames({
      'text': true,
      'success': submit && result === 'success',
      'failed': submit && result === 'failed'
    });
    let description = (
      <span ref="text" className="text">Please enter your username and password to continue</span>
    );

    if(submit && result !== '') {
       description = (<span ref="text" className={textClass}></span>);
    }
    return (
      <div className="content">
        <img className="responsive-img" alt="midtrans-logo" src="/assets/images/logo-midtrans-color.png" />
        <hr className="separator" />
        <div className="description center-align">
          {description}
        </div>
      </div>
    );
  }
}

export default Header;
