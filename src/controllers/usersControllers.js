const getAllUsers = (req,res)=>{
    try{

        res.status(200).send({status:'OK'})
    } catch(error) {
        res.status(500).send({status:'FALSE'})
    }
}

module.exports={getAllUsers}