import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './sass/style.scss';

import { useDispatch ,useSelector } from 'react-redux';
import { getTheme } from './features/theme/themeSlice';

import Header from './components/Header';
import Contenido from './components/Contenido';
import TaskForm from './components/TaskForm';

const KEY_THEME = "myearrings.trabajadores";

function App() {

  const dispatch = useDispatch();
  const selector = useSelector(state => state.theme);
  const selectorTasks = useSelector(state => state.tasks);

  const body = document.querySelector('#body');

  

  // Obtener la información del estado que se procesó previamente
  useEffect(() => {
    const storedTheme = JSON.parse(localStorage.getItem(KEY_THEME));

    if(storedTheme){
      dispatch(getTheme(storedTheme));
    }

  }, []);

  // Cada vez que el estado tenga cambios
  useEffect(() => {

    localStorage.setItem(KEY_THEME, JSON.stringify(selector));

  }, [selector]);

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
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
