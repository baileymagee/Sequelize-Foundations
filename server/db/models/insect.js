'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Insect.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isCapital(value) {
          let words = value.split(" ")
          for(let word of words){
            if(word[0].toUpperCase() !== word[0]){
              throw new Error("Invalid name")
            }
          }
        }
      }
    },
    description: DataTypes.STRING,
    territory: DataTypes.STRING,
    fact: {
      type: DataTypes.STRING,
      validate: {
        len: [0,240]
      }
    },
    millimeters: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0
      }
    }
  }, {
    sequelize,
    modelName: 'Insect',
  });
  return Insect;
};
