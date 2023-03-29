import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './sass/style.scss';

import { useDispatch ,useSelector } from 'react-redux';
import { getTheme } from './features/theme/themeSlice';
import { getTasks } from './features/tasks/taskSlice';

import Header from './components/Header';
import Contenido from './components/Contenido';
import TaskForm from './components/TaskForm';

const KEY_THEME = "myearrings.theme";
const KEY_TASKS = "myearrings.tasks";

function App() {

  const dispatch = useDispatch();
  const selector = useSelector(state => state.theme);
  const selectorTasks = useSelector(state => state.tasks);

  const body = document.querySelector('#body');

  

  // Obtener la información del estado que se procesó previamente
  useEffect(() => {

    const storedTheme = JSON.parse(localStorage.getItem(KEY_THEME));
    const storedTasks = JSON.parse(localStorage.getItem(KEY_TASKS));

    if(storedTheme){
      dispatch(getTheme(storedTheme));
    }

    if(storedTasks){
      dispatch(getTasks(storedTasks));
    }

  }, [dispatch]);

  // Cada vez que el estado tenga cambios
  useEffect(() => {

    localStorage.setItem(KEY_THEME, JSON.stringify(selector));
    localStorage.setItem(KEY_TASKS, JSON.stringify(selectorTasks));

  }, [selector, selectorTasks]);

  body.classList.contains('Light') && body.classList.remove('Light');
  body.classList.contains('Dark') && body.classList.remove('Dark');

  body.classList.add(selector.mode);
  
  return (
    <>
      <Header selector={selector}  />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Contenido selector={selector} selectorTasks={selectorTasks} />} />
          <Route path='/nueva_tarea' element={<TaskForm txt_titulo={"Agregar Nueva Tarea"} txt_btn={"Agregar"} />}/>
          <Route path='/editar_tarea/:id' element={<TaskForm txt_titulo={"Editar Tarea"} txt_btn={"Guardar Cambios"} />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
