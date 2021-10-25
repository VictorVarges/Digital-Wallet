import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectTag extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { };
  // }

  render() {
    const { handleChanges, tag } = this.props;

    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          name="tag"
          onChange={ handleChanges }
          value={ tag }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

SelectTag.propTypes = {
  handleChanges: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};

export default SelectTag;
