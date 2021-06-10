
import {createSlice} from '@reduxjs/toolkit'

const sideBarSlice = createSlice({
    name: "sideBar",
    initialState: {
        featuredTags: ["nature", "landscape", "city", "gaming", "mountains", "cars", "art", "tropical"],
        icon: "https://res.cloudinary.com/drlkgoter/image/upload/v1622146050/Nor.%20X%20west/Rectangle_26_waw4y7.png",

    }
})

export const selectFeaturedTags = state => state.sideBarSlice.featuredTags;

export const selectIcon = state => state.sideBarSlice.icon;

export default sideBarSlice.reducer