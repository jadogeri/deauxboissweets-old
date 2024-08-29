/**
 * @author      Joseph Adogeri
 * @since       27-AUG-2024
 * @version     1.0   
 */

const asyncHandler = require('express-async-handler');

/**
 * @description Login Admin
 * @route POST /api/admin/login
 * @access public
 */

const loginAdmin = asyncHandler((req, res) => {
    try{
        return res.status(200).json({"message":"Admin logged in"});  

    }catch(e){console.log(e);
        return res.status(400).json({ message: e});
    }
});

module.exports = { loginAdmin }