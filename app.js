// Lógica del juego. Depende de la variable global QUESTIONS (questions.js).
(function () {
  "use strict";

  const QUESTIONS_PER_GAME = 10;
  const STORAGE_KEY = "trivia-ia-mejor-puntaje";

  const $ = (id) => document.getElementById(id);

  const screens = {
    start: $("screen-start"),
    quiz: $("screen-quiz"),
    end: $("screen-end")
  };

  let gameQuestions = [];
  let current = 0;
  let score = 0;

  // Mezcla Fisher-Yates sobre una copia del arreglo.
  function shuffle(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // localStorage puede fallar (modo privado, file:// en algunos navegadores).
  function getBest() {
    try {
      const value = parseInt(localStorage.getItem(STORAGE_KEY), 10);
      return Number.isNaN(value) ? null : value;
    } catch (e) {
      return null;
    }
  }

  function setBest(value) {
    try {
      localStorage.setItem(STORAGE_KEY, String(value));
    } catch (e) {
      // Sin persistencia: se ignora.
    }
  }

  function renderBest() {
    const best = getBest();
    const text = best === null ? "—" : best + " / " + QUESTIONS_PER_GAME;
    $("best-start").textContent = text;
    $("best-end").textContent = text;
  }

  function showScreen(name) {
    Object.keys(screens).forEach((key) => {
      screens[key].hidden = key !== name;
    });
  }

  // Prepara las preguntas de la partida con las opciones mezcladas,
  // recalculando el índice de la respuesta correcta.
  function buildGame() {
    const total = Math.min(QUESTIONS_PER_GAME, QUESTIONS.length);
    return shuffle(QUESTIONS).slice(0, total).map((q) => {
      const order = shuffle(q.options.map((_, i) => i));
      return {
        question: q.question,
        explanation: q.explanation,
        difficulty: q.difficulty,
        options: order.map((i) => q.options[i]),
        answer: order.indexOf(q.answer)
      };
    });
  }

  function startGame() {
    gameQuestions = buildGame();
    current = 0;
    score = 0;
    showScreen("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    const q = gameQuestions[current];
    const total = gameQuestions.length;

    $("progress-text").textContent = "Pregunta " + (current + 1) + " de " + total;
    $("progress-bar").style.width = (current / total) * 100 + "%";
    $("score").textContent = score;
    $("difficulty").textContent = q.difficulty || "";
    $("difficulty").hidden = !q.difficulty;
    $("question-text").textContent = q.question;

    const optionsEl = $("options");
    optionsEl.innerHTML = "";
    q.options.forEach((text, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option";
      btn.textContent = text;
      btn.addEventListener("click", () => selectAnswer(i));
      optionsEl.appendChild(btn);
    });

    $("feedback").hidden = true;
    $("btn-next").hidden = true;
    optionsEl.firstChild.focus({ preventScroll: true });
  }

  function selectAnswer(index) {
    const q = gameQuestions[current];
    const buttons = $("options").querySelectorAll(".option");
    const isCorrect = index === q.answer;

    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.answer) btn.classList.add("correct");
      else if (i === index) btn.classList.add("wrong");
    });

    if (isCorrect) score++;
    $("score").textContent = score;

    const feedback = $("feedback");
    feedback.className = "feedback " + (isCorrect ? "correct" : "wrong");
    $("feedback-title").textContent = isCorrect
      ? "¡Correcto!"
      : "Incorrecto. La respuesta era: " + q.options[q.answer];
    $("feedback-text").textContent = q.explanation;
    feedback.hidden = false;

    const next = $("btn-next");
    next.textContent = current === gameQuestions.length - 1 ? "Ver resultado" : "Siguiente";
    next.hidden = false;
    next.focus({ preventScroll: true });
  }

  function nextQuestion() {
    current++;
    if (current < gameQuestions.length) {
      renderQuestion();
    } else {
      endGame();
    }
  }

  function finalMessage(ratio) {
    if (ratio === 1) return "¡Perfecto! Sos un experto en IA.";
    if (ratio >= 0.8) return "¡Excelente! Sabés mucho de inteligencia artificial.";
    if (ratio >= 0.5) return "¡Bien! Tenés buena base, pero hay para aprender.";
    return "Hay mucho por descubrir. ¡Probá de nuevo!";
  }

  function endGame() {
    const total = gameQuestions.length;
    const best = getBest();
    const isRecord = best === null || score > best;
    if (isRecord) setBest(score);

    $("final-score").textContent = score;
    $("final-total").textContent = total;
    $("final-message").textContent = finalMessage(score / total);
    $("new-record").hidden = !(isRecord && score > 0);
    renderBest();
    showScreen("end");
    $("btn-restart").focus({ preventScroll: true });
  }

  $("btn-start").addEventListener("click", startGame);
  $("btn-next").addEventListener("click", nextQuestion);
  $("btn-restart").addEventListener("click", startGame);

  renderBest();
})();
