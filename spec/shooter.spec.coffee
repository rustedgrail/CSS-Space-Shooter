describe 'the ship', ->
  beforeEach ->
    setFixtures '<div id=main ></div>'
    CSS.drawShip()

  it 'can be drawn', ->
    expect($('#ship')).toExist()

  it 'can move', ->
    topPos = $('#ship').position().top
    CSS.moveShip 'w'
    expect($('#ship').position().top).toBe topPos - 10
