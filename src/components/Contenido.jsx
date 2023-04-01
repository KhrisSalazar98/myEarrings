import React from 'react';

import { Link } from  'react-router-dom';

import { useDispatch } from 'react-redux';
import { deleteTask, checkTask } from '../features/tasks/taskSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faPenToSquare, faListUl, faTriangleExclamation, faThumbsUp} from '@fortawesome/free-solid-svg-icons';

const Contenido = ({selector, selectorTasks}) => {

    const dispatch = useDispatch();

    const handleDeleteTask = (id) => {
        dispatch(deleteTask(id));
    }

    const toggleCheckTask = (e,id) => {
        dispatch(checkTask({
            id: id,
            check: e.target.checked,
        }));
    }

    return (
        <main>
            <div className="container">
                
                <h2 className='pt-4 text-center'><FontAwesomeIcon icon={faListUl} size="2xs" /> Listado de tareas</h2>

                <hr/>

                <div className='text-center text-lg-end'>

                    <Link to="/nueva_tarea" className='btn_nuevaTarea sombra_btn border-0 px-4 py-1 rounded-pill text-decoration-none' type="button">
                        <FontAwesomeIcon icon={faPlus} /> Nueva Tarea
                    </Link>

                </div>

                <p className='txt_pendientes fs_18 mt-2 text-center'>
                    Tienes {selectorTasks.filter((task) => task.status !== 2).length === 1 ? `${selectorTasks.filter((task) => task.status !== 2).length} tarea pendiente` : `${selectorTasks.filter((task) => task.status !== 2).length} tareas pendientes`}
                </p>

                <div className="row mt-2 pb-5">


                    {selectorTasks.length > 0 && (
                    
                        selectorTasks.map((task) => (
                            <div key={task.id} className="col-12 col-sm-12 col-md-4 col-lg-3">
                                <div className='sombra mb-3 p-3 rounded-3'>
                                
                                    <div className='text-end'>
                                        <button onClick={() => handleDeleteTask(task.id)} className='btn-close btn-close-white'></button>
                                    </div>
                                
                                    <h3 className='mb-4 text-center'>{task.name}</h3>

                                    <p className='txt_description text-center'>{task.description}</p>

                                    <div className="form_check_box form-check d-flex justify-content-center mt-3">
                                        <input className="sombra_btn form-check-input me-1" onChange={(e) => toggleCheckTask(e,task.id)} defaultChecked={task.status === 2 ? true : false} type="checkbox" id={`flexCheck_${task.id}`} />
                                        <label className="form-check-label fs_18" htmlFor={`flexCheck_${task.id}`}>
                                            ¿Tarea Finalizada?
                                        </label>
                                    </div>

                                    <div className='text-center mt-3'>
                                        {task.status === 0 && <span>Tarea <strong className='fs_20 txt_pendiente'>Pendiente</strong></span>}
                                        {task.status === 1 && <span>Tarea <strong className='fs_20 txt_urgente'>Urgente <FontAwesomeIcon icon={faTriangleExclamation} /></strong></span>}
                                        {task.status === 2 && <span>Esta tarea está <strong className='fs_20 txt_completado'>Completada <FontAwesomeIcon icon={faThumbsUp} /></strong></span>}
                                    </div>

                                    <div className='text-center mt-4 mb-3'>
                                        {task.status === 2 ?
                                            <>
                                                <button className='btn_editar_disable sombra_btn border-0 px-4 py-1 rounded-pill' type="button"><FontAwesomeIcon icon={faPenToSquare} /> Editar</button>
                                            </>
                                            :
                                            <>
                                                <Link to={`/editar_tarea/${task.id}`} className='btn_editar sombra_btn border-0 px-4 py-1 rounded-pill text-decoration-none' type="button"><FontAwesomeIcon icon={faPenToSquare} /> Editar</Link>
                                            </>
                                        }
                                    
                                    </div>

                                </div>
                            </div>
                        ))
                    )}

                    {selectorTasks.length <= 0 && (
                    
                        <div className='col-12 col-sm-12 fs_20'><p className={`${selector.mode === "Light" ? "color_dark_1" : "color_light_2"} text-center`}><strong>NO HAY TAREAS PENDIENTES O PREVIAMENTES COMPLETADAS EN ESTOS MOMENTOS</strong></p></div>
                    )}


                </div>
            </div>
        </main>
    )
}

export default Contenido;