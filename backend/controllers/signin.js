const handleSignin = (req,res,db,bcrypt) => {
  db.select('*').from('users')
  .where('email','=',req.body.email)
  .then(data=>{
    if(req.body.password==data[0].password){
      res.json("true");
    }
    else{
      res.json("false");
    }
  }).catch(err=>res.status(400).json("Wrong Crendentials"));
}
module.exports = {
  handleSignin: handleSignin
};