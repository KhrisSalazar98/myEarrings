import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import tasksReducer from '../features/tasks/taskSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        tasks: tasksReducer,
    }
});
