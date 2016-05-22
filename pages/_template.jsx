import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config'

import 'styles/site_base.scss';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    };
  },
  render () {
    const { location, children } = this.props;
    let heroImage;
    if (location.pathname === prefixLink('/')) {
      heroImage = (
        <div className="hero"></div>
      );
    }
    return (
<div className="container">
  <div className="nav">
      <div className="title-bar" data-responsive-toggle="example-menu" data-hide-for="medium">
        <button className="menu-icon" type="button" data-toggle></button>
        <div className="title-bar-title">Menu</div>
      </div>

      <div className="top-bar" id="example-menu">
        <div className="top-bar-left">
          <ul className="dropdown vertical medium-horizontal menu" data-dropdown-menu>
            <li className="menu-text">
              <Link to={'/'}>{config.siteTitle}</Link>
            </li>
            <li><Link to={'/calendar/'}>Calendar</Link></li>
            <li><Link to={'/about/'}>About</Link></li>
          </ul>
        </div>
      </div>
  </div>
  {heroImage}
  <div className="row">
    <div className="small-12 large-8 columns small-centered">
      {this.props.children}
    </div>
  </div>
  <hr />
  <div className="row">
    <p className="text-right small-12 medium-10 columns">
      Gardena Buddhist Church<br />
      <a href="tel:+13103279400">(310) 327-9400</a><br />
      <a href="http://maps.google.com/maps?f=q&amp;hl=en&amp;geocode=&amp;q=1517+W+166th+St.,+Gardena,+CA+90247&amp;sll=33.880141,-118.30305&amp;sspn=0.012149,0.020084&amp;ie=UTF8&amp;z=16&amp;iwloc=addr">
        1517 W 166th St., Gardena, CA, 90247
      </a>
    </p>
  </div>
</div>
    );
  }
});