//This is the code written find a single approproate mentor to a newly joining student, we had the backend part ready, but 
//due to lack of time and lack of frontend people in our group we weren't able to implement this in our code, so, this
//strateg used here decides a single appropriate mentor to the student based on the questions asked to them while they register.

const handleFind = (req,res,db) => {
	const {name} = req.body;

	db('users').where('username','=',name).select('genderpref','uid')
	.then(genderpref=>{
		db('users').where('gender','=',genderpref[0].genderpref).select("*").then(genderFilter=>{
			var check=0;
			for(var i=1;i<=5;i++) {

				const subqueryIdq1 = db('responses').where({qid:i,uid:genderpref[0].uid}).select('responses');
			
				Object.entries(genderFilter[0]).map(item => {
					if(item[0]=="uid"){
						var check=1;
						const subqueryIdq11 = db('responses').where({qid:i,uid:item[1],responses:subqueryIdq1});
						subqueryIdq11.then(resp=>{
							db('users').where({uid:resp[0].uid}).select("*").then(response=>console.log("here",response));
						});
					}
				})

			}
			if(check==0) {
				console.log(genderFilter[0]);
				res.json()
			}


			
		
			// console.log("here",uidArray);
						
		});
	})
	res.json("hello");
}

module.exports= {
	handleFind:handleFind
}