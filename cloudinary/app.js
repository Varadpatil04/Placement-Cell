// const cloudinary = require('cloudinary').v2;
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUDNAME,
//     api_key: process.env.CLOUDINARY_APIKEY,
//     api_secret: process.env.CLOUDINARY_APISECRET
// })

// const storage = new CloudinaryStorage({
//     cloudinary,
//     params: {
//         folder: 'ProjectDemo',
//         allowedFormats: ['jpeg', 'png', 'jpg', "pdf"]
//     }
// });

// module.exports = {
//     cloudinary,
//     storage
// }