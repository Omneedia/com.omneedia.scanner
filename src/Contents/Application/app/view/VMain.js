App.view.define('VMain', {

	extend: 'Ext.navigation.View',
	fullscreen: true,
	
	alias: "widget.VMain",
	
	requires: [

    ],
	
	config: {
	
		autoDestroy: true,
		navigationBar: {
			items: [

			]				
		},	
		items: [
			{
				title: 'BLANK Project Mobile',
				layout: 'fit',
				items: [
					{
						html: 'Hello world'
					}
				]
			}
		
		]	
		
	}
	
});