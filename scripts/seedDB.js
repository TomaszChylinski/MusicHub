const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/musichub');

const skillSeed = [
	{ skill: 'accordian' },
	{ skill: 'air horn' },
	{ skill: 'baby grand piano' },
	{ skill: 'bagpipe' },
	{ skill: 'banjo' },
	{ skill: 'bass guitar' },
	{ skill: 'bassoon' },
	{ skill: 'bugle' },
	{ skill: 'calliope' },
	{ skill: 'cello' },
	{ skill: 'clarinet' },
	{ skill: 'clavichord' },
	{ skill: 'concertina' },
	{ skill: 'didgeridoo' },
	{ skill: 'digital production' },
	{ skill: 'DJ' },
	{ skill: 'dobro' },
	{ skill: 'dulcimer' },
	{ skill: 'fiddle' },
	{ skill: 'fife' },
	{ skill: 'flugelhorn' },
	{ skill: 'flute' },
	{ skill: 'French horn' },
	{ skill: 'glockenspiel' },
	{ skill: 'grand piano' },
	{ skill: 'guitar' },
	{ skill: 'harmonica' },
	{ skill: 'harp' },
	{ skill: 'harpsichord' },
	{ skill: 'hurdy-gurdy' },
	{ skill: 'kazoo' },
	{ skill: 'keytar' },
	{ skill: 'kick drum' },
	{ skill: 'lute' },
	{ skill: 'lyre' },
	{ skill: 'mandolin' },
	{ skill: 'marimba' },
	{ skill: 'mellotran' },
	{ skill: 'melodica' },
	{ skill: 'oboe' },
	{ skill: 'pan flute' },
	{ skill: 'piano' },
	{ skill: 'piccolo' },
	{ skill: 'pipe organ' },
	{ skill: 'percussion' },
	{ skill: 'saxaphone' },
	{ skill: 'sitar' },
	{ skill: 'songwriting' },
	{ skill: 'sousaphone' },
	{ skill: 'synthesizer' },
	{ skill: 'tabla' },
	{ skill: 'tambourine' },
	{ skill: 'theremin' },
	{ skill: 'trombone' },
	{ skill: 'tuba' },
	{ skill: 'ukulele' },
	{ skill: 'viola' },
	{ skill: 'violin' },
	{ skill: 'vocals' },
	{ skill: 'vuvuzela' },
	{ skill: 'washtub bass' },
	{ skill: 'xylophone' },
	{ skill: 'zither' }
];

db.Skills.remove({})
	.then(() => db.Skills.insertMany(skillSeed))
	.then(data => {
		console.log(data + ' records inserted!');
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
