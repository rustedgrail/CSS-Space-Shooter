// Generated by CoffeeScript 1.3.3
(function() {

  describe('the ship', function() {
    beforeEach(function() {
      return setFixtures('<div id=main ></div>');
    });
    it('can be drawn', function() {
      CSS.drawShip();
      return expect($('#ship')).toExist();
    });
    return it('can move', function() {
      CSS.moveShip('w');
      return expect($('ship').top).toBe(540);
    });
  });

}).call(this);
