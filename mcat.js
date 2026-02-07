const timerEl = document.getElementById("timer");
const passageTitleEl = document.querySelector("#passage h2");
const passageBodyEl = document.getElementById("passageBody");
const questionNumberEl = document.getElementById("questionNumber");
const questionPromptEl = document.getElementById("questionPrompt");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("nextBtn");
const mainContainer = document.getElementById("mainContainer");
const footerBar = document.getElementById("footerBar");
const scoreReport = document.getElementById("scoreReport");

const sections = [
  {
  title: "Passage 1 (Questions 1-67)",
    passage: [
      "Hugh has a habit of turning feelings into features. When life hands him something tender--stress, love, uncertainty--he doesn't journal about it in a leather notebook. He quietly opens a repo, names it something mildly chaotic, and starts building.",
      "In most rooms, Hugh is \"the technical one,\" which usually translates to \"the person who gets volunteered to fix things.\" It's not that he minds. In fact, he enjoys the moment when a problem goes from foggy to solvable. A login flow that loops? A calendar that won't render items for the right month? Infinite scroll that stutters like it's remembering something painful? Hugh will patiently rearrange state, re-check assumptions, and make it work--often while explaining the reasoning so clearly that other people feel smarter just standing near him.",
      "He also carries a particular tenderness for healthcare, even when the work is difficult. The systems are complex, the standards are strict, and the people using them are tired. Hugh still leans in. He builds tools meant to soften sharp days: an AI coach that doesn't judge, a scheduling experience that doesn't punish forgetfulness, a chat interface that feels calm instead of clinical. It's not that he believes technology can replace care. It's that he believes good design can protect it.",
      "At home, however, Hugh is confronted by a different kind of high-stakes deployment: romance. He approaches it like a product launch, except the stakeholder is his wife, the timeline is immovable, and the acceptance criteria are invisible. He could buy something expensive, but that feels like outsourcing the point. Instead, he does what he always does when he cares: he builds. A playful website. A silly passage. A question with four answers, one of which is obviously correct--but only if you know him.",
      "Because underneath the engineering and the ambition is a simpler truth: Hugh doesn't just want to say \"I love you.\" He wants to make an experience that proves he was paying attention.",
    ],
    questions: [
      {
        prompt:
          "The passage most strongly suggests that Hugh views building things as a way to:",
        choices: [
          "Avoid emotional vulnerability by staying busy",
          "Translate care into something practical and personal",
          "Impress others with technical sophistication",
          "Replace human support with automation",
        ],
      },
      {
        prompt: "The author's attitude toward Hugh is best described as:",
        choices: [
          "Skeptical and critical",
          "Detached and analytical",
          "Warmly admiring, with gentle humor",
          "Bitterly ironic",
        ],
      },
      {
        prompt:
          "In the context of the passage, \"turning feelings into features\" primarily implies that Hugh:",
        choices: [
          "Treats relationships like transactions",
          "Uses technology to escape responsibility",
          "Expresses affection through thoughtful creation",
          "Prioritizes work over intimacy",
        ],
      },
      {
        prompt: "Which option best captures the main idea of the passage?",
        choices: [
          "Technical people struggle to communicate emotions directly",
          "Hugh uses building as a consistent expression of attention and care",
          "Healthcare is too complex for most designers to improve",
          "Romance requires expensive gestures to be meaningful",
        ],
      },
    ],
  },
  {
    title: "Passage 2 (Questions 1-59)",
    passage: [
      "People like to pretend that romance is spontaneous--an unexpected bouquet, a dramatic speech, a movie-perfect glance across the room. But for a certain kind of person, spontaneity is mostly what happens when a plan survives first contact with reality. For him, love is less like fireworks and more like systems design: not cold or mechanical, but intentional. If something matters, you build it so it works when it counts.",
      "This is not because he is incapable of simple gestures. He can do simple. He can say \"I love you,\" and he means it. The problem is that his mind has a habit of continuing after the sentence ends. \"I love you\" becomes: How do I make her feel it on a Tuesday? How do I protect her energy when she's exhausted? How do I make one small moment easier? His affection, in other words, keeps trying to become useful.",
      "That habit shows up everywhere. When a project breaks, he doesn't curse the universe for being unfair. He narrows the problem. He checks what changed. He looks for what the system is actually doing, not what everyone assumed it was doing. This is not the personality of someone who enjoys chaos; it's the personality of someone who wants people to trust the world a little more. A good experience--whether it's an app screen, a calendar, or a conversation--should not punish the user for being human.",
      "Of course, romance is a user experience with unusually high standards and unusually low tolerance for bugs. There is no error log for \"I felt unseen today.\" There is no unit test for \"this joke landed.\" And the stakeholder is someone he adores, which raises the stakes in a way that even the most urgent work deadline never can. So he does what he always does under pressure: he focuses.",
      "This is why, when Valentine's Day approaches, he doesn't search for the \"best gift.\" He searches for the most accurate one. His wife is studying medicine, training her attention on passages dense with meaning and questions designed to trick careless readers. He knows that world well enough to borrow its format and mischief. So he writes a passage that sounds serious but isn't. He hides his feelings inside the structure--not to avoid them, but to deliver them safely, the way he delivers everything important: with care, with craft, and with a tiny bit of humor that says, I know you, and I was paying attention.",
    ],
    questions: [
      {
        prompt:
          "The passage implies that the author views \"systems design\" as most similar to romance in which way?",
        choices: [
          "Both demand perfection and punish mistakes immediately",
          "Both are primarily about appearances and first impressions",
          "Both require intentional choices that support someone over time",
          "Both work best when emotions are kept out of decision-making",
        ],
      },
      {
        prompt:
          "In the passage, the phrase \"His affection... keeps trying to become useful\" most nearly means that he:",
        choices: [
          "Uses practical actions to express care",
          "Believes feelings are unreliable and should be replaced",
          "Thinks gifts matter more than words",
          "Avoids emotional conversations by working",
        ],
      },
      {
        prompt: "Which statement would the author most likely agree with?",
        choices: [
          "The best romantic gestures are the ones that are expensive",
          "Thoughtfulness can be communicated through the design of an experience",
          "Romance is fundamentally unpredictable and cannot be planned",
          "Humor weakens sincerity by making it less serious",
        ],
      },
      {
        prompt: "The primary purpose of the final paragraph is to:",
        choices: [
          "Argue that medical training is harmful to relationships",
          "Explain why the wife dislikes traditional Valentine's gifts",
          "Show how the husband adapts what he knows about her into a personal gesture",
          "Suggest that love is best expressed indirectly rather than openly",
        ],
      },
    ],
  },
];

const answers = sections.map((section) => Array(section.questions.length).fill(null));
let sectionIndex = 0;
let questionIndex = 0;

let seconds = 1 * 3600 + 26 * 60 + 33;
setInterval(() => {
  if (seconds > 0) seconds -= 1;
  const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  timerEl.textContent = `${hours}:${minutes}:${secs}`;
}, 1000);

function renderPassage() {
  const section = sections[sectionIndex];
  passageTitleEl.textContent = section.title;
  passageBodyEl.innerHTML = "";
  section.passage.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    passageBodyEl.appendChild(p);
  });
}

function renderQuestion() {
  const section = sections[sectionIndex];
  const q = section.questions[questionIndex];
  questionNumberEl.textContent = `Question ${questionIndex + 1}`;
  questionPromptEl.textContent = q.prompt;

  choicesEl.innerHTML = "";
  q.choices.forEach((text, i) => {
    const letter = String.fromCharCode(65 + i);
    const label = document.createElement("label");
    label.className = "choice";
    label.innerHTML = `
      <input type="radio" name="q${sectionIndex}-${questionIndex}" />
      <span><strong>${letter}.</strong> ${text}</span>
    `;

    if (answers[sectionIndex][questionIndex] === i) {
      label.classList.add("selected");
      const radio = label.querySelector("input");
      if (radio) radio.checked = true;
    }

    label.addEventListener("click", () => {
      answers[sectionIndex][questionIndex] = i;
      renderQuestion();
    });
    choicesEl.appendChild(label);
  });

  updateNextState();
}

function updateNextState() {
  const section = sections[sectionIndex];
  const isLastQuestion = questionIndex === section.questions.length - 1;
  const isLastSection = sectionIndex === sections.length - 1;

  if (isLastSection && isLastQuestion) {
    nextBtn.textContent = "Finish";
  } else if (!isLastSection && isLastQuestion) {
    nextBtn.textContent = "Next Passage";
  } else {
    nextBtn.textContent = "Next";
  }
}

nextBtn.addEventListener("click", () => {
  const currentAnswer = answers[sectionIndex][questionIndex];
  if (currentAnswer === null) {
    alert("Select an answer before continuing.");
    return;
  }

  const section = sections[sectionIndex];
  const isLastQuestion = questionIndex === section.questions.length - 1;
  const isLastSection = sectionIndex === sections.length - 1;

  if (!isLastQuestion) {
    questionIndex += 1;
    renderQuestion();
    return;
  }

  if (!section.questions.every((_, idx) => answers[sectionIndex][idx] !== null)) {
    alert("Answer all questions in this passage to continue.");
    return;
  }

  if (!isLastSection) {
    sectionIndex += 1;
    questionIndex = 0;
    renderPassage();
    renderQuestion();
    return;
  }

  mainContainer.classList.add("hidden");
  footerBar.classList.add("hidden");
  scoreReport.classList.remove("hidden");
});

renderPassage();
renderQuestion();
