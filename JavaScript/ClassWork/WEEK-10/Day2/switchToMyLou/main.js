/******************************/

// days of the week

function dayOfWeek(day) {
  switch(day){
      case 1: return "Monday"
      break;
      case 2: return "Tuesday"
      break;
      case 3: return "Wednesday"
      break;
      case 4: return "Thursday"
      break;
      case 5: return "Friday"
      break;
      case 6: return "Saturday"
      break;
      case 7: return "Sunday"
      break;
      default: return "This is not a Day" 
  }
}
console.log(dayOfWeek(4))

// season identification

function identifySeason(Season){
  switch(Season) { 
 case 12: 
 case 1:
 case 2: {
  return "Winter"
   break
 }
 case 3:
 case 4:
 case 5: {
  return "Spring"
 break
  }
 case 6:
 case 7:
 case 8: { 
 return "Summer"
 break
 }
 case 9:
 case 10:
 case 11: {
  return "Autumn"
 break
  }
  default: return ("there are only 12 months for 4 seasons")
 }
}
console.log(identifySeason(12))

// menu selection

let other = "Invalid choice"

function menuSelection(selection){
  switch(selection){
    case 1: { return "Option 1 selected"
    break
  }
    case 2: { return "Option 2 selected"
    break
}
    case 3: { return "Option 3 selected"
    break
  }
    default: return other;
}
}

console.log(menuSelection(4))

 
 





/****************************/
// Our code here. Don't touch!
if (typeof dayOfWeek === 'undefined') {
    dayOfWeek = undefined
  }
  
  if (typeof identifySeason === 'undefined') {
    identifySeason = undefined
  }
  
  if (typeof menuSelection === 'undefined') {
    menuSelection = undefined
  }

  
  
  module.exports = {
    dayOfWeek, 
    identifySeason, 
    menuSelection
  }
  