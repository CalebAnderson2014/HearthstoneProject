'use strict';
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const cardSchema = mongoose.Schema({
  id: {
    type: String
  },
  name: {
    type: String,
    required: true,
    default: 'No name'
  },
  cardSet: String,
  type: String,
  faction: String,
  rarity: String,
  cost: Number,
  attack: Number,
  health: Number,
  text: String,
  race: String,
  playerClass: String,
  img: { 
    type: String,
    required: true,
    default: 'http://www.gemologyproject.com/wiki/images/5/5f/Placeholder.jpg'
  },
  imgGold: String,
  locale: String,
  mechanics: [{ name: String }]
});

const CardModel = mongoose.model('Card', cardSchema);

module.exports = CardModel;


