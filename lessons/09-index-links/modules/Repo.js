import React from 'react';

class Repo extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
      </div>
    );
  }
}

Repo.propTypes = {params: React.PropTypes.object};

export default Repo;
