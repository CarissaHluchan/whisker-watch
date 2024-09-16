const apiKey = process.env.REACT_APP_CAT_API_KEY;

export function getCats() {
    return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${apiKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('We\'re sorry, there was an error fetching your cats')
        }
        return response.json();
      })
      .then(data => {
        console.log(data, 'GET DATA')
        return data;
      })
      .catch(error => console.error('ERROR FETCHING DATA:', error));
}