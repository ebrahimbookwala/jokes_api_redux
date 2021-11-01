import React, { useState } from "react";
import { deleteAndAddJoke } from "./jokesSlice";
import { useDispatch } from "react-redux";

function SingleJoke({ joke }) {
	const dispatch = useDispatch();

	const [isHovered, setIsHovered] = useState(false);

	const handleMouseMove = () => {
		setIsHovered((prev) => !prev);
	};

	const imageSource = isHovered
		? "/images/delete.jpg"
		: "/images/delete-plain.png";

	return (
		<li className="joke-list-item">
			<div className="joke-text">{joke.joke}</div>
			<button
				className="delete-button"
				onMouseEnter={handleMouseMove}
				onMouseLeave={handleMouseMove}
				onClick={() => dispatch(deleteAndAddJoke(joke.id))}
			>
				<img src={imageSource} alt="" />
			</button>
		</li>
	);
}

export default SingleJoke;
