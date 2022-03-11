import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import {useState} from 'react';

function App() {

  const [selectedCount,setCount]=useState(0);
  // const [books, setBook] = useState([
    
  // ]);
  function updateCart(newTitle){
    console.log('updatedoto');
    // const book ={
    //    newTitle
      
    // }
    //Kopierar array
    // let copyTodos = [...todos]
    //Slår ihop gamla array med det nya som kommer in från input
    // const newTodos = copyTodos.concat(todo);
    //Uppdaterar den nya arrayen
    // setTodo(newTodos);
    //Denna gör samma som ovan.
    //Vi skickar in en funktion där vi får ut nuvarande todos-array och sen kopierar
    //Vi denna arry med spread ... också lägger till den nya todon som
    //resulterar i en nu array som sparas i vårt state
    // setBook(currentBooks => {
    //   return [...currentBooks,book]
    // });
    // console.log(books);
  }
  const [selectedTitle, setTitle]= useState([]);
  return (
    <div className="Container">
        <Header selectedTitle = {selectedTitle} selectedCount = {selectedCount} />
        <main>
          <Product update={updateCart} setTitle = {setTitle} setCount = {setCount} title="Den som dödade helvetets änglar" author="Jan Guillou" excerpt="Jan Guillou Den som dödade helvetets änglar Det är inte vilka pensionärer som helst som hamnar i kampen mot extrem och ytterst välorganiserad brottslighet. Den ene är journalistveteranen Erik Ponti, den andre hans gamle vän från förr"/>
          <Product update={updateCart} setTitle = {setTitle} setCount = {setCount} title="66 Day Challenge med medelhavsmat" author="Ulrika Davidsson" excerpt="Ulrika Davidsson är tillbaka med uppföljaren till bästsäljande 66 Day Challenge ! Den nya kokboken innehåller över 80 nya goda recept med smaker från Medelhavet och en inspirerande hälsoutmaning för alla som vill leva ett friskare och smalare liv"/>
          <Product update={updateCart} setTitle = {setTitle} setCount = {setCount} title="Paradiset" author="Abdulrazak Gurnah" excerpt="Tolvårige Yusuf skickas av sina fattiga föräldrar till kusten för att bo hos sin farbror Aziz, en förmögen köpman. Snart går det upp för den oskuldsfulle Yusuf att köpmannen inte alls är Yusufs farbror: i själva verket har han sålts som skuldslav"/>
          <Product update={updateCart} setTitle = {setTitle} setCount = {setCount} title="Gerontologi och geriatrik, elevbok" author="Eva-Lena Lindquist" excerpt="Gerontologi och geriatrik täcker in hela kursen Gerontologi och geriatrik. Läromedlet består av elevbok, digitalt läromedel, lärarhandledning och lärarwebb. I Gerontologi och geriatrik, elevbok fördjupar vi oss i de arbetsuppgifter, den teoretiska"/>
        </main>
    </div>
  );
}
export default App;
/**
 * Frågor
 * Tips på att veta vart data ska ligga 
 * Behöver spara titel i lista, är det bättre att tänka som todo och lägga in titlar i en array 
 * Hur sparar man state 
 * 
 */