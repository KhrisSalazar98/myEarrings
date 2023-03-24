import { createSlice } from '@reduxjs/toolkit';


/*
    status: 0 => pendiente
    status: 1 => urgente
    status: 2 => completada
*/
const initialState = [
    {
        id: "1",
        name: "Tarea 1",
        description: "Descripción de tarea 1",
        status: 0,
    },
    {
        id: "2",
        name: "Tarea 2",
        description: "Descripción de tarea 2",
        status: 1,
    },
    {
        id: "3",
        name: "Tarea 3",
        description: "Descripción de tarea 3",
        status: 0,
    },
    {
        id: "4",
        name: "Tarea 4",
        description: "Descripción de tarea 4",
        status: 2,
    },

];

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