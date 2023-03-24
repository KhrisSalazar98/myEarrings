import React from 'react';

const Contenido = ({selectorTasks}) => {

    console.log(selectorTasks);

    return (
        <main>
            <div className="container">
                
                <h2 className='pt-5 text-center'>Listado de tareas</h2>

                <div className='text-end'>
                    <button className='btn_nuevaTarea border-0 px-4 py-1 rounded-pill' type="button">Nueva Tarea</button>
                </div>
                
                <hr/>
                                
                <p className='txt_pendientes mt-5 text-center'>Tienes {selectorTasks.length} pendientes</p>

                <div className="row mt-5">
                    {selectorTasks.map((task) => (
                        <div key={task.id} className="col-12 col-sm-12 col-md-4 col-lg-3">
                            <div className='sombra mb-3 p-3 rounded-3'>
                                
                                <div className='text-end'>
                                    <button className='btn-close btn-close-white'></button>
                                </div>
                                
                                <h3 className='mb-4 mt-2 text-center'>{task.name}</h3>

                                <p className='txt_description text-center'>{task.description}</p>

                                <div className="form_check_box form-check d-flex justify-content-center">
                                    <input className="form-check-input me-2" type="checkbox" defaultValue id={`flexCheck_${task.id}`} />
                                    <label className="form-check-label" htmlFor={`flexCheck_${task.id}`}>
                                        Default checkbox
                                    </label>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Contenido;