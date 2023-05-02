const chai = require('chai');
const expect = chai.expect;
const utils = require('../../utils');

describe('utils', () => {
    it('should have a databases property', () => {
        expect(utils).to.have.property('databases');
    });
});