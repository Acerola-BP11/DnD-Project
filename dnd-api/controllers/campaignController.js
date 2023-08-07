import Character from '../models/Character'
import Campaign from '../models/Campaign'

export const getCampaign = async (req, res) => {
    const campaignID = req.params.id
    const campaign = await Campaign.findByPk(campaignID)
    res.send(campaign)
}

export const getCharacters = async (req, res) => {
    const campaignID = req.params.campaignID
    const characters = await Campaign.findByPk(campaignID, {include: Character})
    res.send(characters)
}

export const createCampaign = async (req, res) => {
    const [ownerID, name] = req.body
    await Campaign.create(ownerID, name)
    res.send('Campanha criada com sucesso')
}

export const updateCampaignName = async (req, res) => {
    const [campaignID, user, newName] = req.body
    const campaign = await Campaign.findByPk(campaignID)
    if (campaign.owner != user) {
        res.send(403).end()
    }else{
        await campaign.update('name', newName)
        res.send(newName)
    }
}

export const deleteCampaign = async (req, res) => {
    const [campaignID, user] = req.body
    const campaign = await Campaign.findByPk(campaignID)
    if (campaign.owner != user) {
        res.status(403).end()
    } else {
        campaign.destroy()
        res.send('Campanha excluida com sucesso')
    }
}