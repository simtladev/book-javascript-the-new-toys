function redundantRepetition() {
  let x = "alpha";
  console.log(x);
  // ..코드 생략...

  let x = "bravo"; //SyntaxError: Identifier 'x' has already been declared
  console.log(x);
  // ..코드 생략...
  return x;
}

redundantRepetition();
