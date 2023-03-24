import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: "Light",
    isChecked: false,
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action) => {

            state.isChecked = !state.isChecked;
            state.mode === "Light" ? state.mode = "Dark" : state.mode = "Light";

            return state;
        },
        getTheme: (state, action) => {
            state = action.payload;
            return state;
        },
    }
});

export const {changeTheme, getTheme} = themeSlice.actions;
export default themeSlice.reducer; 