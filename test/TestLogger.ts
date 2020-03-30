import { expect } from 'chai';
import { ConsoleLogger, NullLogger } from 'noicejs';

import { getTestLogger, spyLogger } from '../src/Logger';

describe('logger utils', () => {
  describe('get test logger helper', () => {
    it('should return console logger in verbose mode', () => {
      expect(getTestLogger(true)).to.equal(ConsoleLogger.global);
    });

    it('should return console logger in debug mode');

    it('should return null logger otherwise', () => {
      expect(getTestLogger()).to.equal(NullLogger.global);
    });
  });

  describe('spy logger helper', () => {
    it('should return itself as a child', () => {
      const logger = spyLogger({});
      expect(logger.child({})).to.equal(logger);
    });
  });
});
