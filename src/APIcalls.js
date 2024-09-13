const apiKey = process.env.REACT_APP_CAT_API_KEY;

export function getCats() {
    return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching data:', error));
}