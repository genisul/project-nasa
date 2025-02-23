export async function GET(request: Request) {
  const apikey = process.env.VITE_API_KEY

  const targetUrl = new URL('https://api.nasa.gov/planetary/apod')
  targetUrl.searchParams.set('api_key', apikey!)

  const query = request.url.split('?')[1]

  try {
    const fetchRes = await fetch(
      targetUrl.toString() + (query ? '&' + query : ''),
    )
    const data = await fetchRes.json()

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
