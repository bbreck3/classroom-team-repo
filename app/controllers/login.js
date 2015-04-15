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
        alert('Success:\n' +
            'id: ' + user.id + '\n' +
            'sessionId: ' + Cloud.sessionId + '\n' +
            'user name: ' + user.username + '\n' +
            'password: ' + user.password);
            var dash=Alloy.createController('index').getView();
    	Alloy.Globals.dash = $.dash;
		dash.open();
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
}
function createUser_view(e){
	
	var dash =Alloy.createController('create_user').getView();
    	Alloy.Globals.dash = $.dash;
		dash.open();
}









  