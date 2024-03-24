function closuresInLoopsES5() {
  for (var counter = 1; counter <= 3; ++counter) {
    (function (value) {
      // 익명 함수의 시작
      setTimeout(function () {
        console.log(value);
      }, 10);
    })(counter); //끝에 counter를 넘겨 호출한다.
  }
}

closuresInLoopsES5();
