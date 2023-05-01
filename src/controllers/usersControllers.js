const UserModel = require("../models/usersModels")
// import { uploadImage } from "../utils/cloudinary"


const getAllUsers = (req, res) => {
    try {
        res.status(200).send({ status: 'OK' })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

const createUsers = async (req, res) => {
    try{
        const user = await UserModel.findOne({email:req.body.email})
        if(user){
            return res.status(200).send({ status: 'False', msg: "This User Exist" })
        }
        const newUser = new UserModel(req.body)

        // if(req.files?.image){
        //     const result = await uploadImage(req.files.image.tempFilePath)
        // }
        await newUser.save()
        return  res.status(200).send({ status: 'OK', createUsers })

    }catch(error){
        res.status(500).send({ status: 'FALSE' })
    }
}

const editImage = async (req, res) => {
    const { userId } = req.body;
    try {
        const user = await user.findOne({ _id: userId });
        const resultToUpload = await uploadImage(req.files.file.tempFilePath);
        const { public_id, secure_url } = resultToUpload;
        const imgToDelete = user.img.public_id;

        user.img.public_id = public_id;
        user.img.secure_url = secure_url;

        if (imgToDelete) {
            await deleteImage(imgToDelete);
        }

        await user.save();

        await fs.unlink(req.files.file.tempFilePath);

        return res.status(200).json({
            ok: true,
            img: user.img.secure_url,
        });
    } catch (error) {
        console.log(error);
        return res.status(503).json({
            ok: false,
            msg: "Something happened",
        });
    }
};

module.exports = { getAllUsers, createUsers, editImage }