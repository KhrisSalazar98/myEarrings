import React from 'react';

import { Link } from  'react-router-dom';

import { useDispatch } from 'react-redux';
import { deleteTask, checkTask } from '../features/tasks/taskSlice';

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
                
                <h2 className='pt-4 text-center'>Listado de tareas</h2>

                <hr/>

                <div className='text-center text-lg-end'>

                    <Link to="/nueva_tarea" className='btn_nuevaTarea sombra_btn border-0 px-4 py-1 rounded-pill text-decoration-none' type="button">
                        Nueva Tarea
                    </Link>

                </div>

                <p className='txt_pendientes fs_18 mt-5 text-center'>
                    Tienes {selectorTasks.filter((task) => task.status !== 2).length === 1 ? `${selectorTasks.filter((task) => task.status !== 2).length} tarea pendiente` : `${selectorTasks.filter((task) => task.status !== 2).length} tareas pendientes`}
                </p>

                <div className="row mt-5 pb-5">


                    {selectorTasks.length > 0 && (
                    
                        selectorTasks.map((task) => (
                            <div key={task.id} className="col-12 col-sm-12 col-md-4 col-lg-3">
                                <div className='sombra mb-3 p-3 rounded-3'>
                                
                                    <div className='text-end'>
                                        <button onClick={() => handleDeleteTask(task.id)} className='btn-close btn-close-white'></button>
                                    </div>
                                
                                    <h3 className='mb-4 text-center'>{task.name}</h3>

                                    <p className='txt_description text-center'>{task.description}</p>

                                    <div className="form_check_box form-check d-flex justify-content-center">
                                        <input className="sombra_btn form-check-input me-1" onChange={(e) => toggleCheckTask(e,task.id)} defaultChecked={task.status === 2 ? true : false} type="checkbox" id={`flexCheck_${task.id}`} />
                                        <label className="form-check-label" htmlFor={`flexCheck_${task.id}`}>
                                            {task.status === 0 && <span className='fs_20 txt_pendiente'><strong>Pendiente</strong></span>}
                                            {task.status === 1 && <span className='fs_20 txt_urgente'><strong>Urgente</strong></span>}
                                            {task.status === 2 && <span className='fs_20 txt_completado'><strong>Completado</strong></span>}
                                        </label>
                                    </div>

                                    <div className='text-center mt-4'>
                                        {task.status === 2 ?
                                            <>
                                                <button className='btn_editar_disable sombra_btn border-0 px-4 py-1 rounded-pill' type="button">Editar</button>
                                            </>
                                            :
                                            <>
                                                <Link to={`/editar_tarea/${task.id}`} className='btn_editar sombra_btn border-0 px-4 py-1 rounded-pill text-decoration-none' type="button">Editar</Link>
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