// Edit this array to control the cards shown in the app.
// For image paths, you can use local files like "images/person1.jpg" or full URLs.
const profiles = [
  {
    name: "Ava",
    age: 25,
    description:
      "Coffee fan, hiking on weekends, and always looking for new playlists.",
    image: "https://hughyyyy.github.io/111.png?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Bva",
    age: 27,
    description:
      "Part-time photographer, full-time dog person, and street taco expert.",
    image: "https://hughyyyy.github.io/222.png?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cva",
    age: 24,
    description:
      "Sunset runner, sci-fi reader, and always planning the next road trip.",
    image: "https://hughyyyy.github.io/333.png?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dva",
    age: 23,
    description: "Avid traveler and foodie who loves trying new cuisines.",
    image: "https://hughyyyy.github.io/444.png?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Eva",
    age: 26,
    description: "Loves hiking and exploring new coffee shops.",
    image: "https://hughyyyy.github.io/555.png?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Fva",
    age: 25,
    description: "Loves photography and outdoor adventures.",
    image: "https://hughyyyy.github.io/666.png?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Gva",
    age: 24,
    description: "Loves hiking and exploring new coffee shops.",
    image: "https://hughyyyy.github.io/777.png?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Hva",
    age: 23,
    description: "Loves photography and outdoor adventures.",
    image: "https://hughyyyy.github.io/888.png?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Iva",
    age: 26,
    description: "Loves reading and trying new restaurants.",
    image: "https://hughyyyy.github.io/999.png?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Jva",
    age: 24,
    description: "Loves traveling and trying new cuisines.",
    image:
      "https://hughyyyy.github.io/101010.png?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Kva",
    age: 25,
    description: "Loves photography and outdoor adventures.",
    image:
      "https://hughyyyy.github.io/111111.png?auto=format&fit=crop&w=900&q=80",
  },
];
const stack = document.getElementById("cardStack");
const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");
const restartBtn = document.getElementById("restartBtn");
const superLikeBtn = document.getElementById("superLikeBtn");

const STORAGE_KEY = "tinder_current_index";
let currentIndex = Number.parseInt(
  localStorage.getItem(STORAGE_KEY) || "0",
  10,
);
const SWIPE_THRESHOLD = 110;

if (
  !Number.isInteger(currentIndex) ||
  currentIndex < 0 ||
  currentIndex > profiles.length
) {
  currentIndex = 0;
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, String(currentIndex));
}

function getTopCard() {
  const cards = stack.querySelectorAll(".card");
  return cards.length ? cards[cards.length - 1] : null;
}

function createCard(profile) {
  const ageSuffix = profile.age ? `, ${profile.age}` : "";
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <span class="badge badge-nope">NOPE</span>
    <span class="badge badge-like">LIKE</span>
    <img src="${profile.image}" alt="${profile.name}">
    <div class="card-overlay"></div>
    <div class="photo-progress"></div>
    <div class="card-content">
      <h2 class="name">${profile.name}${ageSuffix}</h2>
      <p class="desc">${profile.description}</p>
    </div>
  `;
  return card;
}

function renderStack() {
  stack.innerHTML = "";

  if (currentIndex >= profiles.length) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "No more cards. Add more profiles in tinder.js.";
    stack.appendChild(empty);
    return;
  }

  for (
    let i = Math.min(currentIndex + 2, profiles.length - 1);
    i >= currentIndex;
    i -= 1
  ) {
    const card = createCard(profiles[i]);
    const depth = i - currentIndex;
    card.style.transform = `scale(${1 - depth * 0.03}) translateY(${depth * 8}px)`;
    card.style.zIndex = String(100 - depth);

    if (i === currentIndex) {
      attachDragHandlers(card);
    } else {
      card.style.pointerEvents = "none";
      card.style.filter = "brightness(0.97)";
    }

    stack.appendChild(card);
  }
}

function attachDragHandlers(card) {
  const nope = card.querySelector(".badge-nope");
  const like = card.querySelector(".badge-like");

  let startX = 0;
  let x = 0;
  let isDragging = false;
  let rafId = null;

  const renderDrag = () => {
    const rotation = x * 0.06;
    card.style.transform = `translateX(${x}px) rotate(${rotation}deg)`;
    const opacity = Math.min(Math.abs(x) / 120, 1);
    nope.style.opacity = x < 0 ? String(opacity) : "0";
    like.style.opacity = x > 0 ? String(opacity) : "0";
    rafId = null;
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    x = e.clientX - startX;
    if (rafId === null) {
      rafId = window.requestAnimationFrame(renderDrag);
    }
  };

  const onPointerUp = () => {
    if (!isDragging) return;
    isDragging = false;
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);

    if (x > SWIPE_THRESHOLD) {
      animateOut(card, "right");
    } else if (x < -SWIPE_THRESHOLD) {
      animateOut(card, "left");
    } else {
      card.style.transition = "transform 240ms cubic-bezier(.22,.8,.33,1)";
      card.style.transform = "translateX(0px) rotate(0deg)";
      nope.style.opacity = "0";
      like.style.opacity = "0";
      setTimeout(() => {
        card.style.transition = "";
      }, 240);
    }
  };

  card.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    isDragging = true;
    startX = e.clientX;
    x = 0;
    card.style.transition = "";
    card.setPointerCapture(e.pointerId);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  });
}

function animateOut(card, direction) {
  const distance =
    direction === "right" ? stack.clientWidth * 1.8 : -stack.clientWidth * 1.8;
  const rotation = direction === "right" ? 20 : -20;
  card.style.transition =
    "transform 320ms cubic-bezier(.2,.85,.35,1), opacity 320ms ease-out";
  window.requestAnimationFrame(() => {
    card.style.transform = `translateX(${distance}px) rotate(${rotation}deg)`;
    card.style.opacity = "0";
  });

  setTimeout(() => {
    currentIndex += 1;
    saveProgress();
    renderStack();
  }, 320);
}

likeBtn.addEventListener("click", () => {
  const topCard = getTopCard();
  if (topCard) animateOut(topCard, "right");
});

dislikeBtn.addEventListener("click", () => {
  const topCard = getTopCard();
  if (topCard) animateOut(topCard, "left");
});

superLikeBtn.addEventListener("click", () => {
  const topCard = getTopCard();
  if (topCard) animateOut(topCard, "right");
});

restartBtn.addEventListener("click", () => {
  currentIndex = 0;
  saveProgress();
  renderStack();
});

saveProgress();
renderStack();
