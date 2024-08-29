const jwt = require('jsonwebtoken');
function validateTokenBody(req, res, next) {
const { token } = req.body
if (!token){ 
    return res.status(401).json({ error: 'Access denied due to no token ' });}
try {
    console.log(process.env.JSON_WEB_TOKEN_KEY);
 const verified = jwt.verify(token, process.env.JSON_WEB_TOKEN_KEY);
 console.log(JSON.stringify(verified));
 next();
 } catch (error) {
 res.status(401).json({ error: 'Invalid token' });
 }
 };

module.exports = { validateTokenBody };