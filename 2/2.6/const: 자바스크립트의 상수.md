이미 let과 공유하는 const에 대한 몇 가지 특징을 다뤘다. 이 절에서는 const에 대해 자세히 알아보자.

const 기초
알다시피 const는 상수를 만든다.

- code1.js

당연하게도 상수에 새 값을 할당할 수 없지만 변수에 새 값을 할당할 수 없다는 점을 제외하면 동일한 범위 규칙,
임시 데드존 등 모든 것은 let으로 변수를 만드는 것과 똑같다.
상수에 새 값을 할당하려고 할 때 어떤 일이 발생할까? 어떤 점이 가장 유용할까?
맞다. 오류가 발생한다.

- code2.js

언뜻 보기에는 코드에서 "매직 넘버"를 피하는 작업에만 const를 사용한 것처럼 보일 수 있다.
예를 들어 코드에서 사용자가 어떤 동작을 했을 때 작업 중 메세지를 표시하기 전에 일반적인 지연에 사용할 수있다.

const BUSY_DISPLAY_DELAY = 300;

const는 그보다 유용하다. 우리는 변수의 값을 자주 변경하지만 값을 변경하지 않는 경우도 많으며,
변수를 사용하여 변하지 않는 정보를 보관하기도 한다.

실제 예를 살펴보자. code3.js는 특정 클래스가 있는지 여부에 따라 div에 텍스트를 추가하는 간단한 루프다.
변수를 상당히 간단하게 사용한 것을 볼 수 있다.

- code3.js

이 코드에는 4개의 변수가 있다. 자세히 보면 그중 하나가 다른 세 개와 다르다는 것을 알 수 있다.
무엇이 다른지 알아볼 수 있는가?
변수 중 하나는 결코 변하지 않는 값을 가지고 있다. 바로 list이다. 다른 변수(n, element, text)는 실제로 변수이지만 list는 상수이다.
const의 몇 가지 측면을 더 다루 ㄴ후 이후 절에서 이코드로 돌아오겠지만,
그동안 마음속으로 지금까지 알고 있는 내용을 기반으로 하여 let과 const를 (식별자를 제거하지 않고) 해당 코드에 작용할 수 있는 방법을 생각해 보자

const가 참조하는 객체는 여전히 변경 가능

상수로 변경할 수 없는 것이 무엇인지 기억하는 것이 중요하다. 상수의 값이다.
그 값이 객체 참조 라면 어떤 식으로든 객체가 변경 불가능하다는 것(상태를 변경할 수 없음)을 의미하지는 않는다.객체는 여전히 변경 가능하다.
이는 상숫값을 변경하기 때문에 다른 객체에 대한 상수 지점을 만들 수 없음을 의미한다. 확인해 보자.

- code4.js

위 위드에 상수에 객체에 대한 참조가 있다.

obj:[Ref55462] -> 객체:{value: "before"}
obj 상수는 객체를 직접 포함하지 않고 객체에 대한 참조를 포함한다. 물론 이것은 개념적일 뿐이며 객체 참조의 실제 값을 볼 수 없다.
따라서 객체의 상태를 다음과 변경할 때

- code4.js

obj 상수의 값은 변경하지 않았다. 여전히 동일한 객체에 대한 참조이다. 객체의 상태가 업데이트되어 value 속성에 대해 다른 값을 저장 하면 된다.
obj:[Ref55462] -> 객체:{value: "after"}
const가 하는 일은 다른 객체를 참조하거나 null 또는 완전히 다른 것으로 설정하는 것처럼 obj의 실제 값을 변경하지 못하도록 하는 것이다.

다음은 주어진 HTML을 단락으로 부모 요소에 추가하는 함수의 실용적인 예이다.

- code5.js

코드에서 p의 참조가 아니라 단락의 상태(innerHTML 속성)만 변경하므로 p를 상수로 만들 수 있다.

요약:
상수에는 새 값을 할당 할 수 없는것만 빼면 let으로 변수를 만드는것이랑 똑같다.
매직넘버를 피하는 작업에 const를 사용하는것 뿐만아니라 변수를 사용하여 변하지 않는 정보를 보관하기도 한다.
const가 참조하는 객체는 여전히 변경 가능하다. 다른 객체를 참조하거나 null 또는 완전히 다른것으로 설정하는게 아닌
상수 객체가 참조하고 있는 값은 변경 가능하다.
