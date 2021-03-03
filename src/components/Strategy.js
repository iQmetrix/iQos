import React from "react";
import TextareaAutosize from 'react-textarea-autosize';

class Strategy extends React.Component {
    render() {
        return (
            <div style={{
                background: "#bbb",
                marginBottom: 10,
                paddingTop: 5,
                paddingBottom: 5,
            }}>
                Strategy:
                <TextareaAutosize
                    type="text"
                    name={this.props.index}
                    data-id={this.props.index}
                    id={this.props.index}
                    className="strategy"
                    placeholder="Enter Area of Focus"
                    onChange={e => {
                        let tempStrategy = this.props.strategy;
                        tempStrategy.strategyName = e.target.value
                        this.props.updateStrategy(tempStrategy, this.props.index);
                    }}
                    value={this.props.strategy.strategyName}
                />
                <br/>
				<button onClick={this.props.onDelete}>deleteThisStrategy</button>

                    {/* todo: implement the strategy->tactics component in a similar manner of strategysection->strategy
				{this.state.strategy.tactics.map(function(elementInTactics, idOfElementInTactics){
					return <Tactic tactic={elementInTactics} id={idOfElementInTactics} />
				})}
				*/}
            </div>
        );
    }
}

export default Strategy;
