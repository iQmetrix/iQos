import React from "react";

class TeamSelectionHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'iQmetrix'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Team: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
	  <form onSubmit={this.handleSubmit}>
        <label>
		<h1>OPSP-One Page Strategic Plan</h1>
          Welcome! Team:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="iQos">iQos</option>
            <option value="iQmetrix">iQmetrix</option>
            <option value="Ready">Ready</option>
            <option value="Client Experiences">Client Experiences</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TeamSelectionHeader;
