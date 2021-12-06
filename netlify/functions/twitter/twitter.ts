import fetch from 'node-fetch'
import {Handler} from '@netlify/functions'


const handler : Handler = async (event,context) =>{
  const id = event.queryStringParameters.id

  const result = await fetch(`https://api.twitter.com/2/tweets/${id}`,{
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${process.env.TWITTER_TOKEN}`,
    }
  })
  const  {data,errors} = await result.json()
  if(data){
    return {
      statusCode: 200,
      body: JSON.stringify({data})
    }
  }
  else{
    return {
      statusCode: 400,
      body: JSON.stringify(errors[0])
    }
  }
}

export { handler }