
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
//Alloy.Globals.dash = $.dash;
//$.dash.open();


var button = Titanium.UI.createButton({
   title: 'Hello',
   top: 10,
   width: 100,
   height: 50
});
$.course1.addEventListener('longpress', function() {
	login('course1');
});
$.course1.addEventListener('click', function() {
	var win=Alloy.createController('classes').getView();
 	win.open();
});

function login(course){
	alert('Login Successful!');
};
button.addEventListener('click',function(e)
{                                                                                                                                                                                                      
    Alloy.Globals.dash = $.container;

		$.dash.open();
});

var view_course = Titanium.UI.createImageView({
	
	title: 'Hello',
   top: 10,
   width: 100,
   height: 50,
   backgroundImage:"/images/download.jpg",
   
});





