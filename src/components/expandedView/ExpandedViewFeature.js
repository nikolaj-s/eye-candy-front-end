import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
// eslint-disable-next-line
import { local, production } from "../results/ResultsFeature";

export const getImageById = createAsyncThunk(
    'expandedViewSlice/getImageById',
    async (_id, thunkAPI) => {
        const response = await Axios({
            method: "GET",
            url: `${production}/image?id=${_id}`
        }).then(res => {
            return res.data;
        })
        return {image: response.data}
    }
)

export const incrementClickValue = createAsyncThunk(
    'expandedViewSlice/increaseClickValue',
    async (_id, thunkAPI) => {
        const response = await Axios({
            method: "POST",
            url: `${production}/clicked?id=${_id}`
        }).then(res => {
            return res.data;
        })

        return response
    }
)

export const getRawImage = (url) => {
    return Axios({
        method: "GET",
        url: `${production}/raw-image?url=` + url
    }).then(res => {
        return res.data;
    })
}

const expandedViewSlice = createSlice({
    name: "expandedViewSlice",
    initialState: {
        selectedImage: {},
        error: false,
        errorMessage: "",
        loading: true,
        linkCopied: false,
        initialLoad: true,
        
    },
    reducers: {
        setCurrentImage: (state, action) => {
            state.loading = false;
            state.error = false;
            state.initialLoad = false;
            state.errorMessage = "";
            state.selectedImage = action.payload;
        },
        throwError: (state, action) => {
            state.error = true;
            state.errorMessage = action.payload;
        },
        toggleLinkedCopyState: (state, action) => {
            if (state.linkCopied) {
                state.linkCopied = false;
            } else {
                state.linkCopied = true;
            }
        },
        toggleImageLoading: (state, action) => {
            if (action.payload === false) {
                state.loading = false;
            } else {
                state.loading = true;
            }
        }
       
    },
    extraReducers: {
        // get image from server if its not in the loaded array of images
        [getImageById.pending]: (state, action) => {
            state.loading = true;
            state.initialLoad = true;
            state.selectedImage = {};
        },
        [getImageById.fulfilled]: (state, action) => {
            state.selectedImage = action.payload.image[0];
            state.errorMessage = ""
            state.error = false;
            state.initialLoad = false;
        },
        [getImageById.rejected]: (state, action) => {
            state.error = true;
            state.loading = false;
            state.errorMessage = "Error Fetching Image"
        },
        // increment the click attribute
        [incrementClickValue.fulfilled]: (state, action) => {
            state.selectedImage.clicks += 1;
        },
        [incrementClickValue.rejected]: (state, action) => {
            return;
        }
    }
})

export const {setCurrentImage, throwError, toggleLinkedCopyState, toggleImageLoading} = expandedViewSlice.actions;

export const selectCurrentImage = state => state.expandedViewSlice.selectedImage;

export const selectInitialLoad = state => state.expandedViewSlice.initialLoad;

export const selectError = state => state.expandedViewSlice.error;

export const selectErrorMessage = state => state.expandedViewSlice.errorMessage;

export const selectExpandedLoading = state => state.expandedViewSlice.loading;

export const selectCopiedState = state => state.expandedViewSlice.linkCopied;

export default expandedViewSlice.reducer