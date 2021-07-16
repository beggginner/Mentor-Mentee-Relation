const handleRegisterMentor = (req,res,db,bcrypt) => {
	console.log(req.body);
	const {name,email,password,phone,locality,city,state,language,schoolname,schoolcity,schoolstate,gender,mentoredBefore,qualification,occupation,expertise,dislike,skills,describeyourself,extracurricular,important,agree} = req.body;
	const hash = bcrypt.hashSync(password);

	console.log(name,email);

	db("users").insert({username:name,password:password,role:0,status:"pending",phone:parseInt(phone),schoolcity:schoolcity,schoolstate:schoolstate,agree:agree,gender:gender,email:email}	)
	.returning('uid')
	.then(userid=>{
		console.log(userid);
		let questionsList = [locality,city,state,language,schoolname,occupation,expertise,describeyourself,extracurricular,important];
		for(var i=0;i<=10;i++) {
			if(i!=7){
				db("responses").insert({qid:i+1,uid:parseInt(userid),responses:questionsList[i],role:1}).then(resp=>console.log(resp));		
			}
		}		
	});

	

	// res.json("hello");
	

}

module.exports = {
	handleRegisterMentor:handleRegisterMentor
}