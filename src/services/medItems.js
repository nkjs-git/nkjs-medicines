const db = require("../SequelizeDb");

const getAll = async () => {
    return await db.Items.findAll();
};

const findItemById = async (id) => {
    try {
        console.log({ id })
        var exisitingItem = await db.Items.findByPk(id);
        if (!exisitingItem) {
            return { code: 404, success: false, error: "Item Does not exist" };
        }

        return exisitingItem

    } catch (error) {
        return { code: 500, success: false, error: "Something went wrong" };
    }
};

const createItem = async (req, res) => {
    console.log('Body: ', JSON.stringify(req.body))
    // const { body: { itemName, itemCode, batchNo, expiryDate, manufacturingDate, quantity } } = req
    const newItem = await db.Items.create({ ...req.body, isDeleted: false });
    return newItem;
};

const updateItem = async (req, res) => {
    try {
        var exisitingItem = await findItemById(req.params.id);
        console.log(exisitingItem);
        if (!exisitingItem) {
            return res
                .status(404)
                .json({ statusCode: 404, error: "Item Does not exist" });
        }
        const body = req.body
        await db.Items.update({ ...body, lastUpdatedAt: new Date().getTime() },
            {
                where: {
                    id: req.params.id,
                }
            });
        return await findItemById(req.params.id);
    } catch (error) {
        return res
            .statusCode(500)
            .json({ statusCode: 500, error: "Something went wrong" });
    }
};

const deleteItem = async (req, res) => {

    try {
        console.log("id: ", req.params.id)
        var exisitingItem = await db.Items.findByPk(req.params.id);
        if (!exisitingItem) {
            return { code: 404, success: false, error: "Item Does not exist" };
        }

        return await db.Items.destroy({ where: { id: req.params.id } });

    } catch (error) {
        return { code: 500, success: false, error: "Something went wrong" };
    }
};

module.exports = {
    getAll,
    findItemById,
    createItem,
    updateItem,
    deleteItem
};