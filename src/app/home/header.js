import React, {Component} from 'react';
import classnames from 'classnames';
import 'typed.js/js/typed';

class Header extends Component {
  static propTypes = {
    submit: React.PropTypes.bool,
    result: React.PropTypes.string
  }

  componentDidUpdate() {
    console.log('after render');
    $('.description .text').typed({
      strings: ['Login successfully.']
    });
  }

  render() {
    let textClass = classnames({
      'text': true,
      'success': this.props.submit && this.props.result === 'success',
      'failed': this.props.submit && this.props.result === 'failed'
    });
    let description = this.props.submit && this.props.result !== ''
      ? (<span className={textClass}></span>)
      : (<span className="text">Please enter your username and password to continue</span>);

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
