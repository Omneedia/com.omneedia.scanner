APP_NAMESPACE = Settings.NAMESPACE;
LANGS = Settings.LANGS;

Ext.Loader.setConfig({
    enabled: true,
	paths: Settings.PATHS
});

Manifest = function()
{

	Ext.application({
		
		name: APP_NAMESPACE,
		
		appFolder: Ext.Loader.getPath('Contents'),	

		controllers: Settings.CONTROLLERS,
		
		/*profiles: [
			'Phone', 'Tablet'
		],*/
		
		startupImage: {
			'320x460': 'Contents/Resources/startup/Default.jpg',
			'640x920': 'Contents/Resources/startup/640x920.png',
			'640x1096': 'Contents/Resources/startup/640x1096.png',
			'768x1004': 'Contents/Resources/startup/768x1004.png',
			'748x1024': 'Contents/Resources/startup/748x1024.png',
			'1536x2008': 'Contents/Resources/startup/1536x2008.png',
			'1496x2048': 'Contents/Resources/startup/1496x2048.png'
		},

		isIconPrecomposed: false,
		
		launch: function () 
		{		

		}
		
	});
};

Ext.require(Settings.MODULES, function()
{	
	for (var i=0;i<Settings.API.length;i++) App.using(Settings.API[i]);
	App.load();
});