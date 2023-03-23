import { createSlice } from '@reduxjs/toolkit';

const initialState = "light";

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            console.log(state, action);
        }
    }
});

export const {changeTheme} = themeSlice.actions;
export default themeSlice.reducer; 