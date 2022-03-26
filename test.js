import fetch from "node-fetch";

fetch('https://api.scrt.network/cosmos/staking/v1beta1/validators/secretvaloper1x76f2c2cuwa4e3lttjgqeqva0725ftmqvgvfnv/delegations?pagination.limit=100000')
  .then(response => response.json())
  .then(data => data.delegation_responses)
  .then(result => {
    var a=0//count
    for(var i=0;i<result.length;i++){
      if ((result[i].balance.amount/1000000)>=70)//divide by a million because the api shows the amount of uscrt
      {
        a++
    console.log(result[i].delegation.delegator_address);
    console.log(result[i].balance.amount/1000000);
    console.log(a);
      }
   }
   })
