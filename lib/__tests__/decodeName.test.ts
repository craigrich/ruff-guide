import decodeName from '../decodeName';

describe('lib', () => {
  describe('decodeName', () => {
    it('should replace dashes with spaces', function test() {
      const result = decodeName('paschoe-house');
      expect(result).toBe('paschoe house');
    });
  });
});
