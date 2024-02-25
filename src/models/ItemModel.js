const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    itemCode: {
      type: DataTypes.STRING
    },
    batchNo: {
      type: DataTypes.STRING
    },
    expiryDate: {
      type: DataTypes.DATE
    },
    manufacturingDate: {
      type: DataTypes.DATE
    },
    quantity: {
      type: DataTypes.BIGINT
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    lastUpdatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    deletedAt: {
      type: DataTypes.DATE
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  };

  const options = {
    tableName: 'Items',
    freezeTableName: true,
    // charset: 'utf8',
    // collate: 'utf8_general_ci',
    // createdAt: 'createdAt',
    //  updatedAt: 'lastUpdatedAt',
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // createdAt: 'createdAt',
    // updatedAt: 'lastUpdatedAt',
    paranoid: true,
    // version: true,
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  };
  return sequelize.define("items", attributes, options);

}