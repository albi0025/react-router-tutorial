import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/repos" activeClassName="active">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {children: React.PropTypes.object};

export default App;
