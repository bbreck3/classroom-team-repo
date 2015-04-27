var args = arguments[0] || {};
var Cloud = require('ti.cloud');	

function checkLogin(e){
	
	Cloud.Users.login({
	//ogin: 'dummy variable for testing',	
    login: $.username.value,
    password: $.password.value,
}, function (e) {
    if (e.success) {
        var user = e.users[0];
        //the following alert is soley for testing purpose as to ensure that current user is infact a admin or professor user
        // --> Sam the current admin testing acount is: UserName: testAdmin, Password: password
        
        
        if(user.admin==='true'){
        	alert('admin/instructor user');
        	 alert('Success:\n' +
            'id: ' + user.id + '\n' +
            'sessionId: ' + Cloud.sessionId + '\n' +
            'user name: ' + user.username + '\n' +
            'password: ' + user.password);
            Ti.App.username = user.username;
            var instr=Alloy.createController('instr').getView();
            
            Ti.App.Properties.setString('id', user.id);
    	//Alloy.Globals.dash = $.instr;
		instr.open();
        } else  if(user.admin==='false'){
        	//the following alert is soley for testing purpose as to ensure that current user is infact a non admin or "student" user
        	alert('standard/student user');
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
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
    }
});
}
function createUser_view(e){
	
	var dash =Alloy.createController('create_user').getView();
    	Alloy.Globals.dash = $.dash;
		dash.open();
}









  