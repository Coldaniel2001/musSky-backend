const cloudinary = require("cloudinary").v2;
const dotenv = require('dotenv')

dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
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