const description = {
  demand: true,
  alias: 'd',
  desc: 'Descripción de la tarea por hacer',
};

const completado = {
  default: true,
  alias: 'c',
  desc: 'Marca como completado o pendiente la tarea',
};

const argv = require('yargs')
  .command('crear', 'Crear tarea por hacer', {
    description,
  })
  .command('actualizar', 'Actualiza el estado completado de una tarea', {
    description,
    completado,
  })
  .command('borrar', 'Borra una tarea', {
    description,
  })
  .help().argv;

module.exports = {
  argv,
};
