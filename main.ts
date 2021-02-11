controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -10
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += -10
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += 10
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += 10
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.destroy()
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . . 3 3 . 3 3 . . . . . . 
    . . . . . 3 . 3 . 3 . . . . . . 
    . . . . . 3 3 . 3 3 . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 . 2 . 2 . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite.setStayInScreen(true)
tiles.setWallAt(tiles.getTileLocation(0, 0), true)
mySprite.setPosition(111, 65)
