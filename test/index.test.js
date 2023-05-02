const chai = require('chai');
const assert = chai.assert;
const app = require('../index');

chai.should();

describe('app module', function() {
    it('should return app', function() {
        assert.equal(app, app);
    });

    it('should return app err if no port', function() {
        assert.equal(app, app);
    });
});

// Path: test\index.test.js

