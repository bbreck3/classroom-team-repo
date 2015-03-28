var args = arguments[0] || {};
function checkLogin(e){
		var dash=Alloy.createController('index').getView();
    	Alloy.Globals.dash = $.dash;
		dash.open();
};