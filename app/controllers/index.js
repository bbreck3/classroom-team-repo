
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
var duedates =[
'CMSC 491: Assignment Due 5/2"', 
'CMSC 521: Individual Project 5 Due 5/6', 
'CMSC 491: Homework #2 due 5/7',
'CMSC 521: Group Project Report Due 5/6', 
];
for (b = 0; b<3;b++){
	

for (a = 0; a<announce.length;a++){
	var ltxt = "■ " + announce[a];
	var lab1 = Titanium.UI.createLabel({
		text : ltxt,
		class : "listitem",
		 });
		$.addClass(lab1,"listitem");
		$.scrollView1.add(lab1);
		
	//add acrollvew dynamcally here
	}
	//dash.add(scrollAnnounce);
for (a = 0; a<duedates.length;a++){
	
	var ltxt = "■ " + duedates[a];
	var lab1 = Titanium.UI.createLabel({
		text : ltxt,
		class : "listitem",
		 });
		$.addClass(lab1,"listitem");
		$.scrollView2.add(lab1);
		
	//add acrollvew dynamcally here
	}	
}	





