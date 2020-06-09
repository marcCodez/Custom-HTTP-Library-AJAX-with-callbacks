// Instead of creating the 'xhr' object, xhr.open, xhr.onload etc we'll be using this.http
function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make a HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
    // Just like xhr.open but in oop version
this.http.open('GET', url, true);

// since 'this' pretains to that function, it is a different scope to the 'this' in the outer function
// to fix this through ES5 by setting a variable equal to 'this', to capture that this in this scope
// the es6 way is through an arrow function which adds a lexical this

let self = this;
this.http.onload = function() {
    if(self.http.status === 200){
        // To handle errors, first param will be the error
        callback(null, self.http.responseText);
    } else {
        callback(`Error: ${self.http.status}`);
    }

}

this.http.send();

}
// Make a HTTP POST Request
// Make a HTTP PUT Request
// Make a HTTP DELETE Request