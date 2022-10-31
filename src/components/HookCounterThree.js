import React, { useState } from "react";

const HookCounterThree = () => {
	const [name, setName] = useState({ firstName: " ", lastName: " " });
	return (
		<form>
			<input
				type="text"
				value={name.firstName}
				onChange={(e) => setName({ ...name, firstName: e.target.value })}
				placeholder="First Name"
				className="bg-slate-300 text-slate-500 my-1 rounded-md focus:outline-none px-3 py-1 focus:bg-white border border-slate-300"
			/>
			<br />
			<input
				type="text"
				value={name.lastName}
				onChange={(e) => setName({ ...name, lastName: e.target.value })}
				placeholder="Last Name"
				className="bg-slate-300 text-slate-500 my-1 rounded-md focus:outline-none px-3 py-1 focus:bg-white border border-slate-300"
			/>
			<br />
			<h2>Your first name is - {name.firstName}</h2>
			<br />
			<h2>Your last name is - {name.lastName}</h2>
			<br />
			<h2>{JSON.stringify(name)}</h2>
		</form>
	);
};

export default HookCounterThree;
