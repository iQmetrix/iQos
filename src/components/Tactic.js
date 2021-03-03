import React from "react";
import TextareaAutosize from 'react-textarea-autosize';

class Tactic extends React.Component {
	constructor(props) {
		super(props);
		//'this.props.tactic' and 'this.props.id' need to match the names of the props coming from Strategy
		this.state = {tactic: this.props.tactic, 
					id: this.props.id, 
					};
	}

	render() {
		return (
			<div style={{background:"#"}}>
			{JSON.stringify(this.state)}
			<br/><br/>
			Tactic: 
				<TextareaAutosize 
					type="text"
					name={this.props.id}
					data-id={this.props.id}
					id={this.props.id}
					className="tactic"
					placeholder="Enter Area of Focus"
					onChange={e => {
							let temptactic = this.state.tactic
							temptactic.tacticName = e.target.value
							this.setState({tactic: temptactic})}
					}
					value={this.state.tactic.tacticName}
				/>			
			Accountability: 
				<TextareaAutosize 
					type="text"
					name={this.props.accountability}
					data-id={this.props.accountability}
					id={this.props.accountability}
					className="accountability"
					placeholder="Enter Accountabilty"
					onChange={e => {
							let temptactic = this.state.tactic
							temptactic.accountability = e.target.value
							this.setState({tactic: temptactic})}
					}
					value={this.state.tactic.accountability}
				/>
			</div>
		);
	}
}

export default Tactic;