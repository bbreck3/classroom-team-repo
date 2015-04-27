var args = arguments[0] || {};
var Cloud = require('ti.cloud');
Cloud.Objects.query({
	
        classname : 'subsTo',
 where: {classID:Ti.App.cur_cid}   
}, function(e){
	if(e.success){
		for (i = 0; i < e.subsTo.length;i++ ){
			var sname = e.subsTo[i];
			showStudents(sname.studentname);
		}
		
	//classes = e.name;
	//alert('asdf'+e.subsTo.length);
	} else{
		alert('Error: ' + e.error + e.message);
	}
	
});

function showStudents(sname){

	var button = $.UI.create('Button',{
   		title: sname,
   		classes : ['emailbox']
   		

});
button.addEventListener('click', function() {
	var makeEmail = name + '@vcu.edu';
	//var makeSub = '[' + 
	var emailDialog = Ti.UI.createEmailDialog()
		emailDialog.subject = "Hello from Titanium";
		emailDialog.toRecipients = ['[ClassMate]'];
		//emailDialog.messageBody = '<b>Appcelerator Titanium Rocks!</b>';
		//var f = Ti.Filesystem.getFile('cricket.wav');
		//emailDialog.addAttachment(f);
		emailDialog.open();
});
$.emailscroll.add(button);
}
