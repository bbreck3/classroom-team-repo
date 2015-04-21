var args = arguments[0] || {};
var Cloud = require('ti.cloud');
$.addcheck.addEventListener('click', function() {
		var checkinCode = $.checkinID.value;
		var cid = Ti.App.cur_cid;
		Cloud.Objects.query({
		
        classname : 'classes',
		 where: {classID :cid, checkin : checkinCode }   
},		function(e){
			//alert(typeof e.classes);
			if(e.success &&  typeof e.classes[0] != "undefined"){
			//var classes = e.name;
			//console.log(classes);
			
			Cloud.Objects.create({
		          classname : 'userCheck',
		          fields : {
		            classID : cid,
		            studentname : Ti.App.username,
		            code : checkinCode
		           
		          }
		        }, function(e) {
		          if(e.success) {
		            alert(classes + ": Check in successful!");
		            
		            Alloy.createController('index').getView().open();
		            
		          } else {
		            alert('Error: ' + ((e.error && e.message) || JSON.stringify(e)));
		          }
		        }); 
	//alert('asd'+e.classes.length);
	} else{
		alert('Error: Invalid Checkin ID');
	}
});	
});