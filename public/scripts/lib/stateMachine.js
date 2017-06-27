function StateMachine() {
  this.STATE = "IDLE";

  this.transite = function(nextState) {
    console.log(this.STATE + " -> " + nextState);
    switch (this.STATE){
      case "IDLE":
        if (nextState === "LOBBY") {
          console.log("create lobby");
          createLobby();
          this.STATE = "LOBBY";
        }
        break;
      case "LOBBY":
        if (nextState === "TUTORIAL") {
          console.log("start tutorial");
          disposeScene(startTutorial);
          this.STATE = "TUTORIAL";
        } else if (nextState === "GAME") {
          disposeScene(startGame);
          this.STATE = "GAME";
        }
        break;
      case "GAME":
        if (nextState === "LOBBY") {
          console.log("create lobby");
          // disposeScene(createLobby);
          this.STATE = "LOBBY";
        }
        break;
      case "TUTORIAL":
        if (nextState === "LOBBY") {
          console.log("create lobby");
          disposeScene(createLobby);
          this.STATE = "LOBBY";
        }
        break;
      default:
        break;
    }
  }
}