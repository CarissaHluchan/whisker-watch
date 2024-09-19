const apiKey = process.env.REACT_APP_CAT_API_KEY;

// export function getCats() {
//     return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${apiKey}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('We\'re sorry, there was an error fetching your cats. Please try again later.')
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log(data, 'GET DATA')
//         return data;
//       })
//       .catch(error => {
//         console.error('ERROR FETCHING DATA:', error)
//         throw error
//       });
// }

export async function getCats() {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/breeds?api_key=${apiKey}`);

    if (!response.ok) {
      // Throw an error if the response status is not OK
      throw new Error('We\'re sorry, there was an error fetching your cats. Please try again later.');
    }

    const data = await response.json(); // Convert the response to JSON
    console.log(data, 'GET DATA'); // Log the data for debugging
    return data; // Return the data to be used by the calling code

  } catch (error) {
    // Handle and log the error
    console.error('ERROR FETCHING DATA:', error.message);
    throw error; // Re-throw the error if needed for further handling by the caller
  }
}