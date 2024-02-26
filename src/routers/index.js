const { MedItemsController } = require('../controllers')

const { asyncwrap } = require('../middleware')

const items = function ({ router }) {
  router.get('/', asyncwrap(MedItemsController.getItems))
  router.get('/:id', asyncwrap(MedItemsController.getItemById))
  router.post('/', asyncwrap(MedItemsController.createItem))
  router.delete('/:id', asyncwrap(MedItemsController.deleteItem))
  router.put('/:id', asyncwrap(MedItemsController.updateItem))
  return router
}

module.exports = {
  items
}
