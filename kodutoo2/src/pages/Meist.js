import { useState } from 'react';

function Meist() {
    const [message, määraMessage] = useState("Liikmed")




    return (<div>
        <div>{ message }</div>
        <button>Kandideeri tööle</button>
        <button>Vaata meie töötajaid</button>
        <button>Võta meie ühendust</button>



    </div>  );
}

export default Meist;