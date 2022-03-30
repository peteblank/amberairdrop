import fetch from "node-fetch";


var x=0
var val=new Array();


function repeater(z) {
 
  fetch('https://secret-4--lcd--archive.datahub.figment.io/apikey/{apikey}/staking/validators/')
  .then(response => response.json())
  .then(result2 => setTimeout(() => { console.log("validator: " + result2.result[x].description.moniker); },1000))
  fetch('https://secret-4--lcd--archive.datahub.figment.io/apikey/{apikey}/staking/validators?status=BOND_STATUS_BONDED')
    .then(staking => staking.json())
    .then(validator => {

      for (var i = 0; i < 70; i++) {
        val[i] = validator.result[i].operator_address;
        //console.log(val[i]);
      }
      return val[z];
    })


    .then(values => fetch(`https://api.scrt.network/cosmos/staking/v1beta1/validators/${values}/delegations?pagination.limit=100000`))
    .then(response => response.json())
    .then(data => data.delegation_responses)
    .then(result => {
      var a = 0; //count
      for (var i = 0; i < result.length; i++) {
        if ((result[i].balance.amount / 1000000) >= 70) //divide by a million because the api shows the amount of uscrt
        {
          a++;
          console.log(result[i].delegation.delegator_address);
          console.log(result[i].balance.amount / 1000000);
          console.log(a);

        }
    }
      x++;
      console.log(x)     
 
})}
//I got this bit below thanks to some random anon
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

for (let b = 0; b < 70; b++) {
  await repeater(b);
  await sleep(25000);
}


