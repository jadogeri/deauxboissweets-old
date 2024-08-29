/**
 * @author      Joseph Adogeri
 * @since       29-AUG-2024
 * @version     1.0   
 */
const asyncHandler = require('express-async-handler');


/**
 * @description PUT New Password 
 * @route PUT /api/admin/forgot
 * @access public
 */

const forgotAdmin = asyncHandler((req, res) => {   
try{
    return res.status(200).json({message:"Admin forgot password"})

} 
  catch(e){
       return res.status(400).json({message:"something went wrong"})
    }      
});

module.exports = {forgotAdmin};