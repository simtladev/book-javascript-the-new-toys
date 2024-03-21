let answer;
function hoisting() {
  answer = 42; //ReferenceError: Cannot access 'answer' before initialization
  console.log(answer);
  let answer;
}
hoisting();
