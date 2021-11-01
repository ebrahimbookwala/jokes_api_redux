import React, { useEffect } from "react";
import SingleJoke from "./SingleJoke";
import { useDispatch, useSelector } from "react-redux";
import { fetchJokes } from "./jokesSlice";
import MoreButton from "./MoreButton";
import LessButton from "./LessButton";

function JokesList() {
	const dispatch = useDispatch();
	const { status, jokes } = useSelector((state) => state.jokesData);

	useEffect(() => {
		if (jokes.length === 0) {
			dispatch(fetchJokes(10));
		}
	}, [jokes.length, dispatch]);

	console.log(status);
	if (status === "loading") {
		return <div>Loading....</div>;
	}

	const jokeList = jokes.map((joke) => (
		<SingleJoke key={joke.id} joke={joke} />
	));

	return (
		<section className="joke-list">
			<ul>{jokeList}</ul>
			<MoreButton />
			<LessButton />
		</section>
	);
}

export default JokesList;
