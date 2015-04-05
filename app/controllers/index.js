
function doClick(e) {
    alert($.label.text);
}
/**
 * 		The below was supposed to open the "class.xml" for testing purposes. 
 * 
 * 				 it does not work, the coompler gives: "Error while parsing XML file"
 * 
 * 				It works fine without the "class.xml" but when adding the "class.xml" to the application neither "index.xml" nor "class.xmk" works
 * 
 */


var win=Alloy.createController('login').getView();
 win.open();




$.course1.addEventListener('longpress', function() {  // <-- once the user is logged in from the login screen, is it really neccessary to log them in again?
	login('course1');
});
$.course1.addEventListener('click', function() {
	var win=Alloy.createController('classes').getView();
 	win.open();
});

$.course2.addEventListener('click', function() {
	var win=Alloy.createController('classes').getView();
 	win.open();
});

$.course3.addEventListener('click', function() {
	var win=Alloy.createController('classes').getView();
 	win.open();
});

$.course4.addEventListener('click', function() {
	var win=Alloy.createController('classes').getView();
 	win.open();
});


function login(course){
	alert('Login Successful!');
};







