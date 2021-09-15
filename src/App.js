import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils"

const foodLike = [
  {
    name: "ramen",
    image: "https://mblogthumb-phinf.pstatic.net/MjAxODA3MThfNjAg/MDAxNTMxOTAxNjU5Mjk2.TPvVTTjaTNDvIWUXB3Pwq6TeBvES4QBAmxgGmOSLaE4g.UshYkHzPL6LkBQrJzxwyQ17fhudRyV8gbbY75eootggg.PNG.daishin_blog/%ED%95%B4%EC%99%B8_%EC%9D%B8%EA%B8%B0_%ED%95%9C%EA%B5%AD_%EC%9D%8C%EC%8B%9D_01.png?type=w800"
  },
  {
    name: "pizza",
    image: "https://src.hidoc.co.kr/image/lib/2020/11/9/1604911318873_0.jpg"
  }
]
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
