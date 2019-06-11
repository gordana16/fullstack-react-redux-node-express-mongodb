import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { checkAuthStatus, logout } from "../../actions";

class Header extends Component {
  componentDidMount() {
    this.props.checkAuthStatus();
  }

  handleLogout = () => {
    this.props.logout();
    this.props.history.push("rentals");
  };

  renderAuthButtons() {
    const { isAuth } = this.props.auth;
    if (isAuth) {
      return (
        <a
          className="nav-item nav-link active my-sm-2 clickable"
          onClick={this.handleLogout}
        >
          Logout <span className="sr-only">(current)</span>
        </a>
      );
    } else {
      return (
        <React.Fragment>
          <Link to="/login" className="nav-item nav-link active my-sm-2">
            Login <span className="sr-only">(current)</span>
          </Link>
          <Link to="/register" className="nav-item nav-link my-sm-2">
            Register
          </Link>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
        <div className="container ">
          <Link to="/rentals" className="navbar-brand flex-fill" href="#">
            BookWithMe
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse flex-fill"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav flex-grow-1 ml-sm-4">
              <form className="form-inline my-2 my-lg-0 mr-auto">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Try 'New York'"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-1 btn-bwm-search"
                  type="submit"
                >
                  Search
                </button>
              </form>
              {this.renderAuthButtons()}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default withRouter(
  connect(
    mapStateToProps,
    { checkAuthStatus, logout }
  )(Header)
);
