const chai = require('chai');
const expect = chai.expect;
const jwtConfig = require('../../../config/jwt_config/config');

describe('config jwt', () => {
    it('should have a secret property', () => {
        expect(jwtConfig).to.have.property('secret');
    });
});

// Path: test\config\jwt_config\config.test.js
