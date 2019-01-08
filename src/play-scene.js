import Phaser from 'phaser'
import greenShipPath from './sprites/Green_Ship_Space.png'
import redShipPath from './sprites/Red_Ship_Space.png'

export class PlayScene extends Phaser.Scene {
  static Key = 'PLAY_SCENE'
  static PlayerSpeed = 300 // Pixels per second
  init() {}
  preload() { 
    this.load.image(greenShipPath, greenShipPath)
    this.load.image(redShipPath, redShipPath)
  }
  create() {
    this.player = this.add.sprite(800 / 2, 600 - 20, greenShipPath)
    this.player.setSize(20, 20)
    this.player.setOrigin(0.5, 0)
    this.keys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      shoot: Phaser.Input.Keyboard.KeyCodes.SPACE,
    })
  }
  update(startDelta, frameDelta) {
    this.updatePlayerPosition(frameDelta)
  }
  updatePlayerPosition(frameDelta) {
    let componentX = 0
    let componentY = 0
    if (this.keys.left.isDown) { componentX -= 1 }
    if (this.keys.right.isDown) { componentX += 1 }
    if (this.keys.up.isDown) { componentY -= 1 }
    if (this.keys.down.isDown) { componentY += 1 }
    const angle = Math.atan2(componentY, componentX)
    let vx
    let vy
    if (componentX === 0 && componentY === 0) {
      vx = 0
      vy = 0
    } else {
      const magnitude = PlayScene.PlayerSpeed * frameDelta / 1000
      vx = Math.cos(angle) * magnitude
      vy = Math.sin(angle) * magnitude
    }
    this.player.x += vx
    this.player.y += vy
    this.player.x = Math.min(this.player.x, 800 - 10)
    this.player.x = Math.max(this.player.x, 10)
    this.player.y = Math.min(this.player.y, 600 - 20)
    this.player.y = Math.max(this.player.y, 0)
  }
}
