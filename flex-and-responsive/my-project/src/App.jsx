import Alert from './components/Alert'
import Menu from './components/Menu'
import Recipe from './components/Recipe'
import DarkMode from './components/DarkMode'


function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <DarkMode/>
      <Alert/>
      <div className='flex justify-center flex-wrap'>
        <Recipe 
          imageUrl={"https://source.unsplash.com/x00CzBt4Dfk/1600x900"} 
          imgAlt={"Pizza Margherita image"} 
          titleUrl={"#"}
          title={"Pizza Margherita"} 
          description={"Invented in Naples in honor of the first queen of Italy, the Margherita pizza is the triumph of Italian cuisine in the world."}
          time={"1h 15m"}
          servings={"servings"}
          level={"easy"}
        />
        <Recipe 
          imageUrl={"https://cdn.pixabay.com/photo/2016/03/05/21/46/american-1239081_960_720.jpg"} 
          imgAlt={"Pizza Peperoni image"} 
          titleUrl={"#"}
          title={"Pizza Peperoni"} 
          description={"Invented in Naples in honor of the first queen of Italy, the Margherita pizza is the triumph of Italian cuisine in the world."}
          time={"1h 20m"}
          servings={"servings"}
          level={"medium"}
        />
        <Recipe 
          imageUrl={"https://cdn.pixabay.com/photo/2018/04/07/15/03/pizza-3298685_960_720.jpg"} 
          imgAlt={"Pizza Vegan image"} 
          titleUrl={"#"}
          title={"Pizza Vegan"} 
          description={"Invented in Naples in honor of the first queen of Italy, the Margherita pizza is the triumph of Italian cuisine in the world."}
          time={"1h 30m"}
          servings={"servings"}
          level={"hard"}
        />
                <Recipe 
          imageUrl={"https://source.unsplash.com/x00CzBt4Dfk/1600x900"} 
          imgAlt={"Pizza Margherita image"} 
          titleUrl={"#"}
          title={"Pizza Margherita"} 
          description={"Invented in Naples in honor of the first queen of Italy, the Margherita pizza is the triumph of Italian cuisine in the world."}
          time={"1h 15m"}
          servings={"servings"}
          level={"easy"}
        />
        <Recipe 
          imageUrl={"https://cdn.pixabay.com/photo/2016/03/05/21/46/american-1239081_960_720.jpg"} 
          imgAlt={"Pizza Peperoni image"} 
          titleUrl={"#"}
          title={"Pizza Peperoni"} 
          description={"Invented in Naples in honor of the first queen of Italy, the Margherita pizza is the triumph of Italian cuisine in the world."}
          time={"1h 20m"}
          servings={"servings"}
          level={"medium"}
        />
        <Recipe 
          imageUrl={"https://cdn.pixabay.com/photo/2018/04/07/15/03/pizza-3298685_960_720.jpg"} 
          imgAlt={"Pizza Vegan image"} 
          titleUrl={"#"}
          title={"Pizza Vegan"} 
          description={"Invented in Naples in honor of the first queen of Italy, the Margherita pizza is the triumph of Italian cuisine in the world."}
          time={"1h 30m"}
          servings={"servings"}
          level={"hard"}
        />
      </div>
    </div>
  )
}

export default App
