// import { v2 as cloudinary } from 'cloudinary'
// import dotenv from 'dotenv'
// // const dotenv = require('dotenv')

// // const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env
// dotenv.config()

// cloudinary.config({
//     cloud_name: 'dfg3nr91y',
//     api_key: '652625277492745',
//     api_secret: 'YuNrfe9vO79wpNnfPC8JhLZIQsM',
//     secure: true

//     // cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     // api_key: process.env.CLOUDINARY_API_KEY,
//     // api_secret: process.env.CLOUDINARY_API_SECRET,
//     // secure: true
// });

// export const uploadImage = async (filePath) => {
//     return await cloudinary.uploader.upload(filePath, {
//         folder: 'musSky'
//     })
// }

// export const deleteImage = async (public_id) => {
//     return await cloudinary.uploader.destroy(public_id)
// }