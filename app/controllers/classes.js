var args = arguments[0] || {};
var Cloud = require('ti.cloud');
Cloud.debug = true;	
var cid = Ti.App.cur_cid;

$.coursename.setText(Ti.App.cur_name);
Cloud.Objects.query({
		
        classname : 'classes',
 where: {classID :cid}   
}, function(e){
	if(e.success){
	classes = e.name;
	//alert('asd'+e.classes.length);
	} else{
		alert('Error: ' + e.error + e.message);
	}
});
$.msg.addEventListener('click', function() {
	// Ti.App.cur_cid = cid;
 	// Ti.App.cur_name = name;
	
	var wmsg=Alloy.createController('messages').getView();
 	wmsg.cid = cid;
 	
 	wmsg.open();
});
var getGrades =[
['Test 1',86.5],
['Homework 1', 67.2],
['Assignment 2', 96],
['Test 2', 75],
['Homework 3', 45],
['Assignment 4', 89.3]
];

// for (i = 0; i<getGrades.length;i++)
// {
	// var row = Ti.UI.createTableViewRow({
   	// height:'auto', 
    // layout:'vertical',
  // });
  // var name = Ti.UI.createLabel({text:"a"});
  // row.add(name);
  // $.grades.add(row);
//   
// }
$.lecture.addEventListener('click', function(evt) {
		var lec1 = Titanium.UI.createLabel({
			text : 'text'});
			Ti.App.selView = 'lecture';
 			//Ti.App.cur_name = name;
			//$.container.add(lec1);
			var check=Alloy.createController('dataView').getView();
 			check.cid = cid;
 	
 			check.open();

});

var announce =[
'CMSC 491: Class is Cancelled 5/2', 
'CMSC 521: Due date extended for project', 
'CMSC 491: Final Exam review is tomorrow',
'CMSC 256: Notes from last class have been posted'
];

var announce =[
'CMSC 491: Class is Cancelled 5/2', 
'CMSC 521: Due date extended for project', 
'CMSC 491: Final Exam review is tomorrow',
'CMSC 256: Notes from last class have been posted'
];

