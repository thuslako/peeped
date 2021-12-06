import {Handler} from '@netlify/functions'
import fetch from 'node-fetch'

const handler : Handler = async (event,context) =>{
  const id = event.queryStringParameters.id
  const  result = await fetch(`https://api.twitter.com/2/tweets/${id}`,{
    method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.TWITTER_TOKEN}`,
      }
  })
  const  {errors,data} = await result.json()
  if(errors){
    return {
      statusCode: 400,
      body: JSON.stringify(errors[0])
    }
  }
  if(data){
    return {
      statusCode: 200,
      body: JSON.stringify({data})
    }
  }
}

export {handler}