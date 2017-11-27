import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  componentDidMount() {
    const { update } = this.props;
    fetch('http://nstfkc.com:5050/smart-home').then(res => res.json())
      .then(update);
  }
  render() {
    const { lights, curtains, heater, tv } = this.props;
    return (
      <div className="flex-cont">
        <ul className="deviceList">
          <li className={lights ? 'on' : 'off'}>Lights:</li>
          <li className={curtains ? 'on' : 'off'}>Curtains:</li>
          <li className={heater ? 'on' : 'off'}>Heater: </li>
          <li className={tv ? 'on' : 'off'}>TV:</li>
        </ul>
      </div>
    );
  }
}

Home.propTypes = {
  lights: PropTypes.bool.isRequired,
  curtains: PropTypes.bool.isRequired,
  heater: PropTypes.bool.isRequired,
  tv: PropTypes.bool.isRequired,
  update: PropTypes.func.isRequired,
};

export default Home;
