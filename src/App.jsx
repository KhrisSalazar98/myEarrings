import React, { useEffect } from 'react';
import './sass/style.scss';

import { useDispatch ,useSelector } from 'react-redux';
import { getTheme } from './features/theme/themeSlice';

import Header from './components/Header';
import Contenido from './components/Contenido';

const KEY_THEME = "myearrings.trabajadores";

function App() {

  const dispatch = useDispatch();
  const selector = useSelector(state => state.theme);
  const selectorTasks = useSelector(state => state.tasks);


  // Obtener la información del estado que se procesó previamente
  useEffect(() => {
    const storedTheme = JSON.parse(localStorage.getItem(KEY_THEME));

    if(storedTheme){
      dispatch(getTheme(storedTheme));
    }

  }, [])

  // Cada vez que el estado tenga cambios
  useEffect(() => {

    localStorage.setItem(KEY_THEME, JSON.stringify(selector));

  }, [selector]);
  

  return (
    <div className={selector.mode}>
      <Header selector={selector}  />
      <Contenido selectorTasks={selectorTasks} />
    </div>
  );
}

export default App;
