import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Avaleht() {
    const [postitused,uuedPostitused] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => uuedPostitused(data))
        
    }, []);


    return ( <div>
        <div>See on avaleht, nähtav localhost:3000 aadressil</div>
        <img src="https://static4.depositphotos.com/1006069/377/i/950/depositphotos_3779660-stock-photo-breaking-news.jpg" alt="" />
        {postitused.map(element => 
        <div>
        <div><i>{element.userId}</i></div>
        <div><u>{element.id}</u></div>
        <div><b>{element.title}</b></div>
        <div>{element.body}</div>
        <Link to={"kasutaja/" + element.userId}> 
        <button>Koik kasutaja postitused</button>
        </Link>
        <Link to={"postitus/" + element.id}> 
        <button>Vaata postitust</button>
        </Link>
        </div>)}
    </div> );
}

export default Avaleht;