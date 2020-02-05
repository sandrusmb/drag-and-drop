# Drag and drop

![Demo](https://github.com/sandrusmb/drag-and-drop/blob/master/images/dragAndDropRRSS.gif)

Con lo que nos gusta Trello a las adalabers, me he propuesto aprender a programar un tablero en el que las tareas se puedan arrastrar y soltar por las diferentes listas.

Para ello, he seguido un [tutorial](https://www.youtube.com/watch?v=tZ45HZAkbLc) de Tyler Potts.

## Retos

- Utilizar el atributo [draggable](https://developer.mozilla.org/es/docs/Web/HTML/Atributos_Globales/draggable) de HTML que indica si un elemento puede ser arrastrado
- Usar el HTML [Drag and Drop API](https://www.w3schools.com/html/html5_draganddrop.asp)

## Descubrimientos y/o repaso de conceptos

- La propiedad de CSS [flex-flow](https://developer.mozilla.org/es/docs/Web/CSS/flex-flow), un atajo para las propiedades individuales flex-direction y flex-wrap
- La propiedad [flex](https://developer.mozilla.org/es/docs/Web/CSS/flex) de CSS, una propiedad resumida que indica la capacidad de un elemento flexible para alterar sus dimensiones y llenar el espacio disponible
- La propiedad [overflow-x: scroll](https://developer.mozilla.org/es/docs/Web/CSS/overflow)
- La propiedad de CSS [transition](https://css-tricks.com/almanac/properties/t/transition/)
- Los [eventos de drag and drop](https://www.desarrollolibre.net/blog/html/el-drag-and-drop-en-html5-javascript#.XjrjjRNKjpI) como [dragstart](https://developer.mozilla.org/en-US/docs/Web/API/Document/dragstart_event), dragend, dragover, dragenter,dragleave y drop >> https://developer.mozilla.org/es/docs/DragDrop/Drag_and_Drop
- El método [setTimeout()](https://developer.mozilla.org/es/docs/Web/API/WindowTimers/setTimeout)
- Las propiedades del DOM [this.style.display](https://www.w3schools.com/jsref/prop_style_display.asp) o this.style.backgroundColor...
- Guardar los datos en [localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)

## Guía de inicio rápido

Necesitarás instalar [Node.js](https://nodejs.org/) y [Gulp](https://gulpjs.com) para trabajar con este Starter Kit, luego:

1. Descarga o clona el repositorio
2. Instala las dependencias locales con `npm install`
3. Arranca el kit con `gulp`

## Webgrafía

https://developer.mozilla.org/es/docs/DragDrop/Drag_and_Drop

https://www.desarrollolibre.net/blog/html/el-drag-and-drop-en-html5-javascript#.XjrjjRNKjpI

https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
