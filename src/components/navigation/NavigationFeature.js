
import {createSlice} from '@reduxjs/toolkit'


const NavigationSlice = createSlice({
    name: "navigationState",
    initialState: {
        inputValue: "",
        height: 0,
        width: 0,
        gte: true,
        nsfw: false,
        mobileMenu: false,
        sorting: true,
        stateChange: false
    },
    reducers: {
        toggleGTE: (state, action) => {
            
            if (state.gte === true) {
                state.gte = false;
            } else {
                state.gte = true;
            }

            state.stateChange = true;

        },
        toggleSorting: (state, action) => {
            if (state.sorting) {
                state.sorting = false;
            } else {
                state.sorting = true;
            }

            state.stateChange = true;
        },
        toggleNSFW: (state, action) => {

            if (state.nsfw) {
                state.nsfw = false;
            } else {
                state.nsfw = true;
            }

            state.stateChange = true;

        },
        setInputValue: (state, action) => {
            state.mobileMenu = false;
            state.inputValue = action.payload.toLowerCase();
            
            state.stateChange = true;
        },
        setHeight: (state, action) => {
            state.height = Number(action.payload);
            state.stateChange = true;
        },
        setWidth: (state, action) => {
            state.width = Number(action.payload);
            state.stateChange = true;
        },
        toggleMobileMenu: (state, action) => {
            if (state.mobileMenu) {
                state.mobileMenu = false;
            } else {
                state.mobileMenu = true;
            }
        },
        resetStateChanged: (state, action) => {
            state.stateChange = false;
        }
        

    }
})

export const selectAllState = state => {
    return {
        nsfw: state.NavigationSlice.nsfw,
        height: state.NavigationSlice.height,
        width: state.NavigationSlice.width,
        gte: state.NavigationSlice.gte,
        inputValue: state.NavigationSlice.inputValue,
        sorting: state.NavigationSlice.sorting
    }
}

export const selectStateChanged = state => state.NavigationSlice.stateChange;

export const selectMobileMenuState = state => state.NavigationSlice.mobileMenu;

export const selectInputValue = state => state.NavigationSlice.inputValue;

export const selectNSFWState = state => state.NavigationSlice.nsfw;

export const selectGTEState = state => state.NavigationSlice.gte;

export const selectSortingState = state => state.NavigationSlice.sorting;

export const {resetStateChanged, toggleSorting, toggleGTE, toggleNSFW, setInputValue, setHeight, setWidth, toggleMobileMenu} = NavigationSlice.actions;

export default NavigationSlice.reducer;