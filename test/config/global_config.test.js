const chai = require('chai');
const expect = chai.expect;
assert = chai.assert;
const allConfig = require('../../config/global_config');

describe('config global', () => {
    it('should have a port property', () => {
        expect(allConfig).to.have.property('port');
    });
    it('should have a db property', () => {
        expect(allConfig).to.have.property('db');
    });
    it('should have a jwt property', () => {
        expect(allConfig).to.have.property('jwt');
    });
    it('should have a port property', () => {
        assert.typeOf(allConfig.port, 'number');
    });
    it('should have a db property', () => {
        assert.typeOf(allConfig.db, 'object');
    });
    it('should have a jwt property', () => {
        assert.typeOf(allConfig.jwt, 'object');
    });
});
