// Constantes de balanceamento — espelho do backend (config/game.php)
// Atualize ambos os arquivos juntos.

export const GAMEPLAY = {
  INITIAL_SPEED: 200,
  MAX_SPEED: 450,
  ACCELERATION_RATE: 0.5,
  OBSTACLE_SPAWN_INTERVAL: 2000,
  MIN_OBSTACLE_GAP: 120,
  MAX_OBSTACLE_GAP: 400,
};

export const COINS = {
  REWARD_PER_METER: 1,
  MAX_PER_RUN: 1000,
};

export const ANTI_CHEAT = {
  MIN_DURATION_SECONDS: 5,
  MAX_DURATION_SECONDS: 3600,
  MAX_DISTANCE_PER_SECOND: 30,
  MAX_COINS_PER_METER: 5,
};

export const XP = {
  BASE_PER_LEVEL: 100,
  MULTIPLIER: 1.5,
  PER_METER: 0.1,
  PER_COIN: 0.5,
};

export function xpForNextLevel(currentLevel) {
  return Math.floor(XP.BASE_PER_LEVEL * Math.pow(XP.MULTIPLIER, currentLevel - 1));
}