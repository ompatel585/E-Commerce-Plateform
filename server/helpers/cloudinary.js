// import { v2 as cloudinary } from "cloudinary";
// import multer from "multer";

// cloudinary.config({
//     cloud_name: "dllnnlopn",
//     api_key: "137622224556557",
//     api_secret: "KlDRhScX5MOVSpXoc1MOZR75C-E",
// });

// const storage = new multer.memoryStorage();     

// async function imageUploadUtil(file) {
//     const result = await cloudinary.uploader.upload(file, {
//         resource_type: "auto",
//     });

//     return result;
// }

// const upload = multer({ storage });

// module.exports = { upload, imageUploadUtil };


import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

cloudinary.config({
    cloud_name: "dllnnlopn",
    api_key: "137622224556557",
    api_secret: "KlDRhScX5MOVSpXoc1MOZR75C-E",
});

const storage = multer.memoryStorage();

export async function imageUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file, {
        resource_type: "auto",
    });

    return result;
}

export const upload = multer({ storage });
