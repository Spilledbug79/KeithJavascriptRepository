// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

// 1. is administrator

//  let obj = {
//     firstName: 'Jeff',
//     lastName: 'Wilson', 
//     userRole: "dffd"
//  }
 
// function isAdmin(obj){
// return obj.userRole === "ADMIN";
// }

// console.log(isAdmin(obj));

// 2. getEmail

 

function getEmail(person) {
    let firstInitial = person.firstName.toLowerCase()[0];  let lastName = person.lastName.toLowerCase();
    return `${firstInitial}${lastName}.prsvr@gmail.com`; 
     

}
 console.log(getEmail({
    firstName: 'Keith',
    lastName: 'Eatherly'
})) 

// // 3. get playlist

// let record = {
//     name: 'hits',
//     songs: ['The Distance', 'Ruby Tuesday', 'Old Town Road(remix)']
// }

// function getPlaylistLength(record) {
// //  let playlistLength = record.songs.length;
// //  return playlistLength;
// return playlist.songs.length;
//     }
// console.log(getPlaylistLength(record))
 
 

 
 // 4. get hardest homework

// function getHardestHomework(arr){
//     if (arr.length === 0) {
//         return '';
//     } 
//     let hardestHomework = arr[0].name;
      
//     let lowestScore = arr[0].averageScore;
      
//       for (let i= 1; i < arr.length; i++) {
        
//         if ( arr[i].averageScore < lowestScore) {
            
//             lowestScore = arr[i].averageScore;
//             hardestHomework = arr[i].name;
            
//         }
//       } return hardestHomework;
//     }
//     console.log(getHardestHomework([
//         { name: 'hip-hip-array', averageScore: 12 },
//         { name: 'wait-i-object', averageScore: 200 },
//         { name: 'objective-reasoning', averageScore: 25 }
//     ]));

    // 5. Create a phone book

//    function createPhonebook(names, numbers){
//     let phonebook = {};
//     for(let i = 0;i <names.length; i++){
//         phonebook[names[i]] = numbers[i];
//     }
//     return phonebook;
//    }
//    console.log(createPhonebook(['Jimothy', 'Maria', 'Karl'], ['123-456-7890', '000-000-0000', '999-888-7766']))
     
      
      
        



 

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};