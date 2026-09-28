import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    // Load placeholder assets (geometric shapes)
    this.load.image('player', null);
    this.load.image('obstacle', null);
    this.load.image('coin', null);
    this.load.image('background', null);
  }

  create() {
    this.scene.start('GameScene');
  }
}
