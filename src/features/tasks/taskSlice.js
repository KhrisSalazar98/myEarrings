import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: "1",
        name: "Tarea 1",
        description: "Descripción de tarea 1",
        urgente: 0,
        complete: 0,
    },
    {
        id: "2",
        name: "Tarea 2",
        description: "Descripción de tarea 2",
        urgente: 1,
        complete: 0,
    },
    {
        id: "3",
        name: "Tarea 3",
        description: "Descripción de tarea 3",
        urgente: 0,
        complete: 1,
    },
    {
        id: "4",
        name: "Tarea 4",
        description: "Descripción de tarea 4",
        urgente: 0,
        complete: 0,
    },

]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            console.log(state);
        }
    }
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;