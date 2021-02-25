import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from "react";
import TextareaAutosize from 'react-textarea-autosize';

class TeamSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'iQmetrix'};

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
          Team:
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

class Form extends React.Component {
	state = { 
			strategies: [{strategy:"", tactic:"", accountability:""}],
			purpose: "",
			values: ""
	}		
	handleChange = (e) => {
			if(["strategy", "tactic", "accountability"].includes(e.target.className) ) {
				let strategies = [...this.state.strategies]
				strategies[e.target.dataset.id][e.target.className] = e.target.value
				this.setState({ strategies }, () => console.log(this.state.strategies))
			} 
			else {
				this.setState({ [e.target.name]: e.target.value.toUpperCase()})
			}
	}
	addStrategy = (e) => {
		this.setState((prevState) => ({
			strategies: [...prevState.strategies, {strategy:"", tactic:"", accountability:""}],
		}));
	}
	removeStrategy(idx) {
		let strategies = [...this.state.strategies]
		strategies.splice(idx,1);
		this.setState({ strategies })
	}
	handleSubmit = (e) => {e.preventDefault()}
	render() {
		let {purpose, values, strategies} = this.state
		return (
			<form onSubmit={this.handleSubmit} onChange={this.handleChange.bind(this)}>
				<label htmlFor="purpose">Purpose </label>
				<TextareaAutosize 
				input type= "text"
				name="purpose"
				id="purpose"
				placeholder="Enter Team Purpose"/>
				<label htmlFor="values">Values </label>
				<TextareaAutosize 
				 input type="text"
				 name="values"
				 id="values"
				 placeholder="Enter Team Values"/>
				<div>
				<button onClick={this.addStrategy}> Add New Strategy </button>
				</div>
				{
					this.state.strategies.map((val, idx)=> {
						let strategyId = `strategy-${idx}`, tacticId = `tactic-${idx}`, accountabilityId = `accountability-${idx}`
						return(
							<div key={idx}>
								<label htmlFor={strategyId}>{`Strategy #${idx + 1}`}</label>
								<TextareaAutosize 
								  type="text"
								  name={strategyId}
								  data-id={idx}
								  id={strategyId}
								  className="strategy"
								  placeholder="Enter Area of Focus"
								/>
								<label htmlFor={tacticId}>{`Tactic #${idx + 1}`}</label>
								<TextareaAutosize 
								  type="text"
								  name={tacticId}
								  data-id={idx}
								  id={tacticId}
								  className="tactic"
								  placeholder="Enter Tactic"
								/>
								<label htmlFor={accountabilityId}>{`Accountability #${idx + 1}`}</label>
								<TextareaAutosize 
								  type="text"
								  name={accountabilityId}
								  data-id={idx}
								  id={accountabilityId}
								  className="accountability"
								  placeholder="Enter Accountability"
								/>
								
								<button onClick={this.removeStrategy.bind(this, idx)}> deleteThisStrategy </button>
							</div>
							)
					})
				}	
		<input type="submit" value="Submit" /> 
		</form>
    )
  }
}

class StrategyCount extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddStratClick = this.handleAddStratClick.bind(this);
    this.handleRemoveStratClick = this.handleRemoveStratClick.bind(this);
    this.state = {isLoggedIn: 0};
  }

  handleAddStratClick() {
    this.setState(prevState => {
		return {isLoggedIn: prevState.isLoggedIn +1}
	});
  }

  handleRemoveStratClick() {
    this.setState(prevState => {
		return{isLoggedIn: prevState.isLoggedIn -1}
	});
  }

  render() {
	const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <RemoveStratButton onClick={this.handleRemoveStratClick} />;
    } else {
      button = <AddStratButton onClick={this.handleAddStratClick} />;
    }

	return (
	  <form> 
		  <span className="formtext">Strategy </span>
			  <TextareaAutosize 											/*Initial Strategy TextBox*/
			  placeholder="Enter Team Area of Focus"
			/>
		  <div>
				<Greeting isLoggedIn={isLoggedIn} />
				{button}
		  </div>
	  </form>
    );
  }
}


function GuestGreeting(props) {
  return <h1> </h1>;
}

function Greeting(props) {									/*If isLoggedIn is 1, there is an additional text box*/
  const isLoggedIn = props.isLoggedIn;						/*and a second button that says "Add"*/
  if (isLoggedIn) {
    return (
	<div>
	<TextareaAutosize 
			placeholder="Enter Team Area of Focus"	/>
			<button>Add</button>
			</div>
			);
  }
  return <GuestGreeting />;
}

function AddStratButton(props) {
  return (
    <button onClick={props.onClick}>
      Add
    </button>
  );
}

function RemoveStratButton(props) {
  return (
    <button onClick={props.onClick}>
      Remove
    </button>
  );
}





function App() {
  return (
    <div className="App">
		<TeamSelection/>
        <Form/>
    	</div>
  );
}




// ===
export default App
