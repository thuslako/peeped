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

  if(!result.ok){
    return {
      statusCode: 400,
      body: JSON.stringify({data:{text:'couldn\'t find a tweet from provided URL, try again'}})
    }
  }

  const  {data,errors} = await result.json()
  if(data){
    return {
      statusCode: 200,
      body: JSON.stringify({data})
    }
  }
  if(errors){
    console.table(errors)
  }
}

export { handler }