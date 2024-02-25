const { PingService } = require("../services")

async function getAllItems(req, res) {
    const data = await PingService.getAllItems(req, res)
    req.responseObject = data
    console.log('data: ', data)
}

module.exports = {
    getAllItems
}