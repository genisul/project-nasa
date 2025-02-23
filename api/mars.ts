export async function GET(request: Request) {
  const apikey = process.env.VITE_API_KEY

  console.log('apikey', apikey)

  const targetUrl = new URL('https://mars.nasa.gov/rss/api/')
  targetUrl.searchParams.set('api_key', apikey!)

  const query = request.url.split('?')[1]

  console.log('query', query)

  console.log('targeturl', targetUrl.toString())

  try {
    const fetchRes = await fetch(
      targetUrl.toString() + (query ? '&' + query : ''),
    )
    const data = await fetchRes.json()

    console.log('data', data)

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error'
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
    })
  }
}
