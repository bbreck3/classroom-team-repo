//var args = arguments[0] || {};
var Cloud = require('ti.cloud');
var a_test = "announcement 1 from instructor";
var dd_test = "due dates 1 from instructor";
var random_val ="";

 
var instr= Ti.UI.createWindow({
  id : 'instr',
	color: 'black',
});

instr.open();

var instr_dd =Ti.UI.createLabel({
	id:'instr_due_dates',
	left:"10%",
	top:"20%",
	color:"white",
	text:'Dues Dates',
});




var instr_ann =Ti.UI.createLabel({
	id:'instr_anncouncements',
	left:"10%",
	top:'30%',
	color:"white",
	text:'Annuucements',
});



var instr_classes =Ti.UI.createLabel({
	id:'instr_classes',
	left:"10%",
	top:'10%',
	color:"white",
	text:'Classes',
});

var hintText = Ti.UI.createLabel({
    text : 'Enter your name',
    color : 'green',
    font : {
        fontSize : 12
    },
    backgroundColor : 'white',
    height : 35,
    width : 240,
 
});

var ann_tf = Ti.UI.createTextField({
	id:"instr_a_tf",
	top:"50%",
	right:"10%",
	width:"50%",
	color:hintText.color,
});


var due_tf = Ti.UI.createTextField({
	id:"instr_dd_tf",
	top:"60%",
	right:"10%",
	width:"50%",
	color:hintText.color,
});

var button = Ti.UI.createButton({
	id: 'submit',
	title: 'Submit',
	top:"80%",
	width:"20%",
	right:"10%",
	
});

var rand = Ti.UI.createButton({
	id:'random',
	title: 'Random',
	top:"90%",
	width:"20%",
	right:"10%",
});

/*button.addEventListener('click', function(){
		alert('Anouncement: ' +ann_tf.value + 'Due Dates: ' + due_tf.value);
		Ti.API.info("Tesing Event Listenere");
});*/


/*function submit(e){
alert('Anouncement: ' +a_test + 'Due Dates: ' + dd_test);
		//Ti.API.info("Tetsing fuction call");	
		
		Cloud.Objects.update({
		classname: 'announce',
		id: '553693c47eead2058677f96c',  
		fields:{
			announceText: a_test,
			due
		}
		
	
}, function(e){
	if(e.success){
		alert('Success!');
	} else {
		alert("Error: \n" + 
				((e.error && e.message) || JSON.stringify(e)));
	}
});
};*/

function submit(e){
	
	alert('Anouncement: ' +a_test + 'Due Dates: ' + dd_test);
		//Ti.API.info("Tetsing fuction call");	
		
		Cloud.Objects.update({
		classname: 'dueDates',
		id: '55369366de9cf38e1874fbc8',  
		fields:{
			dueText: dd_test,
		
		}
		
	
}, function(e){
	if(e.success){
		alert('Success!');
	} else {
		alert("Error: \n" + 
				((e.error && e.message) || JSON.stringify(e)));
	}
});
};

function random(minVal, maxVal){
	var minVal =1;
	var maxVal=20;
	alert("minVal: " + minVal + "maxVal: " +maxVal);
	var randVal = minVal+(Math.random()*(maxVal-minVal)); 

var random_Val=Math.round(randVal);
alert('random val: ' + random_Val);
};


		




/*button.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
});*/


instr.add(instr_classes);
instr.add(instr_ann);
instr.add(instr_dd);
instr.add(ann_tf);
instr.add(due_tf);
instr.add(button);
