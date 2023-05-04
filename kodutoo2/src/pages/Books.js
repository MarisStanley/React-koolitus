import React, {useState} from 'react'

function Books() {
    const [bookOrder, newBookOrder] = useState(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Gone With The Wind", "The Secret"]);
    
    const tagasi = () => {
      newBookOrder(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Gone With The Wind", "The Secret"]);
    }
      

    const sorteeriAZ = () => {
        bookOrder.sort((a,b) => a.localeCompare(b)); 
        newBookOrder(bookOrder.slice()) ;
      
      }
      const sorteeriZA = () => {
        bookOrder.sort((a,b) => b.localeCompare(a)); 
        newBookOrder(bookOrder.slice()) ;
      }

      const sorteeriSonaPikkus = () => {
        bookOrder.sort((a,b) => a.length - b.length); 
        newBookOrder(bookOrder.slice()) ;
      }
      //const word = text.split(' ');

      const sorteeriSonaArvuJargi = () => {
        bookOrder.sort((a, b) => a.split(" ").length - b.split(" ").length);
        newBookOrder(bookOrder.slice()) ;
      }

      const filtreeriAlgabThega = () => {
        const vastus = bookOrder.filter(oneBook => oneBook.startsWith("The"));
        newBookOrder(vastus);
      }

      const filtreeriKeskelOnAnd = () => {
        const vastus = bookOrder.filter(oneBook => oneBook.includes("and"));
        newBookOrder(vastus);
      }

      const filtreeriRohkemKui10 = () => {
        const vastus = bookOrder.filter(el => el.length > 10); 
        newBookOrder(vastus);
      }

      const filtreeriVahemKui7 = () => {
        const vastus = bookOrder.filter(el => el.length < 7); 
        newBookOrder(vastus);
      }

       
        
    
      
    


     
  return (
    <div>
      <br />
      <button onClick={tagasi}>Reseti filtrid</button>
        <br />
        
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriSonaPikkus}>Sõna pikkuse järgi</button>
      <button onClick={sorteeriSonaArvuJargi}>Sõnade arvu järgi</button>
      <br /> <br />
      <button onClick={filtreeriAlgabThega}>Algab "The"-ga</button>
      <button onClick={filtreeriKeskelOnAnd}>Keskel on "and"</button>
      <button onClick={filtreeriRohkemKui10}>Rohkem kui 10 tähemärki</button>
      <button onClick={filtreeriVahemKui7}>Vähem kui 7 tähemärki</button>

      
      

      {bookOrder.map(el => <div>{el}</div>)}

      <br />

      
      
    </div>
  )
  }


export default Books