const { successResponse } = require('../../utils/serializer');
const schema = require('./schema');
const bcrypt = require('bcrypt');

const getAllUser = async (req, res) => {
    // const data = await schema.find({}).limit(10).skip(10);
    const data = await schema.find({});
    return res.send(successResponse(data));
}

const loginUser = async (req, res) => {
    const { username , password} = req.body;
    const user = await schema.findOne({
        username: username
    }).exec();
              
    if(!user){
         return res.status(400).send('user not found');
        
    }
          const passwordMatched = await bcrypt.compare(password, user.password);

          if(!passwordMatched){
            return res.status(400).send('username or password is incorrect');
          }

          return res.send(successResponse (user, 200, 'authenticated'));


    }
    


const createUser = async (req, res) => {
    const userData = req.body;
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const data = await schema.create({

    ...userData,
    password: hashedPassword

    });

    return res.send(successResponse('', 201, 'Created'));
}

const updateUser = async (req, res) => {
    const data = await schema.findByIdAndUpdate(req.params.id, {
        ...req.body
    });

    return res.send(successResponse('', 200, 'Updated'));
}

const deleteUser = async (req, res) => {
    await schema.findByIdAndDelete(req.params.id);
    return res.send(successResponse('', 200, 'Deleted'));
}

const getUserById = async (req, res) => {
    const data = await schema.findById(req.params.id);
    return res.send(successResponse(data, 200, 'OK'));
}

module.exports = {
    getAllUser,
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    loginUser,
}