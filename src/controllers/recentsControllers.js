const RecentModel = require("../models/recentsModels")


const addRecent = async (req, res) => {
    const { song } = req.body
    const { userId } = req.params   
    try {
        const getRecent = await RecentModel.findOne({ userId }).populate("tracks")

        if (getRecent === null) {
            return await RecentModel.create({
                userId,
                tracks: [song]
            })
        }
            const repeatRecent = await getRecent.tracks.find((tracks)=>{
                return tracks.nameSong === song.nameSong
            })
            if(!repeatRecent){
                if (getRecent.tracks.length === 8) {
                    await getRecent.tracks.shift()
                    await getRecent.tracks.push(song)
                    await getRecent.save()
                }
                if (getRecent.tracks.length < 8) {
                    await getRecent.tracks.push(song)
                    await getRecent.save()
                }
            }else{
                    await getRecent.tracks.pull(song)
                    await getRecent.tracks.push(song)
                    await getRecent.save()
            }

        res.status(200).send({ status: 'OK',  })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

const getAllRecient = async (req, res) => {
    const { userId } = req.params
    try {
        const allRecent = await RecentModel.findOne({ userId }).populate("tracks")
        res.status(200).send({ status: 'OK', allRecent })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}


module.exports = { addRecent, getAllRecient }