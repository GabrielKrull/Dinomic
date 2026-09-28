import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  create() {
    // Create background
    const bg = this.add.rectangle(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2,
      this.cameras.main.width,
      this.cameras.main.height,
      0x1a1a2e
    );

    // Create player (geometric placeholder)
    this.player = this.add.rectangle(100, this.cameras.main.height / 2, 32, 32, 0xe94560);
    this.physics.add.existing(this.player, true); // Static body

    // Create ground
    const ground = this.add.rectangle(
      this.cameras.main.width / 2,
      this.cameras.main.height - 16,
      this.cameras.main.width,
      32,
      0x16213e
    );
    this.physics.add.existing(ground, true);

    // Player controls
    this.cursors = this.input.keyboard.createCursorKeys();

    // Initialize game state
    this.score = 0;
    this.lives = 3;
    this.gameSpeed = 200;
    this.isGameOver = false;

    // Spawn obstacles periodically
    this.time.addEvent({
      delay: 2000,
      callback: this.spawnObstacle,
      callbackScope: this,
      loop: true,
    });
  }

  update(time, delta) {
    if (this.isGameOver) return;

    // Player movement
    const speed = 300;
    if (this.cursors.left.isDown) {
      this.player.x -= speed * (delta / 1000);
    } else if (this.cursors.right.isDown) {
      this.player.x += speed * (delta / 1000);
    }

    // Keep player in bounds
    this.player.x = Phaser.Math.Clamp(this.player.x, 16, this.cameras.main.width - 16);

    // Move obstacles left
    this.children.each((child) => {
      if (child !== this.player && child !== this.player.body) {
        child.x -= this.gameSpeed * (delta / 1000);

        // Remove off-screen obstacles
        if (child.x < -32) {
          child.destroy();
          this.score += 10;
        }
      }
    });

    // Increase difficulty over time
    this.gameSpeed += 0.1 * (delta / 1000);
  }

  spawnObstacle() {
    if (this.isGameOver) return;

    const yPos = Phaser.Math.Between(50, this.cameras.main.height - 50);
    const obstacle = this.add.rectangle(
      this.cameras.main.width + 16,
      yPos,
      24,
      24,
      0xff6b6b
    );
    this.physics.add.existing(obstacle);

    // Check collision with player
    this.physics.overlap(this.player, obstacle, this.handleCollision, null, this);
  }

  handleCollision(player, obstacle) {
    obstacle.destroy();
    this.lives--;

    if (this.lives <= 0) {
      this.endGame();
    }
  }

  endGame() {
    this.isGameOver = true;
    this.physics.pause();

    // Show game over overlay
    const overlay = this.add.rectangle(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2,
      this.cameras.main.width,
      this.cameras.main.height,
      0x000000,
      0.7
    );

    const gameOverText = this.add.text(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2 - 50,
      'GAME OVER',
      { fontSize: '48px', color: '#ffffff' }
    ).setOrigin(0.5);

    const scoreText = this.add.text(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2 + 20,
      `Final Score: ${this.score}`,
      { fontSize: '24px', color: '#ffffff' }
    ).setOrigin(0.5);

    const restartText = this.add.text(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2 + 80,
      'Press SPACE to restart',
      { fontSize: '20px', color: '#ffffff' }
    ).setOrigin(0.5);

    this.input.keyboard.on('keydown-SPACE', () => {
      this.scene.restart();
    });
  }
}
