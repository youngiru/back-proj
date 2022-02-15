const Sequelize = require('sequelize')

module.exports = class User extends Sequelize.Model{
  static init(sequelize) {
    return super.init (
      {
        email: {
          type: Sequelize.STRING(40),
          allowNull: false
        },
        password: {
          type: Sequelize.STRING(100),
          allowNull: false
        }
      }
    )
  }
  static associate(db) {}
}