function startTutorial() {
  playerStatus = {
    id: "currentPlayer",
    position: {
      x: 105,
      y: 0,
      z: 40
    },
    rotation: {
      x: 0,
      y: Math.PI,
      z: 0
    }
  };

  createTutorialScene();
}

var dummyNPC = {
  id: "dummyNPC",
  type: CONSTANTS.CHAR_TYPE.ENEMY,
  position: {
    x: 120,
    y: 5,
    z: 350
  },
  rotation: {
    x: 0,
    y: - Math.PI / 4,
    z: 0
  },
  fwdSpeed: 0,
  rotYSpeed: 0,
  sideSpeed: 0,
  totalHealth: 100,
  currentHealth: 100
};

var dummyPlayer = {
  id: "dummyPlayer",
  type: CONSTANTS.CHAR_TYPE.PLAYER,
  position: {
    x: 100,
    y: 0,
    z: 330
  },
  rotation: {
    x: 10 * Math.PI / 180,
    y: - 3 * Math.PI / 4,
    z: 0
  },
  fwdSpeed: 0,
  rotYSpeed: 0,
  sideSpeed: 0,
  totalHealth: 50,
  currentHealth: 200
};

var BUILT = false;
var BUILT2 = false;

function checkTutorialStage() {
  if (avatar.position.z <= 220) {
  // stage 1:
  // look around
  // look up and down
  // move around
  // drop building -> collision
  } else if (avatar.position.z <= 400) {
    if (!BUILT) {
      // stage 2:
      BUILT = true;
      // drop npc and player
      buildNewNPC(dummyNPC);
      buildNewPlayer(dummyPlayer);
      // player shooting npc
      // player ship burning
      // npc moving / attacking
      simulateBattle();
    }
  } else if (avatar.position.z <= 560) {
    if (!BUILT2) {
      simulateDamage();
      BUILT2 = true;
    }
  } else {
    health.classList.add("hide");
    FSM.transite("LOBBY");
  }
}

function simulateBattle() {
  setTimeout(function() {
    displayPlayerFire("dummyPlayer");
  }, 200);

  setTimeout(function() {
    displayPlayerFire("dummyPlayer");
  }, 900);

  setTimeout(function() {
    displayPlayerFire("dummyPlayer");
  }, 1600);

  setTimeout(function() {
    removePlayer("dummyPlayer");
  }, 2500);
}

function simulateDamage() {
  health.classList.remove("hide");
  setTimeout(function() {
    updateHealthBar(100, 100);
  }, 500);

  setTimeout(function() {
    updateHealthBar(80, 100);
  }, 1000);

  setTimeout(function() {
    updateHealthBar(60, 100);
  }, 1500);

  setTimeout(function() {
    updateHealthBar(40, 100);
  }, 2000);

  setTimeout(function() {
    updateHealthBar(20, 100);
  }, 2500);

  setTimeout(function() {
    updateHealthBar(10, 100);
  }, 3000);

  setTimeout(function() {
    updateHealthBar(5, 100);
  }, 3500);
}