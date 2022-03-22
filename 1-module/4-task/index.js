function checkSpam(str) {
  let LowerStr = str.toLowerCase();
  if (LowerStr.includes('1xbet') || LowerStr.includes('xxx')) return true;
  else return false;
} 