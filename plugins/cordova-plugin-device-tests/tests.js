exports.defineAutoTests = function () {
	describe('MFPCore tests', function () {

		it('should exist', function(){
			expect(MFPClient).toBeDefined();
		});

		it('should not exist', function(){
			expect(MFPClient).not.toBeDefined();
		});
	});
};