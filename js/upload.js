const multer = require('multer');
const path = require('path')
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './uploads')
    },

    filename(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/png' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const limits = {
    fileSize: 1024 * 1024 * 6
}

module.exports = multer({
    storage,
    fileFilter,
    limits,
});
