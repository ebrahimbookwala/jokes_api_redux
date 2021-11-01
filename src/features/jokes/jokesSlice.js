import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { status: "idle", jokes: [], error: "" };

export const fetchJokes = createAsyncThunk(
	"jokesData/fetchJokes",
	async (number) => {
		const data = await fetch(`http://api.icndb.com/jokes/random/${number}`);
		const jokesData = await data.json();
		return jokesData.value;
	}
);

export const deleteAndAddJoke = createAsyncThunk(
	"jokesData/deleteAndAddJoke",
	async (id, { dispatch }) => {
		const data = await fetch(`http://api.icndb.com/jokes/random/1`);
		const jokesData = await data.json();
		dispatch(deleteJoke({ jokesData, id }));
	}
);

const jokesSlice = createSlice({
	name: "jokesData",
	initialState,
	reducers: {
		deleteJoke(state, action) {
			const jokeIndex = state.jokes.findIndex(
				(joke) => joke.id === action.payload.id
			);

			state.jokes.splice(jokeIndex, 1, action.payload.jokesData.value[0]);
		},
		lessJokes(state, action) {
			state.jokes = state.jokes.splice(0, state.jokes.length - 5);
		},
	},
	extraReducers: {
		[fetchJokes.pending]: (state) => {
			state.status = "loading";
		},
		[fetchJokes.fulfilled]: (state, action) => {
			state.status = "succeeded";
			state.jokes = [...state.jokes, ...action.payload];
		},
		[fetchJokes.rejected]: (state, action) => {
			state.status = "failed";
			state.error = action.payload.type;
		},
	},
});

export default jokesSlice.reducer;
export const { deleteJoke, lessJokes } = jokesSlice.actions;
