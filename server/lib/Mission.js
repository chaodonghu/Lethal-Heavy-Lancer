'use strict';

// Mission.js


const uuidV4    = require('uuid/v4');
const Character = require('./Character');
const CONSTANTS = require("../../public/scripts/lib/constants");

class Mission {
  constructor(props) {
    props = props || {}
    this._id = props.id || uuidV4();
    this._type = props.type || CONSTANTS.MISSION_TYPE.KILL;
    this._characters = props.characters || [];
  }

  addCharacter(character) {
    if (!(character instanceof Character)) {
      character = new Character(character);
    }
    this._characters.push(character);
    return this
  }

  messageFormat(playerId) {
    let foundUser = this._characters[playerId]
    // console.log(foundUser)
    let result = {
      'id': this._id,
      'type': this._type,
      'characters': this._characters.map(character => {
        return character.messageFormat;
      })
    }

    return result;
  }
}

module.exports = Mission;