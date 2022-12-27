# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Componentes
En los componentes se encuentra la estructuras de la pagina siendo cada una de ellas la parte funcional y dinamica. Cada componente renderiza una parte de la pagina dependiendo lo que el usuario interactue.
- El componente 'home' renderiza la bienvenida de la pagina, es el primer vistaso cuando se ingresa a esta.
- El componente 'Product' renderiza las cartas con su información de los productos.
- El componente 'Header' renderiza el logo y el carrito de compras de la pagina.
- El componente 'Buttons' renderiza los botones de navegación o cambio de sección de los productos.
- El componente 'CardProducts' llama de forma dinamica la información de los productos y lo renderiza el componente 'Products'
- El componente 'Footer' renderiza el copy y metodos de pago.

![image](https://user-images.githubusercontent.com/114447994/209621867-7f42f364-6167-4c1e-91b7-a39b0c02e8cd.png)

Respectivamente cada componente tiene su hoja de estilos 

# Navegación
Para lograr la navegación se creo la carpeta 'pages' el cual cada una de ellas permite el cambio de pagina para poder renderizar los componentes. Por defecto se establecio como pagina principal el componente que renderiza la bienvenida.
La navegación se establecio como:
- / => por defecto
- /products => principal 
- /cart => carrito
- /finish => finalización vinculación whatsapp

![image](https://user-images.githubusercontent.com/114447994/209625094-932768fc-f9d9-4103-9c5e-bb7e4cca644d.png)

# Productos
La información de cada uno de los productos se encuentran dentro de la carpeta 'src'. Para lograr que la pagina fuera dinamica se especificaron los productos dentro de un archivo JSON 'infoProducts.json'

![image](https://user-images.githubusercontent.com/114447994/209625999-5c74b7e7-e4c8-4f40-a58c-3a842b48e640.png)

# imagenes
las imagenes utilizadas como logo, productos, metodos de pago, carrito de compras, etc.. de la pagina web se encentran en la carpeta 'img' en formato .png 

![image](https://user-images.githubusercontent.com/114447994/209626761-c63535aa-bcca-4529-8077-1379ec8ee993.png)

# fuentes
fuentes utilizadas estan dentro de la carpeta 'store' en la carpeta 'fonts'

![image](https://user-images.githubusercontent.com/114447994/209626970-cc84a6cf-f957-4a2e-b56e-a0473c5fb7a2.png)
