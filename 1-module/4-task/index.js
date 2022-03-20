function checkSpam(str) {
  let LowerStr = str.toLowerCase();
  if (LowerStr.includes('1xbet') || LowerStr.includes('xxx')) return true;
  else return false;
} 
alert( checkSpam('1XbeT now') );
alert( checkSpam('free xXXxx') );
alert( checkSpam("innocent rabbit") );