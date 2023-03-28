import { createSlice } from '@reduxjs/toolkit';


/*
    status: 0 => pendiente
    status: 1 => urgente
    status: 2 => completada
*/
const initialState = [
    // {
    //     id: "1",
    //     name: "Tarea 1",
    //     description: "Descripción de tarea 1",
    //     status: 0,
    // },
    // {
    //     id: "2",
    //     name: "Tarea 2",
    //     description: "Descripción de tarea 2",
    //     status: 1,
    // },
    // {
    //     id: "3",
    //     name: "Tarea 3",
    //     description: "Descripción de tarea 3",
    //     status: 0,
    // },
    // {
    //     id: "4",
    //     name: "Tarea 4",
    //     description: "Descripción de tarea 4",
    //     status: 2,
    // },

];

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        getTasks: (state, action) => {
            state = action.payload;
            return state;
        },
        addTask: (state, action) => {
            
            const name = action.payload.name[0].toUpperCase() + action.payload.name.substring(1).toLowerCase();

            const newTask = {
                id: action.payload.id,
                name: name,
                description: action.payload.description !== '' && action.payload.description.length > 1 ? action.payload.description[0].toUpperCase() + action.payload.description.substring(1).toLowerCase() : '',
                status: action.payload.urgente === true ? 1 : 0
            }

            state.push(newTask);
        },
        deleteTask: (state, action) => {

            const taskFound = state.find(task => task.id === action.payload);

            if(taskFound){
                state.splice(state.indexOf(taskFound),1);
            }
        },
        editTask: (state, action) => {

            const {id, name, description, urgente} = action.payload;
            const newName = name[0].toUpperCase() + name.substring(1).toLowerCase();
            const foundTask = state.find((task) => task.id === id);

            if(foundTask){
                foundTask.name = newName;
                foundTask.description = description !== '' && description.length > 1 ? description[0].toUpperCase() + description.substring(1).toLowerCase() : '';
                foundTask.status = urgente === true ? 1 : 0;
            }

        },
        checkTask: (state, action) => {
            const {id,check} = action.payload;
            const foundTask = state.find((task) => task.id === id);

            if(foundTask){
                check ? foundTask.status = 2 : foundTask.status = 0;
            }
            
        }
    }
});

export const { getTasks, addTask, deleteTask, editTask, checkTask } = taskSlice.actions;
export default taskSlice.reducer;