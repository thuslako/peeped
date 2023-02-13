import fetch from 'node-fetch'
import { Handler } from '@netlify/functions'


const handler: Handler = async (event, context) => {
  const id = event.queryStringParameters.id

  const result = await fetch(`https://api.twitter.com/2/tweets?ids=${id}&expansions=attachments.media_keys0&expansions=attachments.media_keys&media.fields=duration_ms,height,media_key,preview_image_url,public_metrics,type,url,width,alt_text`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${process.env.TWITTER_TOKEN}`,
    }
  })

  if (!result.ok) {
    return {
      statusCode: 400,
      body: JSON.stringify({ data: { text: 'couldn\'t find a tweet from provided URL, try again' } })
    }
  }

  const { data, includes, errors } = await result.json()
  if (data || includes) {
    return {
      statusCode: 200,
      body: JSON.stringify({ data, includes })
    }
  }
  if (errors) {
    console.table(errors)
  }
}

export { handler }