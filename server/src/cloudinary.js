const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadOnCloud = async (bufferFile) => {
  try {
    if (!bufferFile) {
      console.error("no file found");
    }
    const response = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: "auto",
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      uploadStream.end(bufferFile);
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
const deleteFromCloud = async (publicIds) => {
  try {
    if (!Array.isArray(publicIds) || publicIds.length == 0) {
      return null;
    }
    const responses = await Promise.all(
      publicIds?.map((id) => cloudinary.uploader.destroy(id))
    );
    return responses;
  } catch (error) {
    return null;
  }
};
module.exports = {
  uploadOnCloud: uploadOnCloud,
  deleteFromCloud: deleteFromCloud,
};
