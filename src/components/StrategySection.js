import React from "react";
import Strategy from './Strategy.js';

class StrategySection extends React.Component {
    constructor(props) {
        super(props);

        //build default strategies object.  "loading" in sample data for now
        this.state = {
            strategies: [
                {
                    strategyName: "",
                    tactics: [
                        {
                            tacticName: "",
                            accountability: ""
                        }
                    ]
                },
                {
                    strategyName: "",
                    tactics: [
                        {
                            tacticName: "",
                            accountability: ""
                        }
                    ]
                }
            ]
        };
    }

    addStrategy = (e) => {
        this.setState({
            strategies: [...this.state.strategies, {strategyName: "", tactics: [{tacticName: "", accountability: ""}]}]
        })
    }

    removeStrategy = (id) => {
        let strategies = [...this.state.strategies]
        strategies.splice(id, 1)
        this.setState({strategies: strategies})
    }

    updateStrategy(strat, id) {
        let tmpStrats = this.state.strategies
        tmpStrats[id] = strat
        this.setState({strategies: tmpStrats})
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state.strategies)}
                <br/><br/>
                <button onClick={this.addStrategy}> Add New Strategy</button>
                <br/><br/>

                {/*For each item in this.state.strategies,*/}
                {/*Store the item as strat and the index as index*/}
                {/*Then, load component Strategy and pass the props strategy and id (declared in the Strategy component) with*/}
                {/*the values of strat and index.*/}
                {this.state.strategies.map((strategy, index) => {
                    return (
                        <Strategy
                            key={`index-#${index}`}
                            updateStrategy={() => this.updateStrategy(strategy, index)}
                            strategy={strategy}
                            index={index}
                            onDelete={() => this.removeStrategy(index)}
                        />);
                })
                }
            </div>
        );
    }
}

export default StrategySection;
