const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path.join(__dirname, '../../public/uploads'));
    },
    filename: function (req, file, callback) {
        const isPicture = file.mimetype.includes("image");
        if (!isPicture) {
            callback(new Error("The file is not a picture."));
            return;       
        }

        const extension = file.mimetype.split('/')[1];
        const finalName = Date.now() + '.' + extension;
        callback(null, finalName);
    }
});

const upload = multer({ storage,
    limits: {
        fileSize: 5 * 1024 * 1024 
    }
 });
module.exports = upload;