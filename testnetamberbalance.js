var balance=0;
var response="";
import { EnigmaUtils, Secp256k1Pen, SigningCosmWasmClient, pubkeyToAddress, encodeSecp256k1Pubkey, unmarshalTx } from "secretjs";
import dotenv from "dotenv"
dotenv.config();
  // Load environment variables

  const customFees = {
    upload: {
        amount: [{ amount: "2000000", denom: "uscrt" }],
        gas: "2000000",
    },
    init: {
        amount: [{ amount: "500000", denom: "uscrt" }],
        gas: "500000",
    },
    exec: {
        amount: [{ amount: "500000", denom: "uscrt" }],
        gas: "500000",
    },
  }

  const main = async () => {
   

    const httpUrl = process.env.SECRET_REST_URL;

    // Use key created in tutorial #2
    const mnemonic = process.env.MNEMONIC;
    
      // A pen is the most basic tool you can think of for signing.
      // This wraps a single keypair and allows for signing.
      const signingPen = await Secp256k1Pen.fromMnemonic(mnemonic);
    
      // Get the public key
      const pubkey = encodeSecp256k1Pubkey(signingPen.pubkey);
    
      // get the wallet address
      const accAddress = pubkeyToAddress(pubkey, 'secret');
    
      const txEncryptionSeed = EnigmaUtils.GenerateNewSeed();
      
      const client = new SigningCosmWasmClient(
          httpUrl,
          accAddress,
          (signBytes) => signingPen.sign(signBytes),
          txEncryptionSeed, customFees
      );
      console.log(`Wallet address=${accAddress}`)
      
      // Upload the wasm of a simple contract
    
      // Get the code ID from the receipt
  
  
    
      // Create an instance of the token contract, minting some tokens to our wallet
      // Entropy: Secure implementation is left to the client, but it is recommended to use base-64 encoded random bytes and not predictable inputs.
  
      var contractAddress='secret1znrrrn692xnrn94sckgd9keuq7m3nm2awmpquv';
      const secretkey="";//set your own viewing key with <secretcli tx snip20 set-viewing-key>
  
      // Convert the UTF8 bytes to String, before parsing the JSON for the api key.
     
  
      // Query balance with the api key
      const balanceQuery = { 
          balance: {
              key: secretkey, 
              address: accAddress
          }
      };
      let balance = await client.queryContractSmart(contractAddress, balanceQuery);

      console.log('My token balance: ', balance);
      balance = await client.queryContractSmart(contractAddress, balanceQuery);
      console.log('New token balance', balance)
     // Transfer some tokens
    /*const handleMsg = {
      transfer: 
      {
          owner: accAddress, amount: amount2, recipient: wallet2 //the amount and wallet values will be passed down to here
      }
  }
  console.log(handleMsg)
 */
}
main();
