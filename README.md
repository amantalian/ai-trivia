# Trivia IA

Juego de trivia en el navegador sobre inteligencia artificial: historia, conceptos, modelos, empresas y ética.

Cada partida tiene **10 preguntas al azar** de opción múltiple (4 opciones mezcladas). Después de cada respuesta ves si acertaste y una breve explicación. Al final se muestra tu puntaje y se guarda el mejor resultado en el navegador (`localStorage`).

Es un sitio 100 % estático: HTML, CSS y JavaScript puro, sin frameworks, sin dependencias externas y sin paso de compilación.

## Estructura

| Archivo        | Contenido                                   |
| -------------- | ------------------------------------------- |
| `index.html`   | Estructura de las pantallas del juego       |
| `style.css`    | Estilos (diseño responsive, apto para celular) |
| `app.js`       | Lógica del juego                            |
| `questions.js` | Banco de preguntas                          |

## Cómo jugar en tu compu

Opción 1: abrí `index.html` directamente en el navegador (doble clic). Funciona vía `file://` porque las preguntas están en un archivo `.js`, no en un JSON.

Opción 2: levantá un servidor local desde la carpeta del proyecto, por ejemplo:

```bash
python3 -m http.server 8000
```

y entrá a <http://localhost:8000>.

## Publicar en GitHub Pages

El proyecto está pensado para publicarse en GitHub Pages tal cual:

1. Subí el repositorio a GitHub.
2. En **Settings → Pages**, elegí **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
3. En unos minutos el juego queda disponible en `https://<tu-usuario>.github.io/<nombre-del-repo>/`.

## Agregar preguntas

Editá `questions.js` y sumá objetos con este formato:

```js
{
  question: "Texto de la pregunta",
  options: ["Opción A", "Opción B", "Opción C", "Opción D"],
  answer: 0, // índice (0-3) de la opción correcta
  explanation: "Explicación breve de una línea.",
  difficulty: "fácil" // "fácil", "media" o "difícil"
}
```

No hace falta preocuparse por el orden de las opciones: el juego las mezcla en cada partida.
