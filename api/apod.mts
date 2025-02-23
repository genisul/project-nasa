export async function GET(request: Request) {
  const apikey = process.env.VITE_API_KEY

  console.log('apikey', apikey)

  const targetUrl = new URL('https://api.nasa.gov/planetary/apod')
  targetUrl.searchParams.set('api_key', apikey!)

  const query = request.url.split('?')[1]

  console.log('query', query)

  // 필요하다면 query 매개변수도 추가
  Object.entries(query).forEach(([key, val]) => {
    targetUrl.searchParams.set(key, val)
  })

  console.log('targeturl', targetUrl.toString())

  try {
    const fetchRes = await fetch(targetUrl.toString())
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
