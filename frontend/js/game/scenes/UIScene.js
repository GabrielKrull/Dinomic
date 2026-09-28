import Phaser from 'phaser';

export default class UIScene extends Phaser.Scene {
  constructor() {
    super({ key: 'UIScene' });
  }

  create() {
    // Score display
    this.scoreText = this.add.text(16, 16, 'Score: 0', {
      fontSize: '24px',
      color: '#ffffff',
    });

    // Lives display
    this.livesText = this.add.text(this.cameras.main.width - 16, 16, 'Lives: 3', {
      fontSize: '24px',
      color: '#ffffff',
    }).setOrigin(1, 0);

    // Pause button
    const pauseButton = this.add.text(
      this.cameras.main.width / 2,
      16,
      'PAUSE',
      { fontSize: '20px', color: '#ffffff' }
    ).setOrigin(0.5);

    pauseButton.on('pointerdown', () => {
      if (this.scene.isPaused('GameScene')) {
        this.scene.resume('GameScene');
      } else {
        this.scene.pause('GameScene');
      }
    });

    // Subscribe to game state changes
    this.events.on('updateGameState', (score, lives) => {
      this.scoreText.setText(`Score: ${score}`);
      this.livesText.setText(`Lives: ${lives}`);
    });
  }

  update() {
    // Update score and lives from GameScene
    const gameScene = this.scene.get('GameScene');
    if (gameScene && !gameScene.isGameOver) {
      this.events.emit('updateGameState', gameScene.score, gameScene.lives);
    }
  }
}
