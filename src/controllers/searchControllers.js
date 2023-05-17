const PlaylistModel = require("../models/playlistModels");
const TracksModel = require("../models/tracksModels");
const UserModel = require("../models/usersModels");


const search = async (req, res) => {
    const { query } = req.params

  try {
    const artists = await UserModel.find({
       rol: "artist",
      name: { $regex: new RegExp(query, "i") },
    });
    const tracks = await TracksModel.find({
        nameSong: { $regex: new RegExp(query, "i") },
    });
    const playlists = await PlaylistModel.find({
        namePlaylist: { $regex: new RegExp(query, "i") },
    });
    res.status(200).json({ ok: true, data: { artists, tracks, playlists } })
}catch {

}
}

module.exports = { search }