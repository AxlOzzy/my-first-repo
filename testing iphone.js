// is it ok to code here ion iphone git hub?
// git the time sone from the browser
// Retrieve the time zone of the user
function getUserTimeZone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

// Example usage
const userTimeZone = getUserTimeZone();
console.log("User's time zone:", userTimeZone);
getUserTimeZone()
