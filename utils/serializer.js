const successResponse = (data, status =200, message='OK')=>{
    return {
        data,
        status,
        message
    }
}
const errorResponse = (data, status =400, message='Error')=>{
    return {
        data,
        status,
        message
    }
}

module.exports = {
    successResponse,
    errorResponse
}