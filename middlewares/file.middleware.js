const path  = require('path');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

// MULTER + CLOUDINARY STORAGE
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: '/multer',
        format: async (req, file) => {
            const VALID_FILE_TYPES = ['image/png', 'image/jpg', 'image/jpeg'];
            if (!VALID_FILE_TYPES.includes(file.mimetype))  {
                cn(new Error('Invalid file type'));
            } else {
                var type = file.mimetype.substring(file.mimetype.indexOf('/')+1);
                return type;
            }
        },
        public_id: (req, file) => {
            const imageName = file.originalname.substring(0, file.originalname.indexOf('.'));

            if(imageName != null) {
                return imageName
            } else {
                return 'Default name';
            }
        }
    }
});

const parser = multer( {storage: storage})

module.exports = {  parser };
