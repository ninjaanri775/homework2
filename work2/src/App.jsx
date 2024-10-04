import './App.css';
import Card from './components/Card/card';
import Header from './components/Header/header';
import Button from './components/Button/button';
import Text from './components/Text/text';
import ps from './assets/sony-playstation-5-game-console-Xl4WwLC-600.jpg'
import bag from './assets/pngtree-bag-school-png-png-image_13141451.png'
import plate from './assets/Enamel-plate-with-food-container-dish-plates-still-life-photography_242955_wh1200.png'
import lego from './assets/41151740-LEGO-Brick-Shelf-Set-Medium-Stone-Grey.jpg'
function App() {
    return (
    <div className="App">
      <Header/>
      <div>
                 <Text/>
      </div>
   
   <div className="products">

            <Card
          img={ps}
          price={599}
          amount={41}
          Name={'PS5'}
          about={'best console'}
          color={''}
        />
        <Card
          img={bag}
          price={64}
          amount={12}
          Name={'Bag'}
          about={'for school'}
          color={''}
        />
        <Card
          img={plate}
          price={2}
          amount={644}
          Name={'plate'}
          about={'broken plate'}
          color={''}
        />
        <Card
          img={lego}
          price={64}
          amount={212}
          Name={'shelf'}
          about={'its lego'}
          color={''}
        />
   </div>
      <Button/>
    </div>
    );
}

export default App;