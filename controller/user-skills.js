const db = require('../models/');

module.exports = function(router) {
	router.post('/api/skillset', (req, res) => {
		db.newSkill
			.create(req.body)
			.then(data => {
				res.json(data);
			})
			.catch(err => {
				res.json({ error: err });
			});
	});
	router.get('/api/skillset', (req, res) => {
		// search user-skills for users that have skill
		let userArray = [];
		db.newSkill
			.find({ skill: req.body.skill })
			.populate('user')
			.then(data => {
				res.json(data);
			});
	});
	// .then(data => {
	// 	// search users table for users whose ids match skill search
	// 	// for (let i = 0; i < data.length; i++) {
	// 	// 	db.Users.find({ _id: data[i].user }).then(res.json(data));
	// 	// }
	// 	// db.Users.find({ _id: data.user }).then(response => {
	// 	// 	res.json(response);
	// 	// });
	// 	// skillArray.push(data);
	// 	for (let i = 0; i < data.length; i++) {
	// 		userArray.push(data[i].user);
	// 	}
	//     // res.json(userArray);
	//     db.Skills.find({_id:})
	// })
	// .catch(err => {
	// 	res.json({ error: err });
	// });
	// });
};
