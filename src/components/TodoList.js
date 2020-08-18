/**
 * Created by chalosalvador on 8/2/20
 */
import React, { useEffect, useState } from 'react';
import Loader from './Loader.js';

const TodoList = () => {

  const [ tareas, setTareas ] = useState( []);
  const [ count, setCount ] = useState( 1);

  const [ userData, setUserData ] = useState( null );
  const [ userTask, setUserTask ] = useState( null );

  const handleCargarDatos = () => {
    setTareas([]);
    setUserData(null);
    setUserTask(null);
    fetch( 'https://jsonplaceholder.typicode.com/users/' + count )
        .then( ( data ) => {
          console.log( 'data', data );
          return data.json();
        } )
        .then( ( userJSON ) => {
          console.log( 'userJSON', userJSON );
          setUserData( userJSON );
        } );
    fetch( 'https://jsonplaceholder.typicode.com/users/' + count + '/todos' )
        .then( ( Tasks ) => {
          console.log( 'tasks', Tasks );
          return Tasks.json();
        } )
        .then( ( taskJSON ) => {
          console.log( 'tasksJSON', taskJSON );
          setUserTask( taskJSON );
        } );

  };

  useEffect( () => {
    console.log( 'SOLO CUANDO SE MONTA EL COMPONENTE' );
    handleCargarDatos();
    console.log( 'SENTENCIA DESPUES DEL FETCH' );
  }, [ ] );

  useEffect( () => {
    console.log( 'SE REALIZÓ UN CAMBIO!' );
  } );


  const handleAddTareas = () => {
    const nameTarea = document.querySelector( '#nameTarea' ).value;
    const completed = false;
    const newTarea = {
      nameTarea,
      completed
    };
    setTareas( ( prevState ) => [
      ...prevState,
      newTarea
    ]);
  };

  const handleEliminarTarea = ( posicion ) => {
    console.log("Inicio", tareas)
    setTareas( ( prevState ) => {
      return  prevState.filter( ( item, index ) => index  !== posicion );
    } );
    console.log("NuevoAr", tareas);
  };

  const handleLlenarTareas = () => {
    userTask.forEach((item,index)=>{
      const nameTarea = item.title;
      const completed = item.completed;
      const newTarea = {
        nameTarea,
        completed
      };
      setTareas( ( prevState ) => [
        ...prevState,
        newTarea,
      ]);

    })

  };

  const handleCambiarValor = ( posicion, tarea) =>{

    const nameTarea = tarea;
    const completed = true;
    const newTarea = {
      nameTarea,
      completed
    };
    setTareas( ( prevState ) => [
      ...prevState,
      prevState[posicion] = newTarea
    ]);
    const num = tareas.length;
    handleEliminarTarea(num);
    console.log("CambioTareas:", tareas);
  };



  return (

      <div >

        <div>

          {
            count == 1 ?
                <div>
                  {count}
                  <button onClick={
                    (event) => {
                      setCount( count + 1 );
                      handleCargarDatos();
                      handleLlenarTareas()}
                  }>Siguiente usuario</button>
                </div>
                : count < 10 ?
                <div>
                  {count}
                  <button onClick={
                    (event) => {setCount( count - 1 );
                      handleCargarDatos();
                      handleLlenarTareas()}
                  }>Anterior usuario</button>
                  <button onClick={
                    (event) => {setCount( count + 1 );
                      handleCargarDatos();
                      handleLlenarTareas()}
                  }>Siguiente usuario</button>
                </div>
                :
                <div>
                  {count}
                  <button onClick={
                    (event) => {setCount( count - 1 );
                      handleCargarDatos();
                      handleLlenarTareas()}
                  }>Anterior usuario</button>
                </div>


          }

        </div>

        <div>
          <h1>Información del usuario</h1>
          {
            userData
                ?
                <ul>
                  <li>Nombre:   { userData.name }</li>
                  <li>Usuario:  { userData.username }</li>
                  <li>Email:    { userData.email }</li>
                  <li>Web:      { userData.website }</li>
                  <li>Teléfono: { userData.phone }</li>
                </ul>
                : <Loader />
          }

        </div>


        <div>
          <label htmlFor='nameTarea'>Nombre de la Tarea </label>
          <input type='text' id='nameTarea' />

          <button onClick={ handleAddTareas }>Nueva Tarea</button>
        </div>
        <h1>Lista de tareas </h1>

        <ul>
          {
            userTask ?

                tareas.map((tarea, index) => (
                        <li key={index + "li" + count}>
                          <h4 className="Espaciado"> {tarea.nameTarea}</h4>
                          {
                            tarea.completed ?
                                <div className="Enlinea">Completada</div>
                                :
                                <button className="Btn" key={index + "BTNt" + count}
                                        onClick={() => handleCambiarValor(index, tarea.nameTarea)}> Marcar como
                                  completada </button>
                          }
                          <button key={index + "Btn" + count}
                                  onClick={() => handleEliminarTarea(index)}> Eliminar
                          </button>
                        </li>
                    )
                )


                : <Loader/>
          }
        </ul>
      </div>
  );

};


export default TodoList;
