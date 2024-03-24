function anotherBlockExample(str) {
  if (str) {
    let index = str.indexOf("X"); // 'index'는 블록 내에서만 존재한다.
    if (index != -1) {
      str = str.substring(0, index);
    }
  }
  // 여기서 'index'를 사용할 수 없다. 블록 외부이다.
  return str;
}

anotherBlockExample();
