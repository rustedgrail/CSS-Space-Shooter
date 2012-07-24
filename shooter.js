(function() {
    var moves = { w: {top: -10, left: 0},
                s: {top: 10, left:0 },
                a: {top: 0, left: -10},
                d: {top: 0, left: 10}
    };

    CSS = {
        drawShip: function() {
            var ship = document.createElement('div');
            ship.id = 'ship';
            ship.innerHTML = 'A';
            ship.class = ship;
            $('#main').append(ship);
        },

        moveShip: function(key) {
            console.log(key);
            console.log($('#ship'));
            var position = $('#ship').position();
            var move = { top: '+=' + moves[key].top,
                            left: '+=' + moves[key].left
            };
            $('#ship').animate(position);
        }
    };

    $('#main').keypress(CSS.moveShip);
}());
