import React from "react";
import { useDispatch } from "react-redux";
import { lessJokes } from "./jokesSlice";

function LessButton() {
	const dispatch = useDispatch();
	return (
		<button
			type="button"
			onClick={() => {
				dispatch(lessJokes());
			}}
		>
			Less
		</button>
	);
}

export default LessButton;
