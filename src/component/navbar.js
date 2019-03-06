import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg border-none nav-transparent">
      <div className="container padding-15px-lr md-padding-15px-lr sm-padding-15px-all">

          {/* start logo */}
          <a className="logo active" href="javascript:void(0);" data-scroll-nav="0">
              <img src="/img/logobem.png" alt="BEM FILKOM UB 2019" title="BEM FILKOM UB 2019"/>
          </a>
          {/* end Logo */}

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
              aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar"><i className="fas fa-bars"></i></span>
          </button>

          {/* navbar links */}
          <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                      <a className="nav-link active" href="javascript:void(0);" data-scroll-nav="0">Home</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="javascript:void(0);" data-scroll-nav="1">Profile</a>
                  </li>
                  {/* <li className="nav-item">
                      <a className="nav-link" href="javascript:void(0);" data-scroll-nav="2">Arah Gerak</a>
                  </li> */}
                  <li className="nav-item">
                      <a className="nav-link" href="javascript:void(0);" data-scroll-nav="3">Informasi</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="javascript:void(0);" data-scroll-nav="4">Struktur</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="javascript:void(0);" data-scroll-nav="5">Contact</a>
                  </li>
              </ul>
          </div>
          {/* end navbar links */}
      </div>
  </nav>
  {/* End Navbar  */}
      </div>
    )
  }
}
