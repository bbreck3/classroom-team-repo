var args = arguments[0] || {};
var Cloud = require('ti.cloud');
$.addcourse.addEventListener('click', function() {
		var cid = $.addcourseID.value;
		Cloud.Objects.query({
		
        classname : 'classes',
		 where: {classID :cid}   
},		function(e){
			//alert(typeof e.classes);
			if(e.success &&  typeof e.classes[0] != "undefined"){
			//var classes = e.name;
			//console.log(classes);
			
			Cloud.Objects.create({
		          classname : 'subsTo',
		          fields : {
		            classID : cid,
		            studentname : Ti.App.username
		           
		          }
		        }, function(e) {
		          if(e.success) {
		            alert(classes + "has been added CID:" + cid);
		            
		            Alloy.createController('index').getView().open();
		            
		          } else {
		            alert('Error: ' + ((e.error && e.message) || JSON.stringify(e)));
		          }
		        }); 
	//alert('asd'+e.classes.length);
	} else{
		alert('Error: Invalid Class ID');
	}
});	
});
