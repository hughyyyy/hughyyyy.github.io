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
      {
    title: "Passage 3 (Enough jokes, this one is serious, Questions 1-19)",
    passage: [
      "Accounts of intimate commitment often privilege dramatic origins: the decisive confession, the improbable coincidence, the moment in which uncertainty is resolved by a single, clarifying act. Yet in many relationships the decisive element is less an event than a pattern of attention, rehearsed over time. A partnership may be initiated by a scene fit for narrative-an unexpected meeting, a memorable place-but it is sustained by the repeated choice to recognize what the other person is becoming, even when that becoming is stressful, inconvenient, or unglamorous.",
      "Hugh and Yvonne's story is frequently misdescribed as though it were authored by coincidence alone. They first met in their first year at the University of Waterloo. The most salient fact, at least to Hugh, was not romantic but cultural: Yvonne was also Hong Kongnese. That recognition did not immediately bloom into a relationship; at the time, she was with someone else, and the moment passed into the category of encounters one remembers without knowing why. Three years later, in 2019, they met again in an elevator in Waterloo-an encounter too brief to count as reconciliation and too charged to count as ordinary. What followed was not a sudden transformation but something subtler: they began spending time together. In retrospect, that early period reads less like a 'restart' than a first real beginning, because it introduced a shared rhythm rather than a dramatic turning point.",
      "If the early chapters suggest gradualness, the middle chapters underscore discontinuity. They broke up in 2021, which Hugh describes in the compressed language couples often adopt when the real story is longer than the sentence: 'fundamental issues' on both side. What matters for an outside observer is not the content of the issues-about which the parties may disagree-but the role the breakup plays in the narrative. It does not function as evidence that the relationship lacked seriousness; rather, it tests whether seriousness is expressed by persistence at any cost or by the willingness to pause when continuation would be careless. The mere fact of separation does not settle the question. The subsequent decisions do.",
      "Those decisions accumulated quickly once geography shifted. Hugh moved to Seattle in August 2022, and by October Yvonne came to Seattle for a conference while still working in San Francisco. Their second sustained season together began there-not as a return to an earlier simplicity but as a deliberate choice made under new conditions. By April 2023 she moved to Seattle, and they lived in Bellevue through August 2025. The Bellevue years were outwardly uneventful: time at home, television after long days, cooking, occasional coffee-shop visits, the small choreography of grocery runs and shared errands. Yet such 'uneventfulness' can be misunderstood. For a couple that had already endured discontinuity, calm is not the absence of story but a kind of achievement: it is the creation of a daily life that does not constantly threaten to fall apart.",
      "The calm, however, was not static; it was preparatory. Yvonne was studying with the long horizon in mind, working toward admission to medical school. In August 2025 she began at UCLA, and the relationship entered a more asymmetrical phase. Medical education does not merely increase workload; it changes how time feels, compressing it into tasks that are never fully complete. Yvonne, in her first year, often approaches the program as an anxious grinder: eighty-hour weeks of studying, research, clinics, and shadowing, accompanied by recurring episodes of verbalized catastrophe'I am gonna fail'repeated less as a prediction than as a method of coping with pressure by naming it.",
      "It is in this phase that Hugh's mode of care becomes legible. He does not describe himself as someone who invents 'little systems' for domestic life; he describes himself as someone who pays attention to detail, and supplies constant support. The distinction matters. His care is not the romanticized spontaneity of grand gestures but the steadier practice of being present when the other person's confidence collapses. When Yvonne spirals, Hugh responds with physical reassurance-hugs-and with contradiction delivered gently but insistently: it is not true; you are going to do good. This method is neither purely emotional nor purely practical. It is an attempt to function as a stable surface against which the other person can recalibrate.",
      "In November 2025, shortly before Hugh's new job in Los Angeles began in December, they eloped on Point Dume Beach in Malibu-ocean in front of them, the ceremony stripped down to what could not be delegated. The timing is revealing: not a wedding after everything was settled, but a wedding amid transition. Their move from Seattle to Los Angeles was not merely a change in weather-though both insist they love LA's weather, its sense of a new chapter-but a change in what their relationship had to contain: ambition, exhaustion, new routines, and the psychological demands of a first-year medical student aiming, at least tentatively, toward dermatology.",
      "The temptation, when describing such a couple, is to praise effort as though effort were identical to care. But effort can be misdirected. One may support another person in ways that are convenient to provide rather than needed to receive. For that reason, the most useful measure of care is not intensity but accuracy: the degree to which one's actions fit the other person's real pressures, not the pressures imagined from a distance. In Hugh's case, even the decision to borrow the formal textures of Yvonne's academic life for a Valentine gesture can be read as an attempt at such accuracy: the appropriation of Yvonne's daily form of stress into a form of play, offered not as evaluation but as recognition. To call her 'Bubu' within that borrowed structure would be to perform the same conversion on a smaller scale: turning a high-stakes format into an intimate language. Yet the success of the gesture would still depend on whether Yvonne experiences it as being known rather than merely being impressed.",
    ],
    questions: [
      {
        prompt: "The primary purpose of the opening paragraph is to:",
        choices: [
          "Argue that dramatic romantic events are deceptive because they are rarely sincere",
          "Establish a framework distinguishing event-based narratives from sustained attentiveness",
          "Suggest that most relationships fail because they lack memorable origins",
          "Introduce the claim that coincidence is the dominant cause of long-term commitment",
        ],
      },
      {
        prompt: "The elevator meeting in 2019 is presented primarily as:",
        choices: [
          "The definitive moment of reconciliation after a prolonged separation",
          "A symbolic 'reset' that restores the relationship to its original state",
          "A brief encounter that initiates a shared rhythm rather than a sudden transformation",
          "An example of coincidence replacing personal agency in romantic decision-making",
        ],
      },
      {
        prompt: "In context, the author's treatment of the 2021 breakup most strongly implies that the breakup:",
        choices: [
          "Proves the relationship lacked seriousness until external circumstances improved",
          "Demonstrates that incompatibility can be resolved primarily through persistence",
          "Functions as a test of whether 'seriousness' includes the capacity to pause responsibly",
          "Shows that fundamental issues are irrelevant once a couple shares enough time together",
        ],
      },
      {
        prompt: "The Bellevue years are described as 'uneventful' chiefly to emphasize that they:",
        choices: [
          "Represented stagnation that was later corrected by moving to Los Angeles",
          "Were falsely comforting because they concealed unresolved conflict",
          "Were an achieved stability that mattered precisely because of prior discontinuity",
          "Were meaningful only insofar as they helped Yvonne gain admission to UCLA",
        ],
      },
      {
        prompt: "The phrase 'verbalized catastrophe' (fifth paragraph) most nearly suggests that Yvonne's repeated statement ('I am gonna fail') is:",
        choices: [
          "A literal assessment grounded in objective evidence of poor performance",
          "A performative expression that externalizes pressure rather than predicts an outcome",
          "An attempt to manipulate Hugh into providing reassurance on demand",
          "A sign that she fundamentally dislikes medicine and regrets her career choice",
        ],
      },
      {
        prompt: "Which of the following best captures the author's depiction of Hugh's care during Yvonne's stress episodes?",
        choices: [
          "It is primarily logistical, focusing on reducing her workload through planning",
          "It is primarily evaluative, focusing on correcting her study strategies",
          "It is stabilizing, combining physical reassurance with gentle contradiction of her fears",
          "It is distancing, aiming to let her self-regulate without interference",
        ],
      },
      {
        prompt: "The Malibu elopement is used mainly to illustrate that the couple's commitment:",
        choices: [
          "Was postponed until professional uncertainties were eliminated",
          "Occurred as a deliberate choice within transition rather than after stability was achieved",
          "Was motivated chiefly by a desire to match Los Angeles cultural expectations",
          "Reflected a preference for isolation over community and long-term planning",
        ],
      },
      {
        prompt: "The final paragraph most strongly suggests that the 'exam-style Valentine' gesture would be judged successful if it:",
        choices: [
          "Demonstrates sufficient effort to compensate for Yvonne's workload",
          "Impresses Yvonne with Hugh's ability to mimic academic conventions",
          "Is experienced by Yvonne as recognition that accurately fits her real pressures",
          "Provides Yvonne an opportunity to practice test-taking under relaxed conditions",
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


