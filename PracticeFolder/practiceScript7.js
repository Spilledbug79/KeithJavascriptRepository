 
// let string = 'computer'

// fetch(`https://emoji-api.com/emojis?search=${string}&access_key=0037c9794745ff1ccdf7425677fa8925df9c51d6`)


// .then(response => {

//     if(!response.ok){
//         throw new Error('Could not fetch resource')
//     }
//     return response.json();
//   }) 
//   .then(data => console.log(data))
//   .catch(error => console.error(error))


//----------------------------------------------------------------------------------------------------------
 
async function fetchData(){
  try{
      let string = 'computer'
 
      const response = await fetch(`https://emoji-api.com/emojis?search=${string}&access_key=0037c9794745ff1ccdf7425677fa8925df9c51d6`)

      if(!response.ok){
        throw new Error("Could not fetch resource")
      }

     const data = await response.json()
      console.log(data)
     
 }
  catch(error){
    console.error(error)
  }
}
fetchData()

 //----------------------------------------------------------------------------------------------------------
 
// const urls = [
//   'https://perenual.com/api/v2/species-list?key=sk-gwLK67f5aee2290419618&cycle=perennial',
//   'https://perenual.com/api/v2/species-list?key=sk-gwLK67f5aee2290419618&watering=frequent',
//   'https://pokeapi.co/api/v2/pokemon/bulbasaur'
// ];
// const fetchData = async () => {
//   try {
//     const responses = await Promise.all(
//       urls.map(url => fetch(url).then(response => {
//         if (!response.ok) {
//           throw new Error(`Failed to fetch: ${response.url}`);
//         }
//         return response.json();
//       }))
//     );


    
//     console.log(responses); // Array of parsed JSON responses
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };
// fetchData();

 
 
 

 
