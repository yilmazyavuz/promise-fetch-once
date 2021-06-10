const fetch = require('node-fetch');
var activePromise =null;
var validUntil = Date.now + 1;
async function myFetch() {
    if(activePromise && validUntil < Date.now)
        {
            var prom = await activePromise;
            return await prom.clone().json();
        }
    activePromise = fetch('http://worldclockapi.com/api/json/est/now');
    let response = await activePromise;
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    var promi = response.clone().json();
    let myBlob = await promi;
    //activePromise = null;
    return myBlob;
  }
  
  myFetch().then(d=> { console.log(d)}).catch(e=> {console.log(e)});
  myFetch().then(d=> { console.log(d)}).catch(e=> {console.log(e)});
  myFetch().then(d=> { console.log(d)}).catch(e=> {console.log(e)});

  