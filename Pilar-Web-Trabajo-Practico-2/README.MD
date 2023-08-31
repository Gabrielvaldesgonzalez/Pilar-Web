# Proyecto pilar-web - Trabajo Práctico 2

Este repositorio contiene el código correspondiente al Trabajo Práctico 2 del curso, en el cual se continuó el
desarrollo del proyecto React llamado pilar-web, implementando un CRUD para tareas "todo" utilizando Redux. A
continuación, se detalla cómo se llevaron a cabo las tareas requeridas en el trabajo práctico:

## Redux Implementation

En este trabajo práctico, se implementó la gestión de estado global utilizando Redux. Se crearon los siguientes
elementos:

- **Constants**: Se definieron constantes para las acciones que representan operaciones del CRUD, como `ADD_TODO`
  , `TOGGLE_TODO`, y `DELETE_TODO`.

- **State**: Se creó un estado inicial en el reducer para almacenar la lista de tareas "todo". Cada tarea contiene
  información como su nombre, estado de completado y un identificador único.

- **Selectors**: Se implementaron selectores para filtrar y obtener información específica del estado global. Por
  ejemplo, se crearon selectores para obtener las tareas completadas y pendientes.

- **Actions**: Se desarrollaron acciones que representan las operaciones del CRUD, como agregar una tarea, marcar una
  tarea como completada y eliminar una tarea.

- **Reducer**: Se implementó un reducer que maneja las acciones correspondientes para actualizar el estado global de las
  tareas "todo". Cada acción modifica el estado de acuerdo con la operación realizada.

## Página Todo

En la página "Todo", se implementaron las siguientes funcionalidades:

- **Formulario para Crear Tareas**: Se agregó un formulario que permite al usuario ingresar el nombre de una nueva tarea
  y agregarla a la lista.

- **Listado de Tareas**: Las tareas agregadas se muestran dentro de una tarjeta. Cada tarea renderizada contiene un
  checkbox que permite marcarla como completada, el nombre de la tarea y un botón para eliminar la tarea.

- **Operaciones del CRUD Reflejadas Globalmente**: Todas las operaciones de crear, marcar como completada y eliminar
  tareas se reflejan en el estado global de Redux.

## Página Dashboard

En la página "Dashboard", se implementaron dos tarjetas en la parte superior:

- **Tarjeta Tareas Completadas**: Esta tarjeta muestra la cantidad de tareas completadas en relación con el total de
  tareas. Consumiendo datos del estado global y utilizando los selectores correspondientes, se filtraron las tareas para
  obtener el número de tareas completadas y se mostró esta información en la tarjeta.

- **Tarjeta Tareas Pendientes**: Similar a la tarjeta de tareas completadas, esta tarjeta muestra la cantidad de tareas
  pendientes en relación con el total de tareas.

Ambas tarjetas se actualizan automáticamente cuando se realizan operaciones de CRUD en la página "Todo" debido a la
naturaleza global del estado en Redux.

## Capturas de Pantalla

A continuación, se presentan algunas capturas de pantalla que ilustran cómo se ve el proyecto en ejecución:

1. **Página Todo**:
   ![Captura de pantalla de la página Todo](https://i.imgur.com/zVY48am.png)

2. **Página Dashboard**:
   ![Captura de pantalla de la página Dashboard](https://i.imgur.com/pp0MwDP.png)

## Estilo y Estructura del Repositorio

El diseño de las interfaces de usuario se ha mantenido coherente con el estilo establecido en el Trabajo Práctico 1,
utilizando estilos similares para mantener la coherencia visual en todo el proyecto. La estructura del repositorio se ha
mantenido organizada en las carpetas "src/layout" y "src/pages", siguiendo la misma estructura establecida en el Trabajo
Práctico 1.

## Instrucciones de Uso

1. Clonar este repositorio en su máquina local.
2. Instalar las dependencias necesarias ejecutando `npm install` en la raíz del proyecto.
3. Cambiar al branch "tp2" utilizando el comando `git checkout tp2`.
4. Ejecutar la aplicación con `npm start`.
5. La aplicación estará disponible en su navegador en la dirección [http://localhost:3000](http://localhost:3000).
