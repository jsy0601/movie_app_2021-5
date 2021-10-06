# 정서연 202030428

## [ 10월 6일 ]
## 영화 앱 만들기 워밍업
### ✔ 영화 데이터 로딩상태 표시하기
```javascript
import React from "react"

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 6000)
    }
    render() {
        const { isLoading } = this.state
        return (
            <div>
                { isLoading ? 'Loading...' : '영화 데이터 출력' } // 삼항연산자
            </div>
        )
    }
}

export default App
```
## 영화 API 사용해 보기
- axios 설치하기
- YTS 영화 데이터 API 살펴보기

### ✔ 노마드 코더 영화 API를 영화 앱에서 호출하기
- axios 임포트
- axios.get() 함수의 인자에 URL 전달하여 API 호출

### ✔ getMovies() 함수 기다린 다음, axios.get() 함수가 반환한 데이터 잡기
- getMovies() 함수 안에서 axios.get()이 실행되도록 한다.
- axios.get()의 return값은 movies에 저장
- componentDidMount() 함수가 실행되면 this.getMovie()가 실행된다.
- 이때 자바스크립트에게 getMovies() 함수는 시간이 필요하다는 것을 알려야 하는데 이때 사용되는 것이 async, await이다.

## 영화 데이터 화면에 그리기
### ✔ 영화 데이터 자세히 살펴보기
- [Console]탭 data -> data -> movies 순으로 객체에 접근하면 원하는 데이터 추출

### ✔ 객체에 있는 movies키에 접근하기
```javascript
getMovies = async () => {
        const {
            data: {
                data: {movies},
            },
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
        console.log(movies)
    }
```

## [ 09월 29일 ]
### ✔ 음식 앱에 prop-types 도입하기
- props의 값이 컴포넌트에 제대로 전달되지 않으면? props를 검사하는 방법이 필요

### ✔ 음식 데이터에 rating 추가
- 값의 자료형은 number

### ✔ prop-types 설치
> npm install prop-types

### ✔ prop-types 적용하기
- import PropTypes(이름 상관x) from 'prop-types' 추가
- rating props를 Food 컴포넌트에 전달

### ✔ Food.propTypes 작성하기

### ✔ State와 클래스형 컴포넌트
- props는 정적인 데이터만 다룰 수 있다
- state는 동적인 데이터를 다루기 위해 사용된다
- state는 class형 컴포넌트에서 사용된다

### ✔ 클래스형 컴포넌트
> class App extends React.Component {

} 
- React.Component 상속받은 App클래스

### ✔ render() 함수
- 함수형 컴포넌트는 return문이 JSX를 반환
- 클래스형 컴포넌트는 render() 함수가 JSX를 반환
- 직접 실행하지 않아도 실행되는 함수
```javascript
import {Component} from 'react'

class App extends Component {
    render() {
        return (
            <h1>Hello</h1>
        )
    }
}

export default App
```
### ✔ state 정의하기
- class 안에 state = {}
- 객체형태의 데이터
- 반드시 class형 컴포넌트 안에서 소문자를 사용하여 state라고 적는다
- state에 count라는 키 추가, 키값을 0
- render()함수에서 {this.state.count} 출력

### ✔ 버튼 눌러서 count state값 변경

### ✔ add() 함수와 minus() 함수 작성

### ✔ 버튼을 누르면 동작하도록 onClick 속성 추가

### ✔ this.state.count 마음대로 바꿔 보기
- 동작 X
- 리액트는 state를 직접 변경하지 못하게 하기 때문

### ✔ setState() 함수로 count state 변경하기
```javascript
add = () => {
        this.setState({count: 1})
    }

    minus = () => {
        this.setState({count: -1})
    }
```
### ✔ state의 변화에 따라 바뀌는 HTML
- 버튼을 번갈아 누르면 변경된 state의 값을 변경하려고 HTML만 바뀜
- 리액트가 화면 구성이 빠르다(필요한 부분만 바뀌니까)

### ✔ add, minus() 함수 개선하기
```javascript
add = () => {
        this.setState(current => ({
            count: current.count +1
        }))
    }

    minus = () => {
        this.setState(current => ({
            count: current.count -1
        }))
    }
```

### ✔ constructor() 함수
- Component를 생성할 때 state 값을 초기화하거나 메서드를 바인딩할 때 사용한다
- React.Component를 상속해서 만들어진 컴포넌트의 생성자를 구현할 때는 super(props)를 반드시 사용하는 이유는 this.props 사용 시 생성자 내에서 정의되지 않아 버그 발생 가능성이 있기 때문
- 생성자 내에서 외부 API 직접 호출 불가능 필요하면 componentDidMount()를 사용

### ✔ componentDidMount() 함수

> render(), contructor(), componentDidMount()가 리액트에서 마운트로 분류하는 생명주기 함수
![image](https://user-images.githubusercontent.com/70794506/135222872-ced67fee-4ac2-4dac-927b-abe6ea1cffb8.png)

> componentDidUpdate() 함수는 업데이트로 분류한 생명주기 함수
![image](https://user-images.githubusercontent.com/70794506/135223079-53c5973a-6c6b-40ff-a181-2ccb211ea153.png)

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