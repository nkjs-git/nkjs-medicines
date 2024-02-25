'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Items', // table name
        'id', {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      }
      ),
      queryInterface.addColumn(
        'Items',
        'itemName', {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ),
      queryInterface.addColumn(
        'Items',
        'itemCode', {
        type: Sequelize.STRING
      },
      ),
      queryInterface.addColumn(
        'Items',
        'batchNo', {
        type: Sequelize.STRING
      }
      ),
      queryInterface.addColumn(
        'Items',
        'expiryDate', {
        type: Sequelize.DATE
      }
      ),
      queryInterface.addColumn(
        'Items',
        'manufacturingDate', {
        type: Sequelize.DATE
      }
      ),
      queryInterface.addColumn(
        'Items',
        'quantity', {
        type: Sequelize.BIGINT
      }
      ),
      queryInterface.addColumn(
        'Items',
        'createdAt', {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
      ),
      queryInterface.addColumn(
        'Items',
        'lastUpdatedAt', {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
      ),
      queryInterface.addColumn(
        'Items',
        'deletedAt', {
        type: Sequelize.DATE
      }
      ),
      queryInterface.addColumn(
        'Items',
        'isDeleted', {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
      )
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('Items', 'id'),
      queryInterface.removeColumn('Items', 'itemName'),
      queryInterface.removeColumn('Items', 'itemCode'),
      queryInterface.removeColumn('Items', 'batchNo'),
      queryInterface.removeColumn('Items', 'expiryDate'),
      queryInterface.removeColumn('Items', 'manufacturingDate'),
      queryInterface.removeColumn('Items', 'quantity'),
      queryInterface.removeColumn('Items', 'createdAt'),
      queryInterface.removeColumn('Items', 'lastUpdatedAt'),
      queryInterface.removeColumn('Items', 'deletedAt'),
      queryInterface.removeColumn('Items', 'isDeleted'),
    ]);
  },
};
