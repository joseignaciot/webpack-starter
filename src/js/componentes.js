import '../css/componentes.css';

export const saludar = (nombre) => {
    console.log('Creando la etiqueta h1');
    const h1 = document.createElement ('h1');
    h1.innerText = (`hola, muy bien, que tal ${ nombre }`);
    document.body.append (h1);
}