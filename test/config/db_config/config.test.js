const chai = require('chai');
const expect = chai.expect;
const dbConfig = require('../../../config/db_config/config');

describe('config database', () => {
    it('should have a username property', () => {
        expect(dbConfig).to.have.property('username');
    });
    it('should have a password property', () => {
        expect(dbConfig).to.have.property('password');
    });
    it('should have a database property', () => {
        expect(dbConfig).to.have.property('database');
    });
    it('should have a host property', () => {
        expect(dbConfig).to.have.property('host');
    });
    it('should have a dialect property', () => {
        expect(dbConfig).to.have.property('dialect');
    });
    it('should have a pool property', () => {
        expect(dbConfig).to.have.property('pool');
    });
    it('should have a pool.max property', () => {
        expect(dbConfig.pool).to.have.property('max');
    });
    it('should have a pool.min property', () => {
        expect(dbConfig.pool).to.have.property('min');
    });
    it('should have a pool.acquire property', () => {
        expect(dbConfig.pool).to.have.property('acquire');
    });
    it('should have a pool.idle property', () => {
        expect(dbConfig.pool).to.have.property('idle');
    });
});