const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const senhaValidar = require('./decodificar');
const calcularEndereco = require('./indentificarEndereco');

exec('npm test', (error, stdout, stderr) => {
    if (error) {
        console.error('Error running tests:', error);
        process.exit(1);
    } else {
        console.log(stdout);
        console.error(stderr);
        app.get('/quantidade-senhas', (req, res) => {
            const minPassword = 184759;
            const maxPassword = 856920;

            let count = 0;

            for (let password = minPassword; password <= maxPassword; password++) {
                if (senhaValidar(password)) {
                    count++;
                }
            }

            res.json({ quantidadeSenhas: count });
        });

        app.get('/verificar-senha/:senha', (req, res) => {
            const senha = req.params.senha;
            const isValid = senhaValidar(senha);

            res.json({ senha, isValid });
        });

        app.post('/commandos', (req, res) => {
            const comandos = req.body.numeros;
            const endereco =  calcularEndereco(comandos);
            res.json({ endereco });
          });

        app.listen(3000, () => {
            console.log('Servidor iniciado na porta 3000');
        });
    }
});
