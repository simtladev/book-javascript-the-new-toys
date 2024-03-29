전역 스코프에서 var를 사용하면 전역 변수가 생성된다.
ES5와 이전 버전에서는 모든 전역 변수가 전역 개체의 속성이기도 했다.
하지만 ES2015에서 변경되었다. 이제 자바스크립트에는 var(전역 개체의 속성이기도 함)와 새로운 스타일의 전역(전역 개체의 속성이 아님)으로 생성된
기존 전역이 있다. 전역 스코프에서 let과 const는 이러한 새로운 종류의 전역을 만든다.
다음은 var를 이용하여 전역 객체의 속성인 전역 변수를 만드는 예이다.
전역 스코프에서 실행해야 한다(nodejs, jsFiddle.net을 사용하는 경우 1장에 설명한 대로 모듈 또는 함수 범위가 아닌 전역 스코프에서 작업해야 한다).

- code1.js

이를 실행한 결과는 다음과 같다

ansewr == 42
this.answer == 42
has property ? true

이제 let을 사용해 보자(새 창에서).

- code2.js

이번에는 다음과 같은 결과를 얻을 수 있다.

ansewr == 42
this.answer == undefined
has property ? false

answer는 더 이상 전역 객체의 속성이 아니다.
const도 동일하다. 전역 변수를 생성하지만 전역 변수는 전역 객체의 속성이 아니다.
이러한 전역 변수는 전역 객체의 속성이 아니더라도 어디에서나 접근할 수 있으므로 전역 변수를 피하지 않아도 된다는 의미는 아니다.
그렇다면 전역 객체의 속성이 아닌 것이 유용한 이유는 무엇일까?

최소한 몇 가지 이유가 있다.

- 전역 객체는 이미 가장 일반적인 환경인 웹 브라우저에서 속성으로 인해 극적으로 과부하 상태이다.
  var로 선언된 모든 전역 변수가 등록될 뿐만 아니라 ID가 있는 모든 요소, 이름이 있는 대부분의 요소, 기타 많은 "자동 전역"에 대한 속성도 가져온다.
  그냥 혼잡하다 적당한것이 좋은것이다

- 다른 코드에서 발견하기가 더 어렵다. let이나 const 전역 변수를 사용하려면 해당 이름을 알아야한다. 전역 객체의 속성 이름을 보면서 찾을 수 없다.
  이것은 그다지 유용하지 않다. 비공개를 원한다면 전역 변수를 만들지 말자. 어쨌든 정보 유출은 조금 덜 된다.

- 자바스크립트 엔진이 전역 객체의 속성에 적용할 수 없는 방식으로 변수(특히 const)에 대한 접근을 최적화할 수 있다.

자동 전역에 대해 말하자면, let이나 const (도는 class)로 선언된 전역은 자동 전역을 덮어쓴다. (즉, 숨긴다. let과 const 선언이 "이긴다").
var로 선언된 전역의 모든 경우에 해당되는 것은 아니다. 전통적인 예는 웹 브라우저에서 전역 name을 사용하려는 것이다.
브라우저에서 전역 객체는 페이지에 대한 window 객체이며 name이라는 속성이 있으면 var 전역으로 숨길 수 없으면 값은 항상 문자열이다.

var name = 42;
console.log(typeof name); // "string"

하지만 let이나 const 전역은 자동 전역/window 속성을 성공적으로 덮어쓴다.

let name = 42;
console.log(typeof name) // "number"

하지만 원칙적으로 전역 객체에서 let과 const를 분리하는 것은 전역 객체에 의존하는 것에서 멀어짐에 따라 언어 방향의 일부이자 부분일 뿐이다.
이는 앞으로의 장(특히 13장 모듈)에서 더 많이 배울 것이다.

요약:
var로 선언하면 전역 객체의 속성이 된다.
var는 자동 전역을 덮어 쓸 수 없어 해당 전역에 타입을 따라간다.
let const는 전역 변수를 생성하지만 전역 변수는 객체의 속성이 아니다.
