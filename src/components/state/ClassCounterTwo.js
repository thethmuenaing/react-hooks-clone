import React, { Component } from "react";

class ClassCounterTwo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}
	IncrementCount = () => {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1,
			};
		});
	};
	IncrementCountFive = () => {
		for (let i = 0; i < 5; i++) {
			this.setState((prevState) => {
				return {
					count: prevState.count + 1,
				};
			});
		}
	};
	render() {
		return (
			<div>
				Count - {this.state.count}
				<br />
				<button onClick={this.IncrementCount}>Increment 1</button>
				<br />
				<button onClick={this.IncrementCountFive}>Increment 5</button>
			</div>
		);
	}
}

export default ClassCounterTwo;
