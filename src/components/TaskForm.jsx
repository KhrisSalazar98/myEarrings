import React, { useState } from 'react';

import {v4 as uuid} from 'uuid';

import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';

import { Link, useNavigate } from 'react-router-dom';


const TaskForm = ({txt_titulo, txt_btn}) => {

    const [task,setTask] = useState({
        name: '',
        description: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });

    }

    const handleKeyUp = (e) => {
        const btnAgregar = document.querySelector('#btnAgregar');
        e.target.value.length >= 3 ? btnAgregar.classList.remove("btn_disabled") : btnAgregar.classList.add("btn_disabled");
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();

        dispatch(addTask({
            ...task,
            id: uuid(),
            urgente: document.querySelector('#flexCheck_agregar').checked,
        }));

        navigate('/');

    }

    return (
        <div className='taskForm'>
            <div className='container'>
                <h2 className='pt-4 text-center'>{txt_titulo}</h2>

                <hr/>

                <div className='text-center text-lg-end'>

                    <Link to="/" className='btn_nuevaTarea sombra_btn border-0 px-4 py-1 rounded-pill text-decoration-none' type="button">
                        Volver
                    </Link>
                    
                </div>

                <div className='row justify-content-center mt-3'>
                    <div className='col-12 col-sm-12 col-md-10 col-lg-7'>
                        <div className='sombra p-3 p-sm-5 rounded-3'>
                            <form onSubmit={handleSubmit}>
                                <div className="row justify-content-center">

                                    <div className='col-12 col-sm-12 col-xl-11 mb-4 pt-4'>
                                        <label htmlFor="nombre">Nombre:</label>
                                        <input type="text" id="nombre" name="name" onKeyUp={handleKeyUp} onChange={handleChange} className='input_form sombra_btn rounded-pill w-100' placeholder='Nombre de la tarea' />
                                        <span>*Mínimo 3 caracteres</span>
                                    </div>

                                    <div className='col-12 col-sm-12 col-xl-11 mb-4'>
                                        <label htmlFor="descripcion">Descripción:</label>
                                        <textarea name="description" onChange={handleChange} className='input_form sombra_btn rounded-3 w-100' id="descripcion" placeholder='Descripción de la tarea' />
                                        <span>(opcional)</span>
                                    </div>


                                    <div className="col-12 col-sm-12 col-xl-11 mb-4">
                                        <div className="form_check_box form-check d-flex justify-content-start">
                                            <input className="sombra_btn form-check-input me-1" type="checkbox" id={`flexCheck_agregar`} name="urgente" />
                                            <label className="form-check-label" htmlFor={`flexCheck_agregar`}>
                                                <span className='txt_pendiente'>¿Urgente?</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className='col-12 col-sm-12 col-xl-11 my-2 text-center'>
                                        <button className='btn_disabled btn_editar sombra_btn border-0 px-4 py-1 rounded-pill' id="btnAgregar" type="submit">{txt_btn}</button>
                                    </div>
                                </div>

                            
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TaskForm;