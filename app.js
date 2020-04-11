const argv = require('./config/yargs').argv;
const toDo = require('./todo/to-do');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
  case 'crear':
    let tarea = toDo.crear(argv.description);
    console.log(tarea);
    break;
  case 'listar':
    let listado = toDo.listar();
    for (const tarea of listado) {
      console.log('========= TODO ========='.green);
      console.log(tarea.description);
      console.log('Estado: ', tarea.completado);
      console.log('========================'.green);
    }
    break;
  case 'actualizar':
    let actualizado = toDo.actualizar(argv.description, argv.completado);
    console.log(actualizado);
    break;
  case 'borrar':
    let borrado = toDo.borrar(argv.description);
    console.log(borrado);
    break;
  default:
    console.log('Comando no reconocido');
}
