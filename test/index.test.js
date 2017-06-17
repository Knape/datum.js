/* globals expect */
import datum from '../src/index';

describe('Util functions', () => {
  describe('datum to decimal', () => {
    test('should convert a number to correct text', () => {
      expect(datum(new Date()))
      .toBe('0 minutes ago');
    });

    test('should convert a date 1 minute ago to correct text', () => {
      const d = new Date();
      const newDate = d.setMinutes(d.getMinutes() - 1);
      expect(datum(newDate))
      .toBe('1 minute ago');
    });

    test('should convert a date 20 minutes ago to correct text', () => {
      const d = new Date();
      const newDate = d.setMinutes(d.getMinutes() - 20);
      expect(datum(newDate))
      .toBe('20 minutes ago');
    });

    test('should convert a date 5 days ago to correct text', () => {
      const d = new Date();
      const newDate = d.setDate(d.getDate() - 5);
      expect(datum(newDate))
      .toBe('5 days ago');
    });

    test('should convert a date 8 days ago to correct text', () => {
      const d = new Date();
      const newDate = d.setDate(d.getDate() - 8);
      expect(datum(newDate))
      .toBe('8 days ago');
    });

    test('should convert a date 9 days ago to correct text', () => {
      const d = new Date();
      const newDate = d.setDate(d.getDate() - 9);
      expect(datum(newDate))
      .toBe('9 days ago');
    });

    test('should convert a date 40 days ago to correct text', () => {
      const d = new Date();
      const newDate = d.setDate(d.getDate() - 40);
      expect(datum(newDate))
      .toBe('1 month ago');
    });

    test('should convert a date 80 days ago to correct text', () => {
      const d = new Date();
      const newDate = d.setDate(d.getDate() - 80);
      expect(datum(newDate))
      .toBe('2 months ago');
    });

    test('should convert a date 365 days ago to correct text', () => {
      const d = new Date();
      const newDate = d.setDate(d.getDate() - 365);
      expect(datum(newDate))
      .toBe('1 year ago');
    });

    test('should show new exception text', () => {
      expect(datum(new Date(), {
        exception: 'Just now'
      }))
      .toBe('Just now');
    });
  });
});
