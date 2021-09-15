# 정서연 202030428

## [ 09월 15일 ]
### ✔ Potato 컴포넌트 사용하기
- JSX요소는 반드시 하나의 태그로 감싸야 한다.
```javascript
function Potato(bar) {
    return <h1>I love {bar.foo}</h1>
}

export default Potato
```
```javascript
import Potato from './Potato'

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Potato foo="you" />
    </div>
  )
}
```
> Hello<br>
> I love you
--- 
### ✔ Props
- 컴포넌트에서 컴포넌트로 전달하는 데이터
- 함수의 매개변수 역할을 하는 것
> props에 있는 데이터는 문자열인 경우를 제외하면 모두 중괄호로 값을 감싸야 한다!

### ✔ Food 컴포넌트에 props 전달하기
```javascript
(생략...)
<Food fav="kimchi" something={true} papapa={['hello', 1, 2, 3, 4, true]} />
(생략...)
```

### ✔ props 사용하기
```javascript
(생략...)
function Food(foo) {
  console.log(foo);
  return <h1>I like potato</h1>
}
(생략...)
```
- console탭에서 확인 가능

### ✔ 화면에 그대로 나타내기
```javascript
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />
    </div>
  )
}

function Food(foo) {
  return <h1>I like {foo.fav}</h1>
}
export default App
```

- 객체에 있는 값 사용하려면 점 연산자(.)를 쓴다.

### ✔ 구조 분해 할당으로 props 사용하기
```javascript
(생략...)
function Food(foo) {
  const { fav } = foo
  return <h1>I like {fav}</h1>
}
export default App
```

### ✔ 여러 개의 컴포넌트에 props 사용하기
```javascript
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />
      <Food fav="a" />
      <Food fav="b" />
    </div>
  )
}

function Food(foo) {
  const { fav } = foo
  return <h1>I like {fav}</h1>
}
export default App
```
>Hello<br>
>I like kimchi<br>
>I like a<br>
>I like b

- 위의 코드는 효율적인 방법이 아니다.

### ✔ 음식 데이터 만들기
- 서버에서 넘어온 데이터를 저장할 수 있도록 foodLike라는 변수를 만든 후 빈 배열 할당
- foodLike에 name과 image 추가

### ✔ map() 함수로 컴포넌트 많이 만들기
![image](https://user-images.githubusercontent.com/70794506/133377764-fc19c800-327e-4938-a6d9-c20db4bd64ff.png)

```
friends.map(function(foo) {
... return foo + "♥";
... })
[ 'a♥', 'b♥', 'c♥' ]
```

### ✔ map() 함수를 foodLike 배열에 적용하기
```javascript
function App() {
  return (
    <div>
      {
        foodLike.map(dish => (<Food name={dish.name} />))
      }
    </div>
  )
}
```

### ✔ Food 컴포넌트에 음식 이미지 출력하기
```javascript
const foodLike = [(생략...)]
function App() {
  return (
    <div>
      {
        foodLike.map(dish => (<Food name={dish.name} picture={dish.image} />))
      }
    </div>
  )
}

function Food({name, picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
  </div>
  )
}
export default App
```
![image](https://user-images.githubusercontent.com/70794506/133388243-48154f38-fe6a-49c1-a663-3dce1de599a2.png)
---
### key props 추가
- 리스트의 각 원소는 유일한 key prop을 가져야 한다.

### img 엘리먼트에 alt속성 추가

## [ 09월 08일 ]
학습내용
- 웹펙(Webpack): 자바스크립트 앱을 위한 정적 모듈들을 하나로 묶어주는 번들러
- 바벨(Bavel): 최신 자바스크립트 문법을 사용할 수 있게 해주는 트랜스파일러
- create-react-app: react를 위한 보일러 플레이트, 한 줄을 입력해서 리액트 개발을 바로 시작 할 수 있음
- 보일러 플레이트(Boilerplate): 최소한의 변경으로 여러곳에서 재사용이 가능한 코드

> return 다음에 ()를 반드시 붙인다.
```javascript
function App() {
  return (
    <div>
    Hello React!!!!!!
    </div>
  ); // 세미콜론(;)없어도 됨
}

export default App; // 외부에서 사용 가능
```
- 위의 문구는 아래 문구(index.html)에 들어가게 된 것
- id값이 root인 태그에서 App에서 리턴된 값을 가져와 넣어줘라!
```html
<div id="root"></div>
```
![image](https://user-images.githubusercontent.com/70794506/132465397-7a6b60b8-66fa-47c4-a90c-f66bd3be62a7.png)

### App.js파일로 컴포넌트의 정의 알아보기
- function으로 정의 내린 곳을 컴포넌트라고 한다.
- App()함수가 정의되고 함수는 html문서를 return.

- index.js
```javascript
import ReactDOM from 'react-dom'; // 세미콜론(;) 없어도 됨.
import App from './App'; // index.js와 같은 경로의 App.js

ReactDOM.render(
    <App />, document.getElementById('root'));
```