/**
 * @author      Joseph Adogeri
 * @since       28-AUG-2024
 * @version     1.0   
 */
const asyncHandler = require('express-async-handler');

/**
 * @description Logout Admin
 * @route PUT /api/admin/logout
 * @access public
 */

const logoutAdmin = asyncHandler( (req, res) => {
    try{
        return res.status(200).json({"message":"Admin logged out"}); 

    }catch(e){ console.log(e)
        return res.status(400).json({ message: e});

    }
 });


 module.exports = {logoutAdmin}