foodgroups_app.controller('groupsController', function(groupsFactory) {
	var that = this;
	var getAllGroups = function () {
		groupsFactory.getAllGroups(function (data) {
			that.allGroups = data;
		})
	}
	getAllGroups();

})