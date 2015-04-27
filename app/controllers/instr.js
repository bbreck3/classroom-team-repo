//var args = arguments[0] || {};
var Cloud = require('ti.cloud');
var a_test = "announcement 1 from instructor";
var dd_test = "due dates 1 from instructor";
var random_val ="";

 
/*var instr= Ti.UI.createWindow({
  id : 'instr',
	color: 'black',
});*/

//instr.open();

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

/*var picker = Ti.UI.createPicker({
  top:'10%',
	right: "10%",
	width:"40%",
	
	selectionIndicator: true,
	id:'class_picker',
});*/

/*var col = Ti.UI.createPickerColumn();  //createPickerColumn();
	for(i=0; i<=5; i++){
		col.addRow(Ti.UI.createPickerRow({title: i}));
	};

picker.selectionIndicator = true;*/
/*var data = [];
data[0] = Ti.UI.createPickerRow({title: CMSC-491, val:CMSC-491});
data[1] = Ti.UI.createPickerRow({title: CMSC-420, val:CMSC-420});
data[2] = Ti.UI.createPickerRow({title: MATH-301, val:MATH-301});
data[3] = Ti.UI.createPickerRow({title: MATH-310, val:MATH-310});*/
  
  
  /*<PickerRow title="CMSC 491"/>
                <PickerRow title="CMSC 420"/>
                <PickerRow title="MATH 310"/>
                 <PickerRow title="MATH 301"/>*/
//picker.add(data);

var picker = Ti.UI.createPicker({
  top:50
});

var data = [];
data[0]=Ti.UI.createPickerRow({title:'CMSC 491'});
data[1]=Ti.UI.createPickerRow({title:'CMSC 420'});
data[2]=Ti.UI.createPickerRow({title:'MATH 301'});
data[3]=Ti.UI.createPickerRow({title:'MATH 310'});




picker.selectionIndicator = true;


// must be after picker has been displayed
//picker.setSelectedRow(0, 2, false); // select Mangos










var test_lab = Ti.UI.createLabel({
		
	bottom:"10%",
		text:"Picker Choice",
	left: "10%",
});



Ti.API.info(test_lab.text = picker.getSelectedRow(picker.setSelectedRow(0,1,false)));

picker.addEventListener('change', function(e){
	test_lab.text;
	
});

/*function picker_selection(e){
	alert("testing");
	alert("picker selection: " + test_lab.text);
	
}*/
//instr.add(picker);
//instr.add(test_lab);
/*button.addEventListener('click', function(){
		alert('Anouncement: ' +ann_tf.value + 'Due Dates: ' + due_tf.value);
		Ti.API.info("Tesing Event Listenere");
});*/

alert($.instr_a_tf.value + " " + $.instr_dd_tf.value);

function submit(e){
alert('Anouncement: ' + $.instr_a_tf.value + 'Due Dates: ' + $.instr_dd_tf.value);
		//Ti.API.info("Tetsing fuction call");	 $.instr_dd_tf.value
		
		Cloud.Objects.update({
		classname: 'announce',
		id: '55369366de9cf38e1874fbc8',  
		fields:{
			announceText: a_test,
	
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

/*function submit(e){
	
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
};*/

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


/*instr.add(instr_classes);
instr.add(instr_ann);
instr.add(instr_dd);
instr.add(ann_tf);
instr.add(due_tf);
instr.add(button);


instr.add(picker);

picker.add(data);
instr.add(test_lab);*/