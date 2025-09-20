# 🎁 Amigo Secreto – Lógica en JavaScript

Este proyecto implementa la **lógica de programación** para un juego de “Amigo Secreto”.  
El **HTML, CSS y diseño visual** fueron previamente proporcionados: el trabajo aquí consiste en la **programación en JavaScript (`app.js`)** que permite al usuario:

- Ingresar nombres de amigos.
- Almacenar los nombres en una lista.
- Seleccionar aleatoriamente un “amigo secreto”.

---

## 🛠️ Instalación y Requisitos

### 1️⃣ Prerrequisitos
- **Navegador web moderno** (Chrome, Firefox, Edge…).
- **Editor de texto** (recomendado [Visual Studio Code](https://code.visualstudio.com/)) si deseas modificar el código.

No se necesitan librerías externas ni frameworks: **todo es JavaScript puro (vanilla JS)**.

---

## 📂 Estructura del Proyecto


---

## 🚀 Cómo Ejecutar el Proyecto

1. **Clonar o descargar** el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/nombre-repo.git
o descargar el ZIP desde GitHub y descomprimirlo.

## Abrir el archivo `index.html` en tu navegador:

- Doble clic en `index.html`, o  
- Abrirlo desde el editor con **Live Server** (opcional).

## En la página:

- Escribe un nombre en el campo de texto.  
- Haz clic en **“Añadir”** para agregarlo a la lista.  
- Una vez que haya varios nombres, haz clic en **“Sortea amigo”** para que el programa elija uno al azar.

---

## ⚡ Lógica implementada (`app.js`)

- **Agregar nombres:** Se valida que el campo no esté vacío antes de insertar en el arreglo global `amigos`.  
- **Mostrar lista:** La función `actualizarLista()` recorre el arreglo y muestra los nombres en una lista `<ul>`.  
- **Sorteo aleatorio:** `sorteaAmigo()` elige un índice al azar usando `Math.random()` y muestra el resultado en la página.  
- **Limpieza de campos:** `limpiarCaja()` borra el input luego de cada inserción.

---

## 🧩 Posibles Problemas y Soluciones

| Problema | Causa probable | Solución |
|----------|---------------|---------|
| No se ve la lista al añadir nombres | `id` de la lista en `index.html` no coincide con el usado en `app.js`. | Revisar que el elemento en HTML tenga `id="listaAmigos"`. |
| No se elige amigo secreto | No se ingresaron nombres antes de sortear. | Asegúrate de agregar al menos un nombre antes de pulsar **“Sortea amigo”**. |
| Cambios en HTML/CSS no se reflejan | Caché del navegador. | Refresca con **Ctrl + F5** o limpia la caché. |

---

## 📝 Notas de Desarrollo

- El archivo `app.js` fue diseñado para funcionar con el HTML y CSS existentes, **sin dependencias externas**.  
- El código está escrito en **JavaScript ES6**, por lo que funciona en navegadores modernos sin transpilación.

---

✍️ **Autor:** Sebastian Diaz  
💡 Proyecto académico / práctico de lógica en JavaScript.

