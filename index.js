const express = require('express');
const app = express();

app.get('/', (req,res) => {
	res.status(200).send({ message: 'Ola mundo esse é meu novo repositorio clonado' });
})

app.listen(4001, () => {
	console.log('Api rodando na porta 4001');
})