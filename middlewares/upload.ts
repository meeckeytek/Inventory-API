import multer from "multer";
import path from "path";

export default multer({
  storage: multer.diskStorage({    
    destination: function(req, res, cb){
      cb(null, './uploads')
  },
  filename: function(req, file, cb){
      cb(null, Date.now() + path.extname(file.originalname))
  }
  }),
  fileFilter: (req: any, file: any, cb: any) => {
    let ext = path.extname(file.originalname);
    if (
      ext !== ".jpg" &&
      ext !== ".jpeg" &&
      ext !== ".png" &&
      ext !== ".JPEG" &&
      ext !== ".PNG" &&
      ext !== ".JPG"
    ) {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});
