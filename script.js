alert("Welcome to the English Quiz!");

const questions = [
    "gato",
    "casa",
    "perro",
    "libro",
    "agua"
];

const answers = [
    "b",
    "a",
    "c",
    "a",
    "b"
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
    const userAnswer = prompt(
    `Question ${i + 1}

How do you say "${questions[i]}" in English?

Choose:
a
b
c`
)
.toLowerCase()
.trim();

    if (userAnswer === answers[i]) {
        score++;
    }
}

alert(`Your score is ${score} out of ${questions.length}`);

if (score === 5) {
    alert("Excellent!!");
} else if (score >= 3) {
    alert("Good job!")
} else {
    alert("Keep practicing!")
}