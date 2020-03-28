import encodeName from '../encodeName';

describe('lib', () => {
  describe('encodeName.test', () => {
    it('should replace spaces with dashes', function test() {
      const result = encodeName('Paschoe House');
      expect(result).toBe('paschoe-house');
    });
  });
});
