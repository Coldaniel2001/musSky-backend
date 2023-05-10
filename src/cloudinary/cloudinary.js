const cloudinary = require("cloudinary").v2;

const config = require("../config/config")

cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret,
  secure: true,
});

const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "musSky",
  });
};

const uploadTrack = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    resource_type: 'video',
    folder: "Songs",
    format: "mp3"
  });
}

const deleteImage = async (public_id) => {
  return await cloudinary.uploader.destroy(public_id);
};



module.exports = { uploadImage, deleteImage, uploadTrack };