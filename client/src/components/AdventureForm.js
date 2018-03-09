import React from 'react';


class AdventureForm extends React.Component {
  state = { name: ''}

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTrip(this.state.name);
    this.setState({ name: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          placeholder = "Add trip"
          value = {this.state.name}
          onChange = {this.handleChange}
          required
        />
      </form>
    );
  }
}

export default AdventureForm