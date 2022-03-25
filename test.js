import fetch from "node-fetch";

fetch('https://api.scrt.network/cosmos/staking/v1beta1/validators/secretvaloper1x76f2c2cuwa4e3lttjgqeqva0725ftmqvgvfnv/delegations?pagination.limit=100000')
  .then(response => response.json())
  .then(data => data.delegation_responses)
  .then(result => console.log(Object.keys(result).length))