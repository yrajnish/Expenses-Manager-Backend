const { successResponse } = require('../../utils/serializer');
const schema = require('./schema');

const getAllCategory = async (req, res) => {
    // const data = await schema.find({}).limit(10).skip(10);
    const data = await schema.find({});
    return res.send(successResponse(data));
}

const createCategory = async (req, res) => {
    const data = await schema.create({
        ...req.body
    });

    return res.send(successResponse('', 201, 'Created'));
}

const updateCategory = async (req, res) => {
    const data = await schema.findByIdAndUpdate(req.params.id, {
        ...req.body
    });
    return res.send(successResponse('', 200, 'Updated'));
}

const deleteCategory = async (req, res) => {
    await schema.findByIdAndDelete(req.params.id);
    return res.send(successResponse('', 200, 'Deleted'));
}

const getCategoryById = async (req, res) => {
    const data = await schema.findById(req.params.id);
    return res.send(successResponse(data, 200, 'OK'));
}

module.exports = {
    getAllCategory,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategoryById,
}