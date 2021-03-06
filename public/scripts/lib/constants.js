// constants.js

var CONSTANTS = {

// Character types
  CHAR_TYPE: {
    ENEMY: 0,
    PLAYER: 1,
    ALLY: 2
  },

// Message types being sent through sockets
  MESSAGE_TYPE: {
    GAME_STATE: 0,
    UPDATE: 1,
    PLAYER_INFO: 2,
    FIRE: 3,
    REMOVE: 4,    // for both npc and player
    GAME_END: 5,  // when all npc die in a game instance
    GAME_START: 6, // start a game -> need this when u create loop of games
    PLAYER_READY: 7
  },

// Types of missions
  MISSION_TYPE: {
    KILL: 0,
    STEAL: 1
  },

  MISSION: {
    MAX_PLAYERS: 4,
    MIN_ENEMIES: 20,
    MAX_ENEMIES: 24,
    CONCURRENT_ENEMIES: 10
  },

// Player attributes
  PLAYER: {
    INITIAL_HEALTH: 200,
    MAX_SPEED: 0.9,
    RANGE: 100,
    DAMAGE: 50
  },

// NPC attributes
  NPC: {
    WANDER_SPEED: .3,
    WANDER_DISTANCE: 6,
    ATTACK_MOVE_SPEED: .8,
    DETECTION_RANGE: 8,
    ATTACK_SPEED: 1.25,
    DAMAGE: 25
  },

// Map attributes
  MAP: {
    DEFAULT_SIZE: 100,
    ELEMENT_SIZE: 25,
    MIN_ROOMS: 17,
    MAX_ROOMS: 21,
    MIN_ROOM_SIZE: 4,
    MAX_ROOM_SIZE: 7,
    CONNECTION_CHANCE: 0.3,
    ROOM_FAIL_CUTOFF: 1000,
    NPC_FAIL_CUTOFF: 100,
    SAFE_DISTANCE: 6
  },

  // client side constants:
  GROUND_LEVEL: -2.2,

  WORLD_OFFSET: -5,

  ANGLE: Math.PI / 180,

  CAMERA: {
    UP_ANGLE_MAX: 135 * Math.PI / 180,
    DOWN_ANGLE_MAX: 80 * Math.PI / 180,
    HEIGHT_OFFSET: 1.5,
    ALPHA_OFFSET: -Math.PI / 2,
    BETA_OFFSET:  Math.PI / 2 + 5 * Math.PI / 180,
    RADIUS: 1.5
  },

  AIM_OFFSET: 7 * Math.PI/180,

  TOTAL_BUILDINGS: 23,

  CAMERA_TARGET_OFFSET: Math.PI / 2,

  HEALTH_COLOR: {
    FULL: "#86e01e",
    HIGHT: "#f2d31b",
    HALF: "#f2b01e",
    LOW: "#f27011",
    VERY_LOW: "#f63a0f"
  }
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = CONSTANTS;
}
