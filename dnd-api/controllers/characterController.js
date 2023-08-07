import Character from "../models/Character";

export const getCharacter = async (req, res) => {
    const characterID = req.params.characterID
    const character = await Character.findByPk(characterID)
    if(character === null){
        res.status(404).send('Personagem não encontrado')
    }else{
        res.send(character)
    }
}

export const createCharacter = async (req, res) => {
    const character = Character.create(req.body)
    res.send(character)
}

export const updateCharacter = async (req, res) => {
    const user = req.body.user
    const characterID = req.body.characterID
    const character = await findByPk(characterID)
    if(character.userID != user) {
        res.status(403).end()
    }else{
        await character.update(req.body)
    }
}

export const deleteCharacter = async (req, res) => {
    const user = req.body.user
    const characterID = req.body.characterID
    const character = await Character.findByPk(characterID)
    if(user != character.userID) {
        res.status(403).end()
    }else {
        await character.destroy()
        res.send('Personagem excluido com sucesso')
    }
}