import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;
      default:
        return [
          <li key="1"><a href="/payments">Pay</a></li>,
          <li key="2" style={{ margin: '0 10px' }}>
            Your Credits: {this.props.auth.credits}
          </li>,
          <li key="3"><a href="/api/logout">Logout</a></li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper" style={{ background: "#1C76D7" }}>
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
            style={{ marginLeft: "10px", fontFamily: "'Lobster', cursive" }}
          >
            Survey Monsters
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
