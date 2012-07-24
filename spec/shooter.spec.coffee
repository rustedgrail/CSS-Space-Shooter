describe 'the ship', ->
  beforeEach ->
    setFixtures '<div id=main ></div>'
    CSS.drawShip()

  it 'can be drawn', ->
    expect($('#ship')).toExist()

  it 'can move', ->
    CSS.moveShip 'w'
    expect($('ship').top).toBe 540
