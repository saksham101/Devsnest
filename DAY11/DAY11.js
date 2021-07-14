const questions = [
  {
    'question': 'In which movie would you hear the song "Hakuna Matata"?',
    'options': ['Lion King', 'Beauty and the Beast', 'Hercules', 'Cinderella']
  },
  {
    'question': 'Chemical formula of "Sodium" is?',
    'options': ['Na', 'Sa', 'So', 'Cl']
  },
  {
    'question': 'The metal used to recover copper from a solution of copper sulphate is ',
    'options': ['Fe', 'Na', 'Ag', 'Au']
  },
  {
    'question': 'The most abundant rare gas in the atmosphere is',
    'options': ['Argonb(Ar)', 'Xenon(Xe)', 'Helium(He)', 'Oxygen(O2)']
  },
  {
    'question': 'The ore which is found in abundance in India is',
    'options': ['Monazite', 'Magnetite', 'Bauxite', 'Fluorspar']
  }
]

const body = document.body;
var score = 0;

function shuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

function reveal(elem) {
  let temp = score;
  let options = elem.closest(".options");
  let buttons = options.querySelectorAll("button");
  buttons.forEach((button) => {
    button.click();
  });
  score = temp;
}

function createOption(option, answer = false) {
  const optionHolder = document.createElement("div");
  optionHolder.className = "option";
  const button = document.createElement("button");
  button.innerText = option;
  button.addEventListener("click", () => {
    if (answer) {
      if (!button.classList.contains("correct")) {
        score++;
      }
      button.classList.add("correct");
    } else {
      button.classList.add("wrong");
    }
    reveal(button);
  });

  optionHolder.append(button);
  return optionHolder;
}

    // var results = document.querySelectorAll('.result');
    // // console.log(results)
    // results.forEach((quest) => {
    //   let options = [quest.correct_answer, ...quest.incorrect_answers];
    //   quest.options = options;
    //   // console.log(quest);
    // });

shuffle(questions);
questions.forEach((current, number) => {
  // the code we want to run for each question goes here
  const container = document.createElement("div");
  container.className = "container";
  const question = document.createElement("div");
  question.className = "question";
  question.innerHTML = `${number + 1}. ${current.question}`;
  container.append(question);

  const options = document.createElement("div");
  options.className = "options";
  let optionsArr = [];
  current.options.forEach((option, number) => {
    if (number == 0) {
      optionsArr.push(createOption(option, true));
    } else {
      optionsArr.push(createOption(option));
    }
  });
  shuffle(optionsArr);
  optionsArr.forEach((option) => {
    options.append(option);
  });
  container.append(options);
  body.append(container);

  const result = document.querySelector(".result");
result.addEventListener("click", () => {
  result.innerHTML = `${score}/${questions.length}`;
});
});
