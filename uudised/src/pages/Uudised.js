import { Link } from 'react-router-dom';

function Uudised() {

    const uudised = JSON.parse(localStorage.getItem("uudised")) || [];

    return ( <div>
        <div>See on uudiste leht, nähtav localhost:3000/uudised aadressil</div>
        {uudised.length === 0 && <div>Hetkel pole ühtegi uudist, homme kindlasti juhtub midagi.</div>}

        {uudised.map((uudis, index) => 
           <Link to={"/uudis/" + index}><div>{uudis}</div></Link> 
            )}
    </div> );
}

export default Uudised;