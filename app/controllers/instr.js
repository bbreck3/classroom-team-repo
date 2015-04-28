//var args = arguments[0] || {};
var Cloud = require('ti.cloud');
var a_test = "announcement 1 from instructor";
var dd_test = "due dates 1 from instructor";
var random_val ="";
var result="";
var class_arr = new Array();

var class1;
 var class2;
  var class3;
 var class4;
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
$.picker = Ti.UI.createPicker({
  top:'10%',
	right: "10%",
	width:"40%",
	
	selectionIndicator: true,
	
});

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


/*var data = [];
data[0]=Ti.UI.createPickerRow({title:'CMSC 491'});
data[1]=Ti.UI.createPickerRow({title:'CMSC 420'});
data[2]=Ti.UI.createPickerRow({title:'MATH 301'});
data[3]=Ti.UI.createPickerRow({title:'MATH 310'});*/




// must be after picker has been displayed
//picker.setSelectedRow(0, 2, false); // select Mangos










var test_lab = Ti.UI.createLabel({
		
	bottom:"10%",
		text:"Picker Choice",
	left: "10%",
});

var logout = Ti.UI.createButton({
		 top:'10%',
	right: "10%",
	width:"40%",
	title:"Logout"
});
Ti.API.info(test_lab.text = picker.getSelectedRow(picker.setSelectedRow(0,1,false)));

/*picker.addEventListener('change', function(e){
	test_lab.text;
	
});*/

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



/**
 *
 *  The bellow pulls updates the Custom Objects for announcements and duedates;
 *  There has to be a better way to do it but this works for now....
 *  
 * 
 * 
 * This update Anouncements and and Due dates for "japplesseed".....
 *  
 */
function submit(e){
alert('Anouncement: ' + $.instr_a_tf.value + '\n Due Dates: ' + $.instr_dd_tf.value);
		//Ti.API.info("Tetsing fuction call");	 $.instr_dd_tf.value
		//Updates due Dates
		Cloud.Objects.update({
		classname: 'dueDates',
		id: '55369366de9cf38e1874fbc8',  
		fields:{
			announceText: $.instr_a_tf.value,
			dueText: $.instr_dd_tf.value
		}
		
	
}, function(e){
	if(e.success){
		alert('Success!');
	} else {
		alert("Error: \n" + 
				((e.error && e.message) || JSON.stringify(e)));
	}
});

//update announcements
Cloud.Objects.update({
		classname: 'announce',
		id: '553693c47eead2058677f96c',  
		fields:{
			announceText: $.instr_a_tf.value,
	
		}
		
	
}, function(e){
	if(e.success){
		alert('Success!');
	} else {
		alert("Error: \n" + 
				((e.error && e.message) || JSON.stringify(e)));
	}
});

}

		Cloud.Objects.query({
    classname: 'classes',
    page: 1,
    per_page: 10,
    where: {
        flag: 'true',
    }
}, function (e) {
    if (e.success) {
    	
    	
        /*alert('Success:\n' +
            'Count: ' + e.classes.length);*/
            
            
        for (var i = 0; i < e.classes.length; i++) {
        	var temp = e.classes[i];
            class_arr.push(temp.name);
            
           
                
        }
        /*for(var i = 0; i <class_arr.length; i++){
	
	alert(class_arr[i]);
}*/
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});


$.picker.selectionIndicator = true;
$.column1 = Ti.UI.createPickerColumn();

for(var i=0; i<class_arr.length; i++){
  var row = Ti.UI.createPickerRow({
    title: class_arr[i],
  });
  column1.addRow(row);
}





		


/*function updatePicker(picker,class_arr) {
    var firstregion;
    var regionsColumn = Ti.UI.createPickerColumn();
        var countriesColumn = Ti.UI.createPickerColumn();
    for (var regid in items) {
        if (!firstregion) {
            firstregion = regid;
        }
        regionsColumn.addRow(
            Ti.UI.createPickerRow({
                title : items[regid].name,
                regid :  regid
            })
        );
    }
    picker.add([regionsColumn,countriesColumn]);
    for (var countryid in items[firstregion].countries) {
        countriesColumn.addRow(
            Ti.UI.createPickerRow({
                title:items[firstregion].countries[countryid].name,
                countryid : countryid
            })
        );
    }*/
 
 
   /* picker.addEventListener('change',function(e) {
      // var countriesColumn = Ti.UI.createPickerColumn();;
       if (e.columnIndex==0) {  // regions
            var countries = items[e.row.regid].countries;
            for (var countryid in items[e.row.regid].countries) {
                countriesColumn.addRow(
                    Ti.UI.createPickerRow({
                        title     : items[e.row.regid].countries[countryid].name,
                        countryid : countryid
                    })
                );
            }
            picker.columns = [regionsColumn,countriesColumn];
            picker=Titanium.UI.createPicker();
            picker.reloadColumn(countriesColumn);
       }
 
 
    });
//  picker.add([regionsColumn,countriesColumn]);
    picker.selectionIndicator = true;
 
}*/


/*function submit(e){
	
	alert('Anouncement: ' +a_test + 'Due Dates: ' + dd_test);
		//Ti.API.info("Tetsing fuction call");	
		
		Cloud.Objects.update({
		classname: 'dueDates',
		id: '553693c47eead2058677f96c',  
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


/*
 * 
 *   Logout function below:
 * 		
 * 
 */

function logout(e){
	var login=Alloy.createController('login').getView();
	login.open();
};

/*
 * 
 * Function that computes a random character value to use for the check in value
 * 
 */
function random(minVal, maxVal){
	var minVal =1;
	var maxVal=61;
	var check_in_val_pool =[ 'a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
							'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
							'0,','1','2','3','4','5','6','8','9'];
	

	var randVal1;
	var randVal2;
	var randVal3;
	var randVal4;
	for(i=0; i<4; i++){
		var randVal1=check_in_val_pool[Math.round((Math.random()*(maxVal-minVal)))];  
		
		var randVal2= check_in_val_pool[Math.round((Math.random()*(maxVal-minVal)))]; 
		var randVal3 =check_in_val_pool[Math.round((Math.random()*(maxVal-minVal)))]; 
		var randVal4 = check_in_val_pool[Math.round((Math.random()*(maxVal-minVal)))]; 	
	}
	result= randVal1+"" +randVal2 +"" + randVal3 + ""+randVal4;	
	
alert('random val for checkin: ' +result );

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