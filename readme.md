<div align="center">
<img src="https://i.imgur.com/phR8JsG.png" alt="Mercado Libre" />
 <h1>Challenge Mercado libre
  
 <small>Por Emiliano Alfonso</small>
 </h1>
</div>

<p>Este es un desafío de front-end enviado por Mercado Libre, hecho con React para el front y Express para las rutas del back.</p>

<br />

## 💻 ¿Está deployado?

Por problemas con Vercel (que lo detectaba como una página de phishing), tuve que quitar la versión deployada.

<br />

## 🤔 ¿Cómo iniciar el proyecto localmente?

Primero, clonarlo con:

```bash
git clone https://github.com/Aglowkeys/challenge-meli.git
```

Una vez clonado, abrir el directorio raiz y ejecutar `cd api` para entrar al directorio del back. Crear un archivo .env con la siguiente variable: `PORT = 3001`. Finalmente, ejecutar `npm install` y una vez que termine, `npm run dev` para iniciar el servidor.

Realizar lo mismo para el directorio client: desde la carpeta raiz ejecutar `cd client`, crear un .env y poner la siguiente variable: `REACT_APP_SERVER_URL = http://localhost:3001`. Para iniciar el front, ejecutar primero `npm install` y después `npm start`.

<br />

## 🛒 ¿Cuál era el objetivo de este challenge?

La idea era crear una página sencilla de front en la cual se pudiera buscar un producto, obtener una vista con los resultados y poder cliquear en algún producto para ver más detalles. Además, había que configurar las rutas del servidor para poder hacer las peticiones correspondientes y devolver la información con la estructura que se solicitaba.

<br />

## 🧱 ¿Qué tecnologías se usaron?

Para el back: express y axios.
Para el front: react, sass, axios y react-testing-library con jest para los test.

<br />

## 👨‍💻 ¿Qué tiene de interesante este código?

Intenté seguir las mejores prácticas, modularizando y reutilizando todo lo más posible. Mi objetivo era tener un código prolijo pero eficiente y que manejara los errores. Se testearon todos los componentes con pruebas unitarias, se utilizó una instancia de axios para tener una URL base, se añadieron prop-types como validación y useReducer para los estados más complejos (los de las páginas `Details` y `Results`). Además, se implementaron diversas vistas extra: la página de inicio y dos de errores: para 404 y para errores generales.

Se prestó especial atención a la accesibilidad de la página y al diseño en general, conteniendo los aria-label apropiados, permitiendo el desplazamiento con teclado y respetando el diseño provisto por la compañía, sin descuidar el responsive y adaptando los tamaños para conseguir la mejor visualización.
