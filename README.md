# HP_crossPlatform
## Proyecto Front React con la librería Charts.js para la Hackathon Online 28/05/22, de Nuwe y Caixabank Tech, Barcelona

### Descripción
El proyecto trata de un reto en el que se debe crear una aplicación multi dispositivo con React Native, con posibilidad de mostrar el contenido también en la versión móvil. Para este proyecto se ha empleado React.js (en el apartado de *justificación* se profundiza en las razones).

### Instalación
Para el proyecto se usó la última versión actual de Vite (2.9.9) como herramienta de tooling por su ligereza para inicializar el entorno de React (18.0.0). Además, aprovecha el sistema de módulos de ES6 (ESModules). Es necesario tener antes instalado Node.js en el equipo. 

```
npm init vite@latest frontjobx    //crea el entorno
npm install                       //instala las dependencias
npm run dev                       //ejecuta el entorno
```

Sobre este mismo proyecto se instaló la librería Chart.js para los gráficos.

```
npm i react-chartjs-2 chart.js     //instala las dependencias necesarias para ejecutar la librería en react

```

Para la distribución del contenido se ha empleado CSS en conjunto con la librería react-bootstrap y también sus iconos.

```
npm i react-bootstrap bootstrap     //instala las dependencias necesarias para ejecutar la librería en react

npm i react-icons  //instala las dependencias necesarias para importar iconos
```


## Clonar el repositorio
Para clonarlo, se debe insertar los siguientes comandos:

```
git clone https://github.com/hannakpa/HP_crossPlatform.git
npm i                              //instala las dependencias detalladas en package.json
npm run dev                       //en una consola. localhost:3000
```

## Organización
El proyecto se ha distribuido en carpetas según su comportamiento y tipo. Dentro de la carpeta **content** está todo el contenido dinámico de la página. Puede aparecer u ocultar según su clase con efectos de hacer la página responsiva. 
Dentro de **fixed** se encuentra la parte que se queda fija, por ejemplo las barras de navegación. 
En **img** se guardan las imágenes para el logo y en **styles** los estilos para las páginas. 

La carpeta **content** tiene a su vez tres carpetas:
 - *cards* contiene el componente que genera las cartas que se mostrarán haciendo un map del array con datos que vengan de una base de datos. Esta se podrá reutilizar en cualquier componente, al estar aislada. 
 - *charts* contiene tres componentes: *ColGraphicBox*, *GraphicBox*, *PieGraphicBox* y la carpeta *charts*. Los tres son componentes contenedores de gráficos y otros detalles, como títulos o descripciones.
     - la carpeta interior, *charts*, contiene los tipos de gráficos que se han empleado en esta app: gráfico Linear y gráfico PieGraph, también reutilizables, pues se puede pasar su contenido por props o por Context. 
  - *text* contiene el texto introductorio de la versión móvil. Esta desaparece cuando se amplía la superficie de la app.

## Modelo elegido 
Como orientación para la plantilla de diseño, se ha empleado la aportada por el equipo organizador: https://www.figma.com/file/SxdHiAzQFC7oyBO0FeQGhh/Neolex?node-id=502%3A2097

### Gráficos 

Para el reto se ha empleado dos tipos de gráficos: uno lineal, que indica con puntos los valores que se le pasa en un array y otro tipo tarta o pie, que muestra la parte porcentual de cada parte, sobre un total. 

El gráfico *Linear* de la versión móvil, además de ser reutilizable para otros componentes (como se ve en ColGraphicBox, al ampliar a la vista de ordenador), recibe los datos de información y opciones mediante un array que bien podría adquirirse mediante una request a una base de datos de cada cliente. Además, tiene la opción de elegir si se guiere ver las Transacciones *mensuales* o *diarias* del año anterior. Al darle click al botón, se ejecuta una función que cambia los valores que debe imprimir a los que el usuario pida. Por ejemplo, al abrir la app aparecerán por defecto los datos mensuales en el gráfico, pero al darle click a *Daily*, se sobreescribirá este gráfico con los datos obtenidos del array con información de lo diario.


Lo mejor es que los ingenieros podrán "desarrollar nuevas características sin necesidad de volver a escribir el código existente". Así mismo, React permite interactuar con otras bibliotecas y frameworks para enriquecer los proyectos.

### Justificación de empleo de herramientas

**React-bootstrap**
Se ha empleado esta librería, ya que al emplear el grupo Container, Col y Row, se puede conseguir una apariencia responsiva de manera estructurada, empleando también sus breakpoints. 
Como plan de cara a futuro, se podría manipular las clases predefinidas de React-bootstrap en su archivo de sass para poder tener mejor control sobre el comportamiento de cada elemento y clase. 

**Chart.js**
Para imprimir los datos en la pantalla, se ha empleado la librería Chart.js (3.8.0), que es compatible con la versión empleada de react. 

**React.js**
Se ha empleado React.js por contar con conocimientos que me permiten avanzar en el proyecto y poner en práctica la empleabilidad de los gráficos. Se puede utilizar perfectamente React.js por el hecho de que permite crear interfaces de usuario interactivas, actualizar y renderiza de forma eficiente los componentes cuando se cambian los datos y su empleo es bastante ágil para las pruebas de proyectos simples en sus primeras fases. Además, con React.js se puede trabajar sobre la versión móvil y de escritorio a la par e ir adaptando las funcionalidades y el diseño a los requerimientos de la app para un mejor uso por parte del usuario. 

### Licencia

[MIT](https://choosealicense.com/licenses/mit/) License © 2022 [Hanna-Klaudia Petrakova](https://github.com/hannakpa)
