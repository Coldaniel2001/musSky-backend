const RecentModel = require("../models/recentsModels")


const addRecent = async (req, res) => {
    const { song } = req.body
    const { userId } = req.params
    try {
        const getRecent = await RecentModel.findOne({ userId })
        if(getRecent === null) {
            return await RecentModel.create({
                userId, 
                tracks: [song]
            })
        }
        if(getRecent.tracks.length<8){
            await getRecent.tracks.push(song)
            await getRecent.save()
        } 
        if(getRecent.tracks.length===8){
            getRecent.tracks.shift()
            await getRecent.tracks.push(song)
            await getRecent.save()
        }

        res.status(200).send({ status: 'OK' })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

module.exports={addRecent}