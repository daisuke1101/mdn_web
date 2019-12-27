var date = new Date(Date.UTC(2019, 11, 26, 3, 0, 0));

var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
console.log(new Intl.DateTimeFormat('de-DE', options).format(date));

options.timeZone = 'UTC';
options.timeZoneName = 'short';
console.log(new Intl.DateTimeFormat('en-US', options).format(date));

options = {
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  timeZone: 'Australia/Sydney',
  timeZoneName: 'short'
};
console.log(new Intl.DateTimeFormat('en-AU', options).format(date));

options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  hour12: false,
  timeZone: 'America/Los_Angeles'
};
console.log(new Intl.DateTimeFormat('en-US',options).format(date));

console.log(new Intl.DateTimeFormat('default',options).format(date));


