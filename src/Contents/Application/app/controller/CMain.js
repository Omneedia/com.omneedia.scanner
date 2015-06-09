App.controller.define('CMain', {

	config : {
	
		views: [
			"VMain"
		],
		
		models: [
			
		],
				
		control: 
		{
			"VMain" : {
				show: "VMain_onShow"
			},
			"panel#scanner" : {
				tap: "scanner_onclick"
			}
		},
		
		
	},
	init: function() {		
		
		App.init("VMain");

    },
	
	// Events
	VMain_onShow: function()
	{
		console.log('done.');
	},
	scanner_onclick: function()
	{
		cordova.plugins.barcodeScanner.scan(
			function (result) {
				/*var host=result.text.split('://')[1].split(':')[0]+'.xip.io';
				var port=result.text.split('://')[1].split(':')[1].split('/')[0];
				var address=result.text.split('://')[1].split(':')[1].split('/')[1];
				location.href='http://'+host+':'+port+'/'+address;
				*/
				location.href=result.text;
			}, 
			function (error) {
			  alert("Scanning failed: " + error);
			}
		);
	}
		
});