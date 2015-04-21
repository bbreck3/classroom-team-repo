var args = arguments[0] || {};


 
var instructor= Ti.UI.createWindow({
  id : 'instructor',
	color: 'white',
});
var welcome = Titanium.UI.createLabel({
		text : 'Welcom instructor',
		
		id: 'welcome',
		
	});
	
var classes = Titanium.UI.createLabel({
		text:'Clases:',
		
		id:'instr_classes',
		
});

var announcements = Titanium.UI.createLabel({
		text:'Announcements:',
		
		id:'instr_announcements',
		
});

var instr_due_dates = Titanium.UI.createLabel({
		text:'Due Dates:',
		
		id:'intr_due_dates',
		
});




