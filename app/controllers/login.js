var args = arguments[0] || {};
var Cloud = require('ti.cloud');	

function checkLogin(e){
	
	Cloud.Users.login({
	//ogin: 'dummy variable for testing',	
    login: $.username.value,
    password: $.password.value,
}, function (e){
    if (e.success) {
        var user = e.users[0];
        
    	if(user.admin==='true'){  // if the user is an admin meaning instructor branch of to instructor
    		alert('Success:\n' +
            'id: ' + user.id + '\n' +
            'sessionId: ' + Cloud.sessionId + '\n' +
            'user name: ' + user.username + '\n' +
            'password: ' + user.password);
            Ti.App.username = user.username;
            var dash=Alloy.createController('instructor_view').getView(); // if the user is admin. then create a new path for the instructor -----   the instructor view is the only view for the instructor
            Ti.App.Properties.setString('id', user.id);
    	Alloy.Globals.dash = $.dash;
		dash.open();
    	}
    	else{    
    // if the above is fails then the user must be a standard user or student the branch of into student ...this is working correctly
        alert('Success:\n' +
            'id: ' + user.id + '\n' +
            'sessionId: ' + Cloud.sessionId + '\n' +
            'user name: ' + user.username + '\n' +
            'password: ' + user.password);
            Ti.App.username = user.username;
            var dash=Alloy.createController('index').getView();
            Ti.App.Properties.setString('id', user.id);
    	Alloy.Globals.dash = $.dash;
		dash.open();
    } 
    
    	// loads even if no error occures
        /*alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));*/
    }
});
};
function createUser_view(e){
	
	var dash =Alloy.createController('create_user').getView();
    	Alloy.Globals.dash = $.dash;
		dash.open();
}









  