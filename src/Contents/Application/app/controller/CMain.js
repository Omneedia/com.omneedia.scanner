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
				var iframe=document.createElement('iframe');
				iframe.src=result.text;
				iframe.style.border="0px solid black";
				iframe.style.position="absolute";
				iframe.style.top="0px";
				iframe.style.left="0px";
				iframe.style.width="100%";
				iframe.style.height="100%";
				iframe.style.zIndex="99999";
				document.getElementsByTagName('body')[0].appendChild(iframe);
			}, 
			function (error) {
			  alert("Scanning failed: " + error);
			}
		);
	}
		
});