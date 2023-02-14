import fetch from 'node-fetch'
import { Handler } from '@netlify/functions'
const handler: Handler = async (event, context) => {

  const id = event.queryStringParameters.id
  const meta = 'expansions=attachments.media_keys,referenced_tweets.id,author_id&media.fields=duration_ms,height,media_key,preview_image_url,public_metrics,type,url,width,alt_text'
  const result = await fetch(`https://api.twitter.com/2/tweets/${id}?${meta}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${process.env.TWITTER_TOKEN}`,
    }
  })
  const { data, includes } = await result.json()
  if (data) {
    // console.log(data)
    return {
      statusCode: 200,
      body: JSON.stringify({ data, includes })
    }
  }

  if (!result.ok) {
    return {
      statusCode: 400,
      body: JSON.stringify({ data: { text: 'couldn\'t find a tweet from provided URL, try again' } })
    }
  }

}

export { handler }