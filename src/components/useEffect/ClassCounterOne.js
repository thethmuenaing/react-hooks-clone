import React, { Component } from "react";

class ClassCounterOne extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}
	componentDidMount() {
		document.title = `Clicked ${this.state.count} times`;
	}
	componentDidUpdate(pervProps, pervState) {
		document.title = `Clicked ${this.state.count} times`;
	}

	render() {
		return (
			<div>
				<button
					onClick={() => {
						this.setState((prevState) => {
							return {
								count: prevState.count + 1,
							};
						});
					}}
				>
					Click - {this.state.count} - times
				</button>
			</div>
		);
	}
}

export default ClassCounterOne;
