const apiKey = process.env.REACT_APP_CAT_API_KEY;

export async function getCats() {
  try {

    console.log(apiKey)

    const response = await fetch(`https://api.thecatapi.com/v1/breeds?api_key=${apiKey}`);
    if (!response.ok) {
      throw new Error('We\'re sorry, there was an error fetching your cats. Please try again later.');
    }
    const data = await response.json();
    console.log(data, 'GET DATA'); 
    return data; 
  } catch (error) {
    console.error('ERROR FETCHING DATA:', error.message);
    throw error;
  }
}