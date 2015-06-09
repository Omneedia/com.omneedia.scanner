App.model.define('ModelBlank',
{
	config: {
		api: {
			read: 'App.myClass.Read',
	        	create: 'App.myClass.Create',
	        	update: 'App.myClass.Update',
	        	destroy: 'App.myClass.Destroy'		
		}
	}
});
