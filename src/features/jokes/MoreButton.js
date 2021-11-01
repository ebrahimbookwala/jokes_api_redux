import React from "react";
import { useDispatch } from "react-redux";
import { fetchJokes } from "./jokesSlice";

function MoreButton() {
	const dispatch = useDispatch();
	return (
		<button
			type="button"
			onClick={() => {
				dispatch(fetchJokes(5));
			}}
		>
			More{" "}
		</button>
	);
}

export default MoreButton;
