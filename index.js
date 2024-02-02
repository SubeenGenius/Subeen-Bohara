

const questionsAboutMe = [
    "What do you think is my most distinctive personality trait?",
    "Is there a particular topic or interest of mine that you find intriguing or want to learn more about?",
    "If you had to describe me in three words, what would they be?",
    "What's your impression of my online presence or persona?",
    "Are there any assumptions or misconceptions you had about me that turned out to be different?",
    "In our interactions, is there something you've observed about me that you appreciate or find interesting?",
    "If you could guess, what do you think is my favorite online activity or hobby?",
    "Is there a specific story or post of mine that stands out in your memory?",
    "What kind of content from me do you enjoy the most?",
    "If there's one thing you'd like to know more about me, what would it be?"
];

const form = document.getElementById("question-form");

questionsAboutMe.forEach((question, index) => {
    const label = document.createElement("label");
    label.textContent = `Question ${index + 1}: ${question}`;
    const input = document.createElement("input");
    input.type = "text";
    input.name = `answer${index + 1}`;
    form.appendChild(label);
    form.appendChild(input);
});

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const answers = [];

    for (let pair of formData.entries()) {
        answers.push(pair[1]);
    }

    // You can now process the answers as needed (e.g., send to a server, display them, etc.)
    console.log(answers);
});
