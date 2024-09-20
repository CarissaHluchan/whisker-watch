const apiKey = process.env.REACT_APP_CAT_API_KEY;

export async function getCats() {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/breeds?api_key=${apiKey}`);
    if (!response.ok) {
      const err = new Error(response.statusText)
      err.statusCode = response.status
      throw err
    }
    const data = await response.json();
    console.log(data, 'GET DATA'); 
    return data; 
  } catch (error) {
    console.error('ERROR FETCHING DATA:', error.message);
  }
}