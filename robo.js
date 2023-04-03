import axios from "axios"

(async () => {
  let endpoint = "https://forgeware.withub.ai/api/bot/crawler/641ee870c0936eb105f684a3"
  const results = await axios.post(endpoint,
    {inputData: {"NomeCidade":""}},
    {
      headers: {
      "x-api-key": "91d192e2-ebe7-49a4-bfa2-29595b50971d",
      "Content-Type": "application/json"
      }
    }
  )
})()