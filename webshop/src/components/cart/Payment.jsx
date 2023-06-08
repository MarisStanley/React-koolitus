import React from 'react'



function Payment( props ) {  //voib panna ukskoik millise sona. Standard on props e properties. Makse summa.

    const pay = () => {
        const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
        const data = {
            "api_username": "e36eb40f5ec87fa2",
            "account_name": "EUR3D1",
            "amount": props.sum,
            "order_reference": Math.random() * 9999999,
            "nonce": "a9b7f7e"+ new Date() + Math.random() * 9999999,
            "timestamp": new Date(),
            "customer_url": "https://webshop-05-2023.web.app"
            
            };
        const headers = {
            "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
            "Content-Type": "application/json"
        }

        fetch(url,{"method": "POST", "body": JSON.stringify(data), "headers": headers})
        .then(res => res.json())
        .then(json => window.location.href = json.payment_link)
    }
  return (
    <div>
        <button onClick={pay}>Maksa</button>
    </div>
  )
}

export default Payment