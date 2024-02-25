const { MedItemsService } = require("../services")

async function createItem(req, res) {
    const data = await MedItemsService.createItem(req, res)
    console.log(JSON.stringify(data))
    req.responseObject = data
}

async function getItems(req, res) {
    const data = await MedItemsService.getAll()
    console.log(JSON.stringify(data))
    req.responseObject = data
}

async function getItemById(req, res) {
    const data = await MedItemsService.findItemById(req.params.id)
    console.log(JSON.stringify(data))
    req.responseObject = data
}

async function deleteItem(req, res) {
    const data = await MedItemsService.deleteItem(req)
    console.log(JSON.stringify(data))
    req.responseObject = data
}

async function updateItem(req, res) {
    const data = await MedItemsService.updateItem(req, res)
    console.log(JSON.stringify(data))
    req.responseObject = data
}

module.exports = {
    getItems,
    getItemById,
    createItem,
    deleteItem,
    updateItem
}