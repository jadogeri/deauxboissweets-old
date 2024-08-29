const asyncHandler = require('express-async-handler');

/**
 * @description PUT New Password 
 * @route PUT /api/admin/reset
 * @access public
 */

const resetAdmin = asyncHandler((req, res) => {  
    try{
        return res.status(200).json({message:"Admin reset password"})
    }
    catch(e){
       return res.status(400).json({message:"something went wrong"})
    }      
});

module.exports = {resetAdmin};