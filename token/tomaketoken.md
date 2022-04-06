# step 1. install secretcli 
# step 2. add a key to secretcli with secretcli keys add 'mykey' or secretcli keys add 'mykey' --recover if you want to use your seed phrases
# step 3. add the contract.wasm file into the blockchain with secretcli tx compute store contract.wasm --from 'mykey'
# step 4.pay attention to the transaction details and look for the instation number, very important. Now do use the following command:

secretcli tx compute instantiate 7959 '{"name":"tamberine","symbol":"TAMBR","admin":"secret1y9x0j2grnuu4k4eqw4mq0vecyfvfh6yfmgzpwj",
"decimals":6,
"initial_balances":[{"address":"secret1y9x0j2grnuu4k4eqw4mq0vecyfvfh6yfmgzpwj","amount": "8888000000"}],
"prng_seed":"cGV0ZQo=",
"config":{
"public_total_supply":true, "enable_deposit":true,"enable_redeem":true,"enable_mint":true,"enable_burn":true }
}' --label TAMBR --from 'mykey'

Replace address with your address. Important. The amount will be amount/decimals. So if you have 6 decimals you'll have to divide by a million.
Use the instation number you generated, the one I used is for the testnet.

And that's it. Enjoy your new token. Protip: secretcli is VERY picky with the json so if it doesn't work try removing spaces or try double
checking he quotation marks.
