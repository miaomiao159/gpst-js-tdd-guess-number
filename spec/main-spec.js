const main = require('../main/main');

describe('main()', () => {
    it('数字猜对而且位置也对', function() {

        var result = main(1234,1234);
        expect(result).toEqual("4A0B");
    });

    it('数字不对但位置不对', function() {

        var result = main(1234,4321);
        expect(result).toEqual("0A4B");
    });

    it('数字猜对但位置不对', function() {

        var result = main(1234,4231);
        expect(result).toEqual("2A2B");
    });
});