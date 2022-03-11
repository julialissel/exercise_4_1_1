import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import {useState} from 'react';

function App() {

  // const [selectedCount,setCount]=useState(0);
  const [cart, setCart] = useState([]);
  const [books, setBooks] = useState([
    { title: 'Den som dödade helvetets änglar', author: 'Jan Guillou', excerpt:'Jan Guillou Den som dödade helvetets änglar Det är inte vilka pensionärer som helst som hamnar i kampen mot extrem och ytterst välorganiserad brottslighet. Den ene är journalistveteranen Erik Ponti, den andre hans gamle vän från förr', id: 1 },
    { title: '66 Day Challenge med medelhavsmat', author: 'Ulrika Davidsson', excerpt:'Ulrika Davidsson är tillbaka med uppföljaren till bästsäljande 66 Day Challenge ! Den nya kokboken innehåller över 80 nya goda recept med smaker från Medelhavet och en inspirerande hälsoutmaning för alla som vill leva ett friskare och smalare liv', id: 2},
    { title: 'Paradiset', author: 'Abdulrazak Gurnah', excerpt:'Tolvårige Yusuf skickas av sina fattiga föräldrar till kusten för att bo hos sin farbror Aziz, en förmögen köpman. Snart går det upp för den oskuldsfulle Yusuf att köpmannen inte alls är Yusufs farbror: i själva verket har han sålts som skuldslav', id: 3 },
    { title: 'Gerontologi och geriatrik, elevbok', author: 'Eva-Lena Lindquist', excerpt:'Gerontologi och geriatrik täcker in hela kursen Gerontologi och geriatrik. Läromedlet består av elevbok, digitalt läromedel, lärarhandledning och lärarwebb. I Gerontologi och geriatrik, elevbok fördjupar vi oss i de arbetsuppgifter, den teoretiska', id: 4 }
  ]);
  function updateCart(newBook){
    console.log('Update Cart', newBook);
    setCart([...cart,newBook]);
  }
  
  return (
    <div className="Container">
        <Header  cart = {cart}  />
        <main>
        {books.map((book) => {
          return <Product updateCart={updateCart} book={book} key={book.id}/>
        })}
        </main>
    </div>
  );
}
export default App;