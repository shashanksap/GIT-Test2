/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"GIT-Test2/GIT-Test2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});