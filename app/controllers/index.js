var Cloud = require('ti.cloud');
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


 Cloud.Users.showMe(function (e) {
    if (e.success) {
        var user = e.users[0];
        alert('Success:\n' +
            'idAA: ' + user.id);
            Ti.App.username = user.username;
             // classList = user.subscribed;
//              
            // for (a = 0; a<classList.length;a++){
            	// var x = classList[a];
            	// genBox(x);
            	// } 
            //genBox(classList[a],'Cmsc');
    } else {
        //alert('Error:\n' +
            //((e.error && e.message) || JSON.stringify(e)));
            Ti.App.username = '';
            var win=Alloy.createController('login').getView();
 win.open();
    }
});

function genBox(name, cid, i){
	//alert(cid +' genbox' + i);
	
	var colorID = 'course'  + i; 
	//alert('colderid' + colorID);
	var button = $.UI.create('Button',{
   		title: name,
   		classes : ['classbox',colorID]
   		

});
button.addEventListener('click', function() {
	Ti.App.cur_cid = cid;
 	Ti.App.cur_name = name;
	
	var win=Alloy.createController('classes').getView();
 	win.cid = cid;
 	
 	win.open();
});


$.classes.add(button);
}
var classList = new Array();
function getNames(cid,i){
	//alert(cid +': getnames cid')
	Cloud.Objects.query({
	
        classname : 'classes',
 		where: {classID :cid}   
		}, function(f){
			if(f.success){
			var cname = f.classes[0];
			//alert('cname'+cname.name);
			genBox(cname.name, cid,i);
	} else{
			alert('Error: ' + f.error + f.message);
	}
});;
}
Cloud.debug = true;	
Cloud.Objects.query({
	
        classname : 'subsTo',
 where: {studentname:Ti.App.username}   
}, function(e){
	if(e.success){
		for (i = 0; i < e.subsTo.length;i++ ){
			var cid = e.subsTo[i];
			getNames(cid.classID,i);
		}
		
	classes = e.name;
	//alert('asdf'+e.subsTo.length);
	} else{
		alert('Error: ' + e.error + e.message);
	}
	
});


  
$.addcourse.addEventListener('click', function() {
	
	var setwin =Alloy.createController('settings').getView();
 setwin.open();}
 );

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





