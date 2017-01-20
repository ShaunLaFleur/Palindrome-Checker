
$("button").click(function(){
	isPalin($("#input-string").val());
});



function isPalin(string) {
// Make all lower case for case insensitivity and replace all spaces, underscores and non-words.
if(string) {
  string = string.toString(); // For numbers
  string = string.toLowerCase().replace(/\s+/g, "").replace(/\W/g,"").replace(/_/g,"");
} 
if(!string || string.length === 1) {
    $("#result").html("Invalid string or string length.");
    return "String is undefined or has invalid length.";
}
for(i=0; i<=Math.floor(string.length/2-1); i++) {
	  if(string[i] !== string[string.length-1-i]) {
	    $("#result").html("Your string is not a palindrome!");
	    $("#result").css("color","red");
	    break;
	  } else if(i === Math.floor(string.length/2-1)) {
	    $("#result").html("Your string is a palindrome!");
	    $("#result").css("color","green");
	  }
	}
}