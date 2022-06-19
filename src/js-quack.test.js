/* eslint-disable func-names */

import { expect } from 'chai';

import { compile, quackNum, quackStr } from './js-quack';
import quackedAddNum from './test-snapshots/add-num';
import quackedHelloWorld from './test-snapshots/hello-world';
import quackedTen from './test-snapshots/ten';
import quackedZ from './test-snapshots/z';

describe('js-quack', function () {
  describe('#quackNum', function () {
    it('shoud quack zero', function () {
      expect(quackNum(0)).to.equal('+[]');
    });

    it('shoud quack one', function () {
      expect(quackNum(1)).to.equal('+!![]');
    });

    it('shoud quack ten', function () {
      expect(quackNum(10)).to.equal(quackedTen);
    });
  });

  describe('#quackStr', function () {
    it('should quack the string "Hello world"', function () {
      expect(quackStr('Hello world')).to.equal(quackedHelloWorld);
    });

    it('should generate a char using charCode when the given char is not present in the map', function () {
      expect(quackStr('z')).to.equal(quackedZ);
    });
  });

  describe('#compile', function () {
    it('should compile the given program', function () {
      const program = 'function addNum(a, b) { return a + b; }';

      expect(compile(program)).to.equal(quackedAddNum);
    });

    it('should run the given program', function () {
      const program = 'function addNum(a, b) { return a + b; }';
      // eslint-disable-next-line no-eval
      const addNum = eval(compile(program));

      expect(addNum(2, 2)).to.equal(4);
    });
  });
});
