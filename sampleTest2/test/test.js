var assert = require('assert');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var expect = chai.expect;
chai.use(chaiHttp);

describe('sample_tests', function() {
    it('test 0', (done) => {
        done();
        expect(1).to.be.equal(1);
    });
});

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1, 2, 3].indexOf(4), -1)
        });
    });
});

// describe('User', function() {
//     describe('#save()', function() {
//         it('should save without error', function() {
//             var user = new User('Luna');
//             user.save(done);
//             // user.save(function(err) {
//             //     if (err) done(err);
//             //     else done();
//             // });
//         });
//     });
// });

// beforeEach(function () {
//   return db.clear().then(function () {
//     return db.save([tobi, loki, jane]);
//   });
// });

// describe('#find()', function () {
//   it('respond with matching records', function () {
//     return db.find({type: 'User'}).should.eventually.have.length(3);
//   });
// });


it('should complete this test', function (done) {
  return new Promise(function (resolve) {
    assert.ok(true);
    resolve();
  }).then(done);
});

// beforeEach(async function () {
//   await db.clear();
//   await db.save([tobi, loki, jane]);
// });

// describe('#find()', function () {
//   it('responds with matching records', async function () {
//     const users = await db.find({type: 'User'});
//     users.should.have.length(3);
//   });
// });

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      [1, 2, 3].indexOf(5).should.equal(-1);
      [1, 2, 3].indexOf(0).should.equal(-1);
    });
  });
});

