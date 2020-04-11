const fs = require('fs');

let listadoToDo = [];

//escribir tarea o guardar en bd
const guardarDB = () => {
  let data = JSON.stringify(listadoToDo);
  fs.writeFile('db/data.json', data, (err) => {
    if (err) throw new Error('No se pudo grabar');
    console.log('La lista de tareas ha sido actualizada');
  });
};

//cargar tareas ya guardadas en bd
const cargarDB = () => {
  try {
    listadoToDo = require('../db/data.json');
  } catch (error) {
    listadoToDo = [];
  }
};

const crear = (description) => {
  cargarDB();

  let toDo = {
    description: description,
    completado: false,
  };

  listadoToDo.push(toDo);

  guardarDB();

  return toDo;
};

const listar = () => {
  cargarDB();
  return listadoToDo;
};

const actualizar = (description, completado = true) => {
  cargarDB();
  let index = listadoToDo.findIndex(
    (tarea) => tarea.description === description
  );

  if (index >= 0) {
    listadoToDo[index].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
};

const borrar = (description) => {
  cargarDB();
  let index = listadoToDo.findIndex(
    (tarea) => tarea.description === description
  );
  if (index >= 0) {
    listadoToDo.splice(index, 1);
    guardarDB();
    return true;
  } else {
    return false;
  }
};

module.exports = {
  crear,
  listar,
  actualizar,
  borrar,
};
