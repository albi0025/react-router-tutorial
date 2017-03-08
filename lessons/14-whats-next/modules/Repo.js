import React from 'react';

class Repo extends React.Component {
  render() {
    const { userName, repoName } = this.props.params;
    return (
      <div>
        <h2>{userName} / {repoName}</h2>
      </div>
    );
  }
}

Repo.propTypes = {params: React.PropTypes.object};

export default Repo;
