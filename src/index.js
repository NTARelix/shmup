import Phaser from 'phaser'
import { PlayScene } from './play-scene'

const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
})

game.scene.add(PlayScene.key, new PlayScene())
game.scene.start(PlayScene.key)
