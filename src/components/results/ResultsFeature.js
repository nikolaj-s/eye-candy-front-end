import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

import Axios from 'axios'

export const local = "http://10.0.0.203:5000"

export const production = "https://eye-candy-backend.herokuapp.com"

export const search = createAsyncThunk(
    'resultsSlice/search',
    async ({nsfw, height, gte, inputValue, width, count, newSearch, sorting}, thunkAPI) => {

        const response = await Axios({
            method: "GET",
            url: `${production}/search?nsfw=${nsfw}&height=${height}&width=${width}&gte=${gte}&query=${inputValue === "Home" ? "" : inputValue}&count=${count}&sort=${sorting}`
        }).then(res => {
            return res.data;
        })

        return {results: response.data, query: inputValue, hitMax: response.limit_reached};
    }
)


const resultsSlice = createSlice({
    name: "resultsSlice",
    initialState: {
        title: "Home",
        imageCount: 30,
        images: [...Array(30).keys()],
        loading: true,
        error: false,
        errorMessage: "",
        maxHit: false,
        loadingMore: false,
    },
    reducers: {
        increaseImageCount: (state, action) => {
            state.imageCount += 30;
        },
        toggleLoading: (state, action) => {
            state.loading ? state.loading = false : state.loading = true;
        },
        
    },
    extraReducers: {

        // search async reducer effects
        [search.pending]: (state, action) => {
            // if initial search reset the following state and brind the results scroll position to the top
            if (action.meta.arg.newSearch === true) {
                state.loading = true;
                state.maxHit = false;
                state.imageCount = 30;
                state.loadingMore = false;
                document.getElementsByClassName('results-container')[0].scrollTo(0, 0)
            } else {
                state.loadingMore = true;
            }

            state.errorMessage = "";
            state.error = false;
        },
        [search.fulfilled]: (state, action) => {
            
            
            if (state.loadingMore && state.images[0] !== 0) {
                const currentImages = state.images;

                const newImages = action.payload.results;

                currentImages.forEach((el) => {
                    for (let i = 0; i < newImages.length; i++) {
                        if (el._id === action.payload.results[i]._id) {
                            newImages.splice(i, 1)
                            break
                        }
                    }
                })

                state.images = currentImages.concat(newImages);
                
            } else {
                state.images = action.payload.results;
            }

            state.loadingMore = false;
            state.title = action.payload.query === "" ? "Home" : action.payload.query;
            // if the api returns limit_reached set hitmax state to true to prevent further fetches to the API
            if (action.payload.hitMax) {
                state.maxHit = true;
            }
            // if the query returns 0 results throw a no results error
            if (action.payload.results.length === 0) {
                state.error = true;
                state.errorMessage = "Whoops, your search has returned zero results."
            }
            // increment image count to fetch more posts when user hits bottom of scroll container
            state.imageCount += 30
            state.loading = false;
        },
        [search.rejected]: (state, action) => {
            state.loading = false;
            state.loadingMore = false;
            state.error = true;
            state.errorMessage = "Whoops, your search has returned zero results."
        },


    }
})

export const {increaseImageCount, toggleLoading} = resultsSlice.actions;

export const selectTitle = state => state.resultsSlice.title;

export const selectLoading = state => state.resultsSlice.loading;

export const selectImages = state => state.resultsSlice.images;

export const selectError = state => state.resultsSlice.error;

export const selectErrorMessage = state => state.resultsSlice.errorMessage;

export const selectImageCount = state => state.resultsSlice.imageCount;

export const selectMaxState = state => state.resultsSlice.maxHit;

export const selectLoadingMore = state => state.resultsSlice.loadingMore;

export const selectImageByIdIfExists = state => {
    const id = window.location.pathname.split("/")[2]

    if (state.resultsSlice.images[0] === 0) {
        return [{}]
    } else {
        return state.resultsSlice.images.filter(i => i._id === id)
    }
}

export default resultsSlice.reducer