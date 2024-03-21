function blockExample(str) {
  let p = "prefix";
  if (str) {
    p = p.toUpperCase(); // Cannot access 'p' before initialization
    str = str.toUpperCase();
    let p = str.indexOf("X");
    if (p != -1) {
      str = str.substring(0, p);
    }
  }
  return p + str;
}

blockExample("prefix");
