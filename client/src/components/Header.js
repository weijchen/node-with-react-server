import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    if (this.props.auth == null) {
      return;
    } else {
      switch (this.props.auth.passport.user) {
        case undefined:
          return <li><a href="/auth/google">Login With Google</a></li>;
        default:
          return [
            <li key="1"><Payments /></li>,
            <li key="2"><a href="/api/logout">Logout</a></li>
          ];
      }
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link 
            to={this.props.auth != null && this.props.auth.passport !== undefined && this.props.auth.passport.user !== undefined ? '/surveys': '/'} 
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
};

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);