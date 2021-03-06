// Generated by CoffeeScript 1.3.3
(function() {

  describe('the ship', function() {
    beforeEach(function() {
      setFixtures('<div id=main ></div>');
      return CSS.drawShip();
    });
    it('can be drawn', function() {
      return expect($('#ship')).toExist();
    });
    return it('can move', function() {
      var topPos;
      topPos = $('#ship').position().top;
      CSS.moveShip('w');
      return expect($('#ship').position().top).toBe(topPos - 10);
    });
  });

}).call(this);
