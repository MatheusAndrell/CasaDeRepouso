const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');
const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
let user = models.User;
let Cadastro = models.Cadastro;
let dashboarduser = models.Dashboarduser;
let bateponto = models.Bateponto;

app.post('/login', async (req, res) => {
    try {
        let response = await user.findOne({
            where: { user: req.body.user, password: req.body.password },
        });

        if (response) {
            res.status(200).json({ success: true, name: response.name });
        } else {
            res.status(401).json({ success: false, message: "Usuário ou senha incorretos" });
        }
    } catch (error) {
        console.error("Erro no servidor:", error);
        res.status(500).json({ success: false, message: "Erro interno do servidor" });
    }
});

let port = process.env.PORT || 3000;    
app.listen(port,(req,res)=>{
    console.log(`Servidor rodando na porta ${port}`)
})