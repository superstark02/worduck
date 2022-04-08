const http = require('http');

function makeCall() {
    //promise, it is completed only when data is returned
    return new Promise(resolve => {
        http.get("http://recruitment.roadcast.net/node_js_api", async (response) => {
            let data = ' ';
            response.on('data', (bit) => {
                data += bit;
            })

            response.on('end', () => {
                //console.log(result)
                resolve(data);
            })
        }).on('error', (error) => {
            resolve(error)
        })
    });
}


//driver function
async function getCalls() {
    let i = 0;
    for (i = 0; i < 10; i++) {

        console.log("making request "+(i+1));
        await makeCall().then(data=>{
            console.log(data)
        });
        console.log("request completed");

        /* for space between logs to differentaite each request */
        console.log(""); console.log(""); console.log("");
    }
}

getCalls();