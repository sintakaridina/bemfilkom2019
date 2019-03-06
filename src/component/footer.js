import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/*  Start Footer Section */}
    <footer className="bg-black">
    <div className="footer-bottom">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 text-center">
                    <span className="font-size13 text-uppercase letter-spacing-1 text-light-gray">© 2019 BEM FILKOM
                        2019 Inspired with Ashton</span>
                </div>
            </div>
        </div>
    </div>
    <div id="back-to-top" className="back-to-top">
        <i className="fa fa-angle-up"></i>
    </div>
</footer>
      </div>
    )
  }
}
