
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
var dash = Ti.UI.createWindow({
  id : 'dash',
});
var announce =[
'CMSC 491: Class is Cancelled 5/2', 
'CMSC 521: Due date extended for project', 
'CMSC 491: Final Exam review is tomorrow',
'CMSC 256: Notes from last class have been posted'
];
for (a = 0; a<announce.length;a++){
	var lab1 = Titanium.UI.createLabel({
		text : announce[a],
		 });
		$.scrollView.add(lab1);
		
	//add acrollvew dynamcally here
	}
	//dash.add(scrollAnnounce);
	
	





