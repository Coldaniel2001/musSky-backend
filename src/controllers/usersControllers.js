const UserModel = require("../models/usersModels")
const { uploadImage, deleteImage } =require("../cloudinary/cloudinary")
const fs =require("fs-extra")





const getAllUsers = async (req, res) => {
    try {
        const allUsers = await UserModel.find({})
        res.status(200).send({ status: 'OK', allUsers })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

const getUser = async (req, res) => {
    const {userId} = req.params

    try {
        const user = await UserModel.findOne({ _id: userId }).exec()
        console.log(user)
        res.status(200).send({ ok:true, user })
    } catch (error) {
        res.status(500).send({ ok: false, msg: "error" })
    }
}

const getUserById = async (req, res) => {
    const {userId} = req.params

    try {
        const user = await UserModel.findOne({ _id: userId }).exec()
        console.log(user)
        res.status(200).send({ ok:true, user })
    } catch (error) {
        res.status(500).send({ ok: false, msg: "error" })
    }
}

const createUsers = async (req, res) => {
    const { name, nickname, surname, picture, updated_at, email, rol } = req.body
    try {

        const user = await UserModel.findOne({ email: email })
        if (user) {
            return res.status(200).send({ status: 'False', msg: "This User Exist" })
        }
        const newUser = await UserModel.create({
            name,
            surname,
            nickname,
            email,
            picture,
            updated_at,
            rol
        })
        return res.status(200).send({ status: 'OK', newUser })

    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

const editImage = async (req, res) => {
    const { userId } = req.body;
    try {
        const user = await UserModel.findOne({ _id: userId });
        const resultToUpload = await uploadImage(req.files.file.tempFilePath);
        // const { public_id, secure_url } = resultToUpload;
        const { secure_url } = resultToUpload;
        // console.log(public_id)
        // const imgToDelete = user.img.public_id;

        user.picture = secure_url
        // user.img.public_id = public_id;
        // user.img.secure_url = secure_url;

        // if (imgToDelete) {
        //     await deleteImage(imgToDelete);
        // }

        await user.save();

        await fs.unlink(req.files.file.tempFilePath);

        return res.status(200).json({
            ok: true,
            img: secure_url,
        });
    } catch (error) {
        console.log(error);
        return res.status(503).json({
            ok: false,
            msg: "Something happened",
        });
    }
};

const getUserByEmail = async (req, res) => {
    const { email } = req.params
    try {
        const user = await UserModel.findOne({email:email})
        return res.status(200).json({ ok: true, user })
    } catch (error) {
        return res.status(500).json({ ok: false, msg: "error" })
    }
}

const updateUser = async (req,res) => {
    const { userId, newValue } = req.body;
    const { name, surname, nickname, rol } = newValue
    console.log(nickname)

    try {
        const user = await UserModel.findOneAndUpdate({_id:userId}, {name:name, surname:surname, nickname:nickname, rol:rol} , {new:true})
        return res.status(200).json({ok:true, user})   
    } catch (error) {
        return res.status(303).json({ok: false, msg: "Something happened", error:error})  
    }
}

module.exports = { getAllUsers, createUsers, editImage, getUserByEmail, getUser, updateUser, getUserById }