import React from 'react';

const Contenido = ({selector, selectorTasks}) => {

    return (
        <main>
            <div className="container">
                
                <h2 className='pt-4 text-center'>Listado de tareas</h2>

                <hr/>

                <div className='text-center text-lg-end'>
                    <button className='btn_nuevaTarea sombra_btn border-0 px-4 py-1 rounded-pill' type="button">Nueva Tarea</button>
                </div>

                <p className='txt_pendientes fs_18 mt-5 text-center'>Tienes {selectorTasks.length} tareas pendientes</p>

                <div className="row mt-5 pb-5">


                    {selectorTasks.length > 1 && (
                    
                        selectorTasks.map((task) => (
                            <div key={task.id} className="col-12 col-sm-12 col-md-4 col-lg-3">
                                <div className='sombra mb-3 p-3 rounded-3'>
                                
                                    <div className='text-end'>
                                        <button className='btn-close btn-close-white'></button>
                                    </div>
                                
                                    <h3 className='mb-4 text-center'>{task.name}</h3>

                                    <p className='txt_description text-center'>{task.description}</p>

                                    <div className="form_check_box form-check d-flex justify-content-center">
                                        <input className="sombra_btn form-check-input me-1" defaultChecked={task.status === 2 ? true : false} type="checkbox" defaultValue id={`flexCheck_${task.id}`} />
                                        <label className="form-check-label" htmlFor={`flexCheck_${task.id}`}>
                                            {task.status === 0 && <span className='fs_20 txt_pendiente'><strong>Pendiente</strong></span>}
                                            {task.status === 1 && <span className='fs_20 txt_urgente'><strong>Urgente</strong></span>}
                                            {task.status === 2 && <span className='fs_20 txt_completado'><strong>Completado</strong></span>}
                                        </label>
                                    </div>

                                    <div className='text-center mt-4'>
                                        {task.status === 2 ?
                                            <>
                                                <button className='btn_editar_disable sombra_btn border-0 px-4 py-1 rounded-pill'>Editar</button>
                                            </>
                                            :
                                            <>
                                                <button className='btn_editar sombra_btn border-0 px-4 py-1 rounded-pill' type="button">Editar</button>
                                            </>
                                        }
                                    
                                    </div>

                                </div>
                            </div>
                        ))
                    )}

                    {selectorTasks.length <= 1 && (
                    
                        <div className='col-12 col-sm-12 fs_20'><p className={`${selector.mode === "Light" ? "color_dark_1" : "color_light_2"} text-center`}><strong>NO HAY TAREAS PENDIENTES O PREVIAMENTES COMPLETADAS EN ESTOS MOMENTOS</strong></p></div>
                    )}


                </div>
            </div>
        </main>
    )
}

export default Contenido;