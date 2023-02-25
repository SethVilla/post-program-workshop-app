const cloudinary = require("../../config/cloudinary/index");

const createPost = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.body.img);
        console.log(result);
        console.log(req.body.fileName);
        res.json({
            success: true
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    createPost
}