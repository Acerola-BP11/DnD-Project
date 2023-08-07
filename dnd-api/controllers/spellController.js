import Spell from "../models/Spell";

export const getSpell = async (req, res) => {
    const spellID = req.params.spellID
    const spell = Spell.findByPk(spellID)
    res.send(spell)
}

export const createSpell = async (req, res) => {
    const spell = await Spell.create(req.body)
    res.send(spell)
}

export const updateSpell = async (req, res) => {
    const spellID = req.body.spellID
    const user = req.body.user
    const spell = await Spell.findByPk(spellID)
    if(spell.userID != user) {
        res.status(403).end()
    }else {
        await spell.update(req.body)
        res.send('Magia atualizada com sucesso')
    }
}

export const deleteSpell = async (req, res) => {
    const spellID = req.body.spellID
    const user = req.body.user
    const spell = await Spell.findByPk(spellID)
    if(spell.userID != user) {
        res.status(403).end()
    }else {
        await spell.destroy()
        res.send('Magia excluida com sucesso')
    }
}