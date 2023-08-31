# Proyecto pilar-web - Trabajo Práctico 1

Este repositorio contiene el código correspondiente al Trabajo Práctico 1 del curso, en el cual se desarrolló un proyecto React llamado **pilar-web**. El objetivo principal del proyecto era implementar una interfaz de usuario que cumpla con los siguientes requisitos:

## Layout

El proyecto incluye los siguientes componentes de diseño:

- **TopBar:** Encabezado de la página que contiene un icono para abrir/cerrar el drawer, el título "Pilarweb" y un avatar para abrir/cerrar el popmenú.

- **SideBar:** Panel lateral de navegación que consta de dos secciones: "Home" (navega a la página Dashboard) y "Pages" (contiene enlaces a las páginas Todo y Fetchlist).

- **Popmenú:** Menú emergente que se activa al hacer clic en el avatar del header. Contiene una opción que lleva a la página Dashboard.

## Páginas

El proyecto incluye las siguientes páginas:

- **Dashboard:** Página de inicio que contiene dos tarjetas, cada una con un título e icono. Estas tarjetas permiten la navegación a las páginas Todo y Fetchlist, respectivamente.

- **Todo:** Página que presenta una tarjeta contenedora y muestra el título de la página.

- **Fetchlist:** Página que también incluye una tarjeta contenedora y muestra el título de la página.

## Navegación

La navegación dentro del proyecto se logra a través de los siguientes elementos:

- **Drawer:** El drawer proporciona enlaces directos a la página Dashboard, así como a las páginas Todo y Fetchlist a través de la sección "Pages".

- **Popmenú:** El popmenú proporciona un enlace a la página Dashboard, permitiendo una navegación rápida.

- **Tarjetas en Dashboard:** En la página Dashboard, hay dos tarjetas que sirven como enlaces a las páginas Todo y Fetchlist.

## Estilo

El diseño de las interfaces de usuario se ha desarrollado siguiendo las pautas y explicaciones proporcionadas en clase. Se ha dado preferencia a la creatividad y al propio criterio para aplicar los estilos.

## Estructura del Repositorio

El repositorio está organizado de la siguiente manera:

- **`src/`**: Contiene los archivos fuente del proyecto.
  - **`layout/`**: Carpeta que alberga los componentes reutilizables utilizados en el proyecto.
  - **`pages/`**: Contiene las implementaciones de las diferentes páginas del proyecto.
  - **`AppRouter.js/`**: Contiene la configuración de enrutamiento para la aplicación React.
  - **`App.js`**: Punto de entrada de la aplicación React.
  - **`index.js`**: Archivo principal que renderiza la aplicación en el DOM.

## Instrucciones de Uso

1. Clonar este repositorio en su máquina local.
2. Instalar las dependencias necesarias ejecutando `npm install` en la raíz del proyecto.
3. Ejecutar la aplicación con `npm start`.
4. La aplicación estará disponible en su navegador en la dirección [http://localhost:3000](http://localhost:3000).
