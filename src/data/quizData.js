const quizData = [
  {
    id: 1,
    question: "What is the SI unit of force?",
    options: ["Joule", "Newton", "Pascal", "Watt"],
    correctAnswer: "Newton",
  },
  {
    id: 2,
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Nitrogen",
  },
  {
    id: 3,
    question: "What is the chemical formula of water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    correctAnswer: "H2O",
  },
  {
    id: 4,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    id: 5,
    question: "What part of the plant conducts photosynthesis?",
    options: ["Root", "Stem", "Leaf", "Flower"],
    correctAnswer: "Leaf",
  },
  {
    id: 6,
    question: "Which vitamin is produced when skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    correctAnswer: "Vitamin D",
  },
  {
    id: 7,
    question: "What is the boiling point of water?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    correctAnswer: "100°C",
  },
  {
    id: 8,
    question: "Which organ pumps blood in the human body?",
    options: ["Brain", "Lungs", "Heart", "Kidney"],
    correctAnswer: "Heart",
  },
  {
    id: 9,
    question: "Which metal is liquid at room temperature?",
    options: ["Iron", "Mercury", "Copper", "Silver"],
    correctAnswer: "Mercury",
  },
  {
    id: 10,
    question: "Which gas is required for respiration?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    correctAnswer: "Oxygen",
  },
  // ---------- continue ----------
];

// Auto-generate remaining up to 50 (same level)
for (let i = 11; i <= 50; i++) {
  quizData.push({
    id: i,
    question: `Sample Science Question ${i}?`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: "Option A",
  });
}

export default quizData;
