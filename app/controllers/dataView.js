var args = arguments[0] || {};
var Cloud = require('ti.cloud');
var selView = Ti.App.selView;
Cloud.Objects.query({
	
        classname : 'lecture',
 where: {classID:Ti.App.cur_cid}   
}, function(e){
	if(e.success){
		for (i = 0; i < e.lecture.length;i++ ){
			//var sname = e.subsTo[i];
			var lec = e.lecture[i];
			var ltxt = "■ " + lec.LecText;
			var lab1 = Titanium.UI.createLabel({
			text : ltxt,
			class : "listitem",
		 });
		$.addClass(lab1,"listitem");
		$.scrollView1.add(lab1);
			
			
			//showStudents(sname.studentname);
		}
		
	//classes = e.name;
	//alert('asdf'+e.subsTo.length);
	} else{
		alert('Error: ' + e.error + e.message);
	}
	
});