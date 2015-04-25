//var args = arguments[0] || {};


 
var instr= Ti.UI.createWindow({
  id : 'instr',
	color: 'white',
});

instr.open();
var welcome = Titanium.UI.createLabel({
		text : 'Welcom instructor',
		
		id: 'welcome',
		
	});
	
var classes = Titanium.UI.createLabel({
		text:'Clases:',
		
		id:'instr_classes',
		
});


instr.add(classes);

var announcements = Titanium.UI.createLabel({
		text:'Announcements:',
		
		id:'instr_announcements',
		
});
instr.add(announcements);

var instr_due_dates = Titanium.UI.createLabel({
		text:'Due Dates:',
		
		id:'intr_due_dates',
		
});
instr.add(instr_due_dates);


var button= Titanium.UI.createButton({
	text:'Submit',
	id:'btn_instr_submit',
	
});

var txtFld_ann = Titanium.UI.createTextField({
    id:'instr_ann_update',
    hintText:'Enter an Update',
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
});
instr.add(txtFld_ann);


var txtFld_due_dates = Titanium.UI.createTextField({
    id:'instr_due_update',
    hintText:'Enter an update',
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
});

instr.add(txtFld_due_dates);


/*button.addEventListener('click',function(e){
	//alert('Picker choice: ' + ' \n anouncement: ' + txtFld_ann.value + '\n Due Dates: ' + txtFld_due_dates.value  );
	alert('testing');
});
instr.add(button);*/

function display_info(e){
	alert('Picker choice: ' + ' \n anouncement: ' + txtFld_ann.value + '\n Due Dates: ' + txtFld_ann.value  );
	Titanium.API.info('testing announcements: ' + txtFld_ann.value);

}



