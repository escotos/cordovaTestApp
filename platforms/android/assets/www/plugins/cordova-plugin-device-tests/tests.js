cordova.define("cordova-plugin-device-tests.tests", function(require, exports, module) { exports.defineAutoTests = function () {
	describe('MFPCore tests', function () {
		it('should exist', function(){
			expect(MFPClient).toBeDefined();
		});
	});
};
});
