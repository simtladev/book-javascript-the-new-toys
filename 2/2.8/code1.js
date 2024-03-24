for (var n = 0; n < 3; n++) {
  (function (value) {
    setTimeout(function () {
      console.log(value);
    }, 10);
  })(n);
}
