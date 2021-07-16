const handleRegisterMentee = (req,res,db,bcrypt) => {
	console.log(req.body);
	const {name,email,password,guardianName,guardianNumber,locality,city,state,language,genPref,schoolName,schoolCity,schoolState,aspireTobe,subjectInterest,desStudy,desYourself,extraCurricular,desImportant} = req.body;
	const hash = bcrypt.hashSync(password);
	console.log(name,email);

	db("users").insert({username:name,password:password,role:3,guardianname:guardianName,guardiannumber:guardianNumber,schoolcity:schoolCity,schoolstate:schoolState,genderpref:genPref,email:email})
	.returning('uid')
	.then(userid=>{
		console.log(userid);
		let questionsList = [locality,city,state,language,schoolName,aspireTobe,subjectInterest,desYourself,extraCurricular,desImportant];
		for(var i=0;i<=10;i++) {
			db("responses").insert({qid:i+1,uid:parseInt(userid),responses:questionsList[i],role:0}).then(resp=>console.log(resp));		
		}		
	}).catch((err)=>{console.log(err)});

	

	res.json("registered mentees");
	

}

module.exports = {
	handleRegisterMentee:handleRegisterMentee
}