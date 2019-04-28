import React from 'react';
import PropTypes from 'prop-types';

class CreateTitle extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.editTitle(e.target.value);
  }

  render(){
    return (
      <div className="create-title">
        <h3>Title</h3>
        <input type="text" value={this.props.title} onChange={this.handleChange}/>
      </div>
    );
  }
}

CreateTitle.propTypes = {
  title: PropTypes.string,
  editTitle: PropTypes.func
};

export default CreateTitle;
