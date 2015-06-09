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
	}	
		
});