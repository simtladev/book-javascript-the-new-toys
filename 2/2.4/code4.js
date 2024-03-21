let answer;

function notInitializedYet() {
  answer = 42; // Cannot access 'answer' before initialization
  console.log(answer);
  let answer;
}

notInitializedYet();
