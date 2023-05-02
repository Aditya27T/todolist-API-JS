const chai = require('chai');
const expect = chai.expect;
const db = require('../../../utils/databases/db');

describe('database', () => {
    it('should have a host property', () => {
        expect(db).to.have.property('host');
    });
    it('should have a dialect property', () => {
        expect(db).to.have.property('dialect');
    });
    it('should have a username property', () => {
        expect(db).to.have.property('username');
    });
    it('should have a password property', () => {
        expect(db).to.have.property('password');
    });
    it('should have a database property', () => {
        expect(db).to.have.property('database');
    });
    it('should have a pool property', () => {
        expect(db).to.have.property('pool');
    });
    it('should have a pool.max property', () => {
        expect(db.pool).to.have.property('max');
    });
    it('should have a pool.min property', () => {
        expect(db.pool).to.have.property('min');
    });
    it('should have a pool.acquire property', () => {
        expect(db.pool).to.have.property('acquire');
    });
    it('should have a pool.idle property', () => {
        expect(db.pool).to.have.property('idle');
    });
    it('should have a authenticate method', () => {
        expect(db).to.have.property('authenticate');
    });
    it('should have a sync method', () => {
        expect(db).to.have.property('sync');
    });
    it('should have a close method', () => {
        expect(db).to.have.property('close');
    });
    it('should have a define method', () => {
        expect(db).to.have.property('define');
    });
    it('should have a query method', () => {
        expect(db).to.have.property('query');
    });
    it('should have a transaction method', () => {
        expect(db).to.have.property('transaction');
    });
    it('should have a addHook method', () => {
        expect(db).to.have.property('addHook');
    });
    it('should have a removeHook method', () => {
        expect(db).to.have.property('removeHook');
    });
    it('should have a beforeValidate method', () => {
        expect(db).to.have.property('beforeValidate');
    });
    it('should have a afterValidate method', () => {
        expect(db).to.have.property('afterValidate');
    });
});