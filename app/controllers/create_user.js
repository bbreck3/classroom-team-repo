var args = arguments[0] || {};

var args = arguments[0] || {};
var Cloud = require('ti.cloud');	

// This works 
function checkLogin(e){
	
	
	Cloud.Users.login({
	username: $.username.value,
	password: $.password.value,
	password_confirmation: $.password.value
	}, function (e) {
	    if (e.success) {
	        var user = e.users[0];
	        alert('Success:\n' +
	       'id: ' + user.id + '\n' +
            'sessionId: ' + Cloud.sessionId + '\n' +
            'first name: ' + user.first_name + '\n' +
            'last name: ' + user.last_name);
	        var dash=Alloy.createController('index').getView();
    	Alloy.Globals.dash = $.dash;
		dash.open();
	} else {
	    alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});

		
};

function createUser(e){
	
Cloud.Users.create({
	username: $.c_username.value,
	password: $.c_password.value,
	password_confirmation: $.c_password.value
	}, function (e) {
	    if (e.success) {
	        var user = e.users[0];
	        alert('Success:\n' +
	       'id: ' + user.id + '\n' +
            'sessionId: ' + Cloud.sessionId + '\n' +
            'username: ' + user.username + '\n'
            );
	        var dash=Alloy.createController('index').getView();
    	Alloy.Globals.dash = $.dash;
		dash.open();
	} else {
	    alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
}

function resetPass(e){
Cloud.Users.requestResetPassword({
    email: 'joeuser@mycompany.com'
}, function (e) {
    if (e.success) {
        alert('Success: Reset Request Sent');
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});	
}


/*
Cloud.Users.login({
    login: 'test@mycompany.com',
    password: 'test_password'
}, function (e) {
    if (e.success) {
        var user = e.users[0];
        alert('Success:\n' +
            'id: ' + user.id + '\n' +
            'sessionId: ' + Cloud.sessionId + '\n' +
            'first name: ' + user.first_name + '\n' +
            'last name: ' + user.last_name);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});*/


/*
 * 
 *   Templates:
 * 
 * 
 *Cloud.Users.show({
    user_id: savedUserInfo.id
}, function (e) {
    if (e.success) {
        var user = e.users[0];
        alert('Success:\n' +
            'id: ' + user.id + '\n' +
            'first name: ' + user.first_name + '\n' +
            'last name: ' + user.last_name);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});


Cloud.Users.showMe(function (e) {
    if (e.success) {
        var user = e.users[0];
        alert('Success:\n' +
            'id: ' + user.id + '\n' +
            'first name: ' + user.first_name + '\n' +
            'last name: ' + user.last_name);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});



function logout(e){
Cloud.Users.logout(function (e) {
    if (e.success) {
        alert('Success: Logged out');
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});

Cloud.Users.requestResetPassword({
    email: 'joeuser@mycompany.com'
}, function (e) {
    if (e.success) {
        alert('Success: Reset Request Sent');
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
}*/


 







/*
	Library to wrap app-specific functionality around the ACS APIs
*/
// a couple local variables to save state
/*var currentUser = null;
var loggedIn = false;

var Cloud = require('ti.cloud');
Cloud.debug = true;

// Persist the user's login status -- by default, they're
// logged out when the app closes
var sid = Ti.App.Properties.getString('sessionid');
exports.isLoggedIn = function() {
    if(typeof arguments[0] == 'function') {
        var cb = arguments[0];
        if(sid) {
            Cloud.sessionId = sid;
            var me = Cloud.Users.showMe(function(e) {
                loggedIn = true;
                currentUser = e.users[0];
                cb();
                var dash=Alloy.createController('index').getView();
    	Alloy.Globals.dash = $.dash;
		dash.open();
                return loggedIn;
            });
        } else {
            return loggedIn;
        }
    } else {
        return loggedIn;
    }
};

// Add createUser() here, accepts username, password, and callback function
// ACS API requires password & confirm, but we do the checking elsewhere so use the same for both here
// API also logs in the user, so make sure to set loggedIn and currentUser appropriately
function createUser(username, password, callback) {
	Cloud.Users.create({
		username: username,
		password: password,
		password_confirmation: password
	}, function (e) {
	    if (e.success) {
	        Ti.App.Properties.setString('sessionid',e.meta.session_id);
	        currentUser = e.users[0];
	        loggedIn = true;
	        callback(e.users[0]);
	    } else {
	    	alert('Error' + JSON.stringify(e)); // Ti.API.info --> the same as System.out.print in java and cou << in C++
	    	loggedIn = false;
	    	currentUser = null;
	    	callback(false);
	    }
	});
};


// Add your code to export the login() method here
// accepts username, password, and callback (function)
// make sure to set loggedIn and currentUser appropriately
function login(username, password, callback) {
	Cloud.Users.login({
	    login: $.username.value,
	    password: $.password.value
	}, function (e) {
	    if (e.success) {
	    	currentUser = e.users[0];
	    	loggedIn = true;
	    	Ti.App.Properties.setString('sessionid',e.meta.session_id);
			callback(loggedIn);
		
	    } else {
	        alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
	        loggedIn = false;
	        currentUser = null;
			callback(loggedIn);
	    }
	});	
};

// Add logout() here, make sure to set loggedIn and currentUser appropriately
// and clear the app property
function logout() {
	Cloud.Users.logout(function (e) {
	    if (e.success) {
	        currentUser = null;
	        loggedIn = false;
	        Ti.App.Properties.setString('sessionid', '');
	    }
	});		
};*/


  