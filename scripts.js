/* CSSOM
    getComputedStyle(element) -> devuelve un objeto con todas las propiedades css despues de que el navegador calculó

        ej: desde console del navegador
            getComputedStyle($0).color
            -> devuelve "rgb(0, 128, 0)"

        ej:
            getComputedStyle($0).getPropertyValue('--color-text')
            -> devuelve "green"
    para editar:
        element.style.setProperty('--variable', 'newvalue')
    
    para recuperar elementos del (:root{})
        document.documentElement

        ej:
        */
    //const rootStyles = getComputedStyle(document.documentElement);
    //console.log(rootStyles);

/*Scroll

const rootScrollStyle = document.documentElement.style
const h1 = document.documentElement.scrollHeight;
const h2 = document.documentElement.clientHeight;
console.log(h1-h2);
//2895 -> valor maximo de scroll

const scrollUnit = (h1-h2) / 100;
addEventListener('scroll', () => {
rootScrollStyle.setProperty('--width', + Math.round(scrollY / scrollUnit));
    console.log(Math.round(scrollY / scrollUnit));
});
*/

//Color Selector

const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const rootStyles = document.documentElement.style;

const changeColorRed = e => {
    rootStyles.setProperty('--red', e.target.value);
}

const changeColorGreen = e => {
    rootStyles.setProperty('--green', e.target.value);
}

const changeColorBlue = e => {
    rootStyles.setProperty('--blue', e.target.value);
}

red.addEventListener('change', e => {
    changeColorRed(e);
});

red.addEventListener('mousemove', e => {
    changeColorRed(e);
});

green.addEventListener('change', e => {
    changeColorGreen(e);
});

green.addEventListener('mousemove', e => {
    changeColorGreen(e);
});

blue.addEventListener('change', e => {
    changeColorBlue(e);
});

blue.addEventListener('mousemove', e => {
    changeColorBlue(e);
});