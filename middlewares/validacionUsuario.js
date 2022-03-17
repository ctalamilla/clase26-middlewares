
const admin = ['Ada', 'Greta', 'Vim', 'Tim']

function validacionUsuario(req, res, next){
    let user= req.query.user;
    validacion = admin.includes(user);
    if (validacion == false){res.send('No tiene privilegios para ingresar') };
    
    next();

};

module.exports = validacionUsuario; 