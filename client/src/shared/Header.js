import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
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
            <a className="nav-item nav-link active my-sm-2" href="">
              Login <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link my-sm-2" href="">
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
