var args = arguments[0] || {};

var win=Alloy.createController('instructor_view').getView();
 win.open();
 
var instructor= Ti.UI.createWindow({
  id : 'instructor',
});
var lab1 = Titanium.UI.createLabel({
		text : 'Welcom instructor',
		class : "listitem",
		id: 'test',
		});




