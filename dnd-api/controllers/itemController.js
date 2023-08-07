import Item from "../models/Item";

export const getItem = async (req, res) => {
    const itemID = req.params.itemID
    const item = await Item.findByPk(itemID)
    res.send(item)
}

export const createItem = async (req, res) => {
    const item = await Item.create(req.body)
    res.send(item)
}

export const updateItem = async (req, res) => {
    const itemID = req.body.itemID
    const user = req.body.user
    const item = await Item.findByPk(itemID)
    if(item.userID != user) {
        res.send(403).end()
    }else {
        await item.update(res.body)
        res.send('Item atualizado com sucesso')
    }
}

export const destroyItem = async (req, res) => {
    const itemID = req.body.itemID
    const user = req.body.user
    const item = Item.findByPk(itemID)
    if(item.userID != user) {
        await res.send(403).end()
    }else {
        await item.destroy()
        res.send('Item excluido com sucesso')
    }
}