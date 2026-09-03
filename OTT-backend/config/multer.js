const multer = require("multer")

const storage = multer.memoryStorage()
const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
];

const fileFilter = (req, file,cb) => {
    if(allowedMimeTypes.includes(file.mimetype)){
        cb(null,true)
    }else{
        cb(new Error("This file type upload is not allowed"))
    }
}

const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024* 1024
    },
    fileFilter
})

module.exports = upload;