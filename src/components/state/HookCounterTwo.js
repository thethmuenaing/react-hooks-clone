import React, { useState } from "react";

const HookCounterTwo = () => {
	const initialCount = 0;
	const [count, setCount] = useState(initialCount);

	const IncrementFive = () => {
		for (let i = 0; i < 5; i++) {
			setCount((prevCount) => prevCount + 1);
			console.log("count ", count);
		}
	};
	const DecrementFive = () => {
		for (let i = 0; i < 5; i++) {
			setCount((prevCount) => prevCount - 1);
			console.log("count ", count);
		}
	};

	return (
		<div>
			Count - {count}
			<br />
			<button onClick={() => setCount(initialCount)}>Reset</button>
			<br />
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<br />
			<button onClick={() => setCount(count - 1)}>Decrement</button>
			<br />
			<button onClick={IncrementFive}>Increment 5</button>
			<br />
			<button onClick={DecrementFive}>Decrement 5</button>
		</div>
	);
};

export default HookCounterTwo;
