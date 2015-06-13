App.view.define('My.TapPanel', {
    extend: 'Ext.Panel',
	alias: "widget.TapPanel",
	config: {
		layout: {
			type: 'fit'
		},
		listeners:[
			{
				element: 'element',
				event: 'tap',
				fn: function() {
					this.fireEvent("tap", this);
				}
			}
		]
	}
});

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
				title: 'Omneedia Scope',
				layout: {
					type: 'vbox',
					pack: 'center'                        
                },
				items: [
					{
						xtype: 'TapPanel',					
						baseCls : "UIScanner",
						itemId: "scanner",
						width:"100%",
						height:180
					}
				]
			}
		
		]	
		
	}
	
});