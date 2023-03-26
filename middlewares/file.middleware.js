const path  = require('path');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;

// MULTER
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
//    filename: (req, file, cb) => {
//        cb(null, `${Date.now()}-${file.originalname}`);
//    },
//    destination: (req, file, cb) => {
//        cb(null, path.join(__dirname, '../temp'));
//    }
    }
});

const parser = multer( {storage: storage})
//const VALID_FILE_TYPES = ['image/png', 'image/jpg', 'image/jpeg'];
//
//const fileFilter = (req, file, cb) => {
//    if (!VALID_FILE_TYPES.includes(file.mimetype))  {
//        cn(new Error('Invalid file type'));
//    } else {
//        cb(null, true);
//    }
//}


//const upload = multer({
//    storage,
//    fileFilter
//});


// SUBIDA A CLOUDINARY
//const uploadToCloudinary = async (req, res, next) => {
//	if (req.file) {
//    try{
//		const filePath = req.file.path;
//        const img = await cloudinary.uploader.upload(filePath);
//        await fs.unlinkSync(filePath);
//        req.file_url = img.secure_url;
//		return next();
//    }catch(error){
//      return next(error)
//    }
//  } else {
//    return next();
//  }
//};


module.exports = {  parser };
