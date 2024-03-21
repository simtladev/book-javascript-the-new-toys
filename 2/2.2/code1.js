function jumpOut() {
  var a = [1, 2, 3];
  for (var i = 0; i < a.length; ++i) {
    var value = a[i];
    console.log(value);
  }
  console.log("Outside loop" + value); // 왜 'value'를 여기서도 사용할 수 있을까?
}

jumpOut();
