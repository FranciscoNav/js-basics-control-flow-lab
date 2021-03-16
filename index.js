function scuberGreetingForFeet(distance){
  if (distance >= 2500){return 'No can do.';}
  else if (distance >= 2000){return 'I will gladly take your thirty bucks.';}
  else if (distance <= 400){return 'This one is on me!';}  
}

function ternaryCheckCity(location){
  let cityResult;
  location === 'NYC' ? (cityResult = 'Ok, sounds good.') : (cityResult = 'No go.')
  return cityResult;
}

function switchOnCharmFromTip(tip){
 
  switch(tip){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}