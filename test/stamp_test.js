'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.stamp = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  html: function(test) {
    test.expect(4);

    var actualCss = grunt.file.read('tmp/static/css/test.css');
    var actualHtml = grunt.file.read('tmp/index.html');
    test.equal(8, actualCss.match(/p\-212800/g).length, 'css stamp');
    test.equal(true, /<link.*? href=(['"'])?.*?t=\d+?\1?/ig.test(actualHtml), 'html link stamp');
    test.equal(true, /<script.*? src=(['"'])?.*?t=\d+?\1?/ig.test(actualHtml), 'html script stamp');
    test.equal(true, /<img.*? src=(['"'])?.*?t=\d+?\1?/ig.test(actualHtml), 'html img stamp');
    test.done();
  }
};
