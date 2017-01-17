import timeAgo from '../src/index';
import { expect } from 'chai';

describe('Util functions', () => {
  describe('timeAgo to decimal', () => {
    it('should convert a number to correct text', () => {
      expect(timeAgo(new Date()))
      .to.equal('0 minutes ago');
    });

    it('should convert a number to correct text', () => {
      const d = new Date();
      const fiveDaysAgo = d.setDate(d.getDate() - 5);
      expect(timeAgo(fiveDaysAgo))
      .to.equal('5 days ago');
    });

    it('should convert a number to correct text', () => {
      const d = new Date();
      const fiveDaysAgo = d.setDate(d.getDate() - 365);
      expect(timeAgo(fiveDaysAgo))
      .to.equal('1 year ago');
    });
  });
});
