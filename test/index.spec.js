import datum from '../src/index';
import { expect } from 'chai';

describe('Util functions', () => {
  describe('datum to decimal', () => {
    it('should convert a number to correct text', () => {
      expect(datum(new Date()))
      .to.equal('0 minutes ago');
    });

    it('should convert a date 1 minute ago to correct text', () => {
      const d = new Date();
      const newDate = d.setMinutes(d.getMinutes() - 1);
      expect(datum(newDate))
      .to.equal('1 minute ago');
    });

    it('should convert a date 20 minutes ago to correct text', () => {
      const d = new Date();
      const newDate = d.setMinutes(d.getMinutes() - 20);
      expect(datum(newDate))
      .to.equal('20 minutes ago');
    });

    it('should convert a date 5 days ago to correct text', () => {
      const d = new Date();
      const newDate = d.setDate(d.getDate() - 5);
      expect(datum(newDate))
      .to.equal('5 days ago');
    });

    it('should convert a date 8 days ago to correct text', () => {
      const d = new Date();
      const newDate = d.setDate(d.getDate() - 8);
      expect(datum(newDate))
      .to.equal('8 days ago');
    });

    it('should convert a date 9 days ago to correct text', () => {
      const d = new Date();
      const newDate = d.setDate(d.getDate() - 9);
      expect(datum(newDate))
      .to.equal('9 days ago');
    });

    it('should convert a date 40 days ago to correct text', () => {
      const d = new Date();
      const newDate = d.setDate(d.getDate() - 40);
      expect(datum(newDate))
      .to.equal('1 month ago');
    });

    it('should convert a date 80 days ago to correct text', () => {
      const d = new Date();
      const newDate = d.setDate(d.getDate() - 80);
      expect(datum(newDate))
      .to.equal('2 months ago');
    });

    it('should convert a date 365 days ago to correct text', () => {
      const d = new Date();
      const newDate = d.setDate(d.getDate() - 365);
      expect(datum(newDate))
      .to.equal('1 year ago');
    });

    it('should show new exception text', () => {
      expect(datum(new Date(), {
        exception: 'Just now'
      }))
      .to.equal('Just now');
    });
  });
});
