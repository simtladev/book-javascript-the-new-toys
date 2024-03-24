// 재사용 가능한 명명된 함수를 사용하여 이미 이와 같다면
// 함수 코드를 루프로 이동할 필요가 없다.
function delayedLog(msg, delay) {
  setTimeout(function () {
    console.log(msg);
  }, delay);
}

// ...나중에...
for (let n = 0; n < 3; ++n) {
  delayedLog(n, 10);
}
