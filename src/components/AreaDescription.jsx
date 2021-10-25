import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AreaDescription extends Component {
  render() {
    const { handleChanges, description } = this.props;
    return (
      <label htmlFor="descrition">
        {' '}
        Descrição
        <textarea
          id="descrition"
          name="description"
          type="text"
          value={ description }
          onChange={ handleChanges }
        />
      </label>
    );
  }
}

AreaDescription.propTypes = {
  handleChanges: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};

export default AreaDescription;
