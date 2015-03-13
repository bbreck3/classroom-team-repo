// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

/**
 * 		The below was supposed to open the "class.xml" for testing purposes. This js file is the one that specifies things to be shown even before the "index.xml" is shown.
 * 
 * 				 it does not work, the coompler gives: "Error while parsing XML file"
 * 
 * 				It works fine without the "class.xml" but when adding the "class.xml" to the application neither "index.xml" nor "class.xmk" works
 * 
 */
Alloy.Globals.container ="";
