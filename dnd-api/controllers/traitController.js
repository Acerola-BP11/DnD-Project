import Trait from "../models/Trait";

export const getTrait = async (req, res) => {
    const traitID = req.params.traitID
    const trait = await Trait.findByPk(traitID)
    res.send(trait)
}

export const createTrait = async (req, res) => {
    const trait = await Trait.create(req.body)
    res.send(trait)
}

export const updateTrait = async (req, res) => {
    const traitID = req.body.traitID
    const user = req.body.user
    const trait = await Trait.findByPk(traitID)
    if(trait.userID != user) {
        res.send(403).end()
    }else {
        await trait.update(res.body)
        res.send('Habilidade atualizada com sucesso')
    }
}

export const destroyTrait = async (req, res) => {
    const traitID = req.body.traitID
    const user = req.body.user
    const trait = Trait.findByPk(traitID)
    if(trait.userID != user) {
        await res.send(403).end()
    }else {
        await trait.destroy()
        res.send('Habilidade excluida com sucesso')
    }
}