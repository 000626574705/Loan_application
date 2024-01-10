const jwt = require('jsonwebtoken');
const landingPage = (req, res) => {
  token = req.cookies['token']
  let data = null
  try{
    const decoded = jwt.decode(token);
    data = decoded.name
  }catch(e){
    data = null    
  }
  res.render("landing/landing.ejs", {data});
};

module.exports = { landingPage };
