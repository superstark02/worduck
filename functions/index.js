var request = require('request');
const functions = require("firebase-functions");
const app = require('express')()
const express = require('express')
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.post('/nimbble', async (req, res) => {

    var options = {
        'method': 'POST',
        'url': 'https://api.nimbbl.tech/api/v2/create-order',
        'headers': {
            'Authorization': 'Bearer '+req.body.token,
            'Content-Type': 'application/json'
        },
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
    };

    request(options, function (error, response) {
        if (error) throw new Error(error);
        //console.log(response.body);
        res.send(response.body)
    });

})

app.listen(1337, () => {
    console.log('Listening on 1337')
})

exports.pay = functions.https.onRequest(app);



