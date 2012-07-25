(function() {
    CSS = {
        drawShip: function() {
            var ship = document.createElement('div');
            ship.id = 'ship';
            ship.innerHTML = 'A';
            ship.class = ship;
            $('#main').append(ship);
        },

        moveShip: function(e) {
            var position = $('#ship').position();
            var move = { top: e.pageY,
                            left: e.pageX
            };
            console.log(move);
            $('#ship').animate(move, 0);
        }
    };

    $('#main').mousemove(CSS.moveShip);
}());
