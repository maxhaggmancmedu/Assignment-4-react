export default (query) => {
    return fetch('https://api.disneyapi.dev/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {
          
        },
      })
    })
  }