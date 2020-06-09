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
easyHTTP.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true);
// Need to set the content type which is done in the header
// option we want to set is content-type and the value is application/json
this.http.setRequestHeader('Content-type', 'application/json');

let self = this;
this.http.onload = function() {
  // Dont need to check the status for a POST request
        callback(null, self.http.responseText);
  

}

// When you're sending data, this is just going to be a regular JS object so we need to convert it
    this.http.send(JSON.stringify(data));
}
// Make a HTTP PUT Request
// Pretty much identical to POST
easyHTTP.prototype.put = function(url, data, callback){
    this.http.open('PUT', url, true);
// Need to set the content type which is done in the header
// option we want to set is content-type and the value is application/json
this.http.setRequestHeader('Content-type', 'application/json');

let self = this;
this.http.onload = function() {
  // Dont need to check the status for a POST request
        callback(null, self.http.responseText);
  

}

// When you're sending data, this is just going to be a regular JS object so we need to convert it
this.http.send(JSON.stringify(data));
}

// Make a HTTP DELETE Request
// Similar to GET
easyHTTP.prototype.delete = function(url, callback) {
    // Just like xhr.open but in oop version
this.http.open('DELETE', url, true);

// since 'this' pretains to that function, it is a different scope to the 'this' in the outer function
// to fix this through ES5 by setting a variable equal to 'this', to capture that this in this scope
// the es6 way is through an arrow function which adds a lexical this

let self = this;
this.http.onload = function() {
    if(self.http.status === 200){
        // To handle errors, first param will be the error
        // Instead of returning an empty object, we'll return string "Post Deleted"
        callback(null, 'Post Deleted');
    } else {
        callback(`Error: ${self.http.status}`);
    }

}

this.http.send();

}