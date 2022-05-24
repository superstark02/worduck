import React from "react";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

function App() {
  var base_url = 'https://api.nimbbl.tech/api';
  async function postData() {
    //generating token ( auth )
    const data = await fetch(base_url + '/v2/generate-token', {
      method: 'POST',
      body: JSON.stringify({ "access_key": "access_key_x1DveRbWzVmWW3KB", "access_secret": "access_secret_1DvejDD1MqoWW3KB" }),
      headers: { 'Content-Type': 'application/json' }
    }).then((t) =>
      t.json()
    )


    /*crating order
    const created_order = await fetch(base_url+'/v2/create-order', {
      method: 'POST',
      body: JSON.stringify({
        "amount_before_tax": 4,
        "currency": "INR",
        "invoice_id": "BrQv9nkxDEqWR3zg1122222",
        "tax": 0,
        "user": {
          "mobile_number": "9999999999",
          "email": "rakesh.kumar@example.com",
          "first_name": "Rakesh", "last_name": "Kumar"
        },
        "shipping_address": {
          "address_1": "Some address",
          "street": "Your street",
          "landmark": "My landmark",
          "area": "My area",
          "city": "Mumbai",
          "state": "Maharashtra",
          "pincode": "400018",
          "address_type": "residential"
        },
        "total_amount": 4,
      }),
      headers: {
        'Authorization': 'Bearer ' + data.token,
        'Content-Type': 'application/json'
      },
    }).then((t) =>
      t.json()
    )*/

    let send_data = {
      token: data.token
    }
    const created_order = await fetch('http://localhost:1337/nimbble', {
      method: 'POST',
      body: JSON.stringify(send_data),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((t) =>
      t.json()
    )

    console.log(created_order)


    //loading Nimbbl script
    const res = await loadScript('https://api.nimbbl.tech/static/assets/js/checkout.js')
    if (!res) {
      alert('SDK failed to load. Are you online?')
      return
    }

    //invoking checkout
    var options = {
      "access_key": "access_key_x1DveRbWzVmWW3KB", // Enter the Key ID generated from the Dashboard
      "order_id": created_order.order_id, // Enter the order_id from the create-order api
      "callback_handler": function (response) {
        console.log(response.nimbbl_transaction_id);
        console.log(response.nimbbl_order_id);
        console.log(response.nimbbl_signature);
        console.log(response.status);
      },
      "custom": {
        "key_1": "val_1",
        "key_2": "val_2"
      },
    };

    const paymentObject = new window.NimbblCheckout(options)
    paymentObject.open(created_order.order_id)
  }

  return (
    <div className="card">
      <button className="btn btn-sm btn-primary" onClick={postData}>Pay Now</button>
    </div>
  );
}
export default App;