module.exports = {
    mensaje: (req, res) => {
        res.status(200)
        res.send({
            mensaje: 'Hola Mundo'
        })
    },
    suma: (req, res) => {
        const valores = req.query
        let suma;
        if('num1' in valores && 'num2' in valores) {
           suma = parseInt(req.query.num1)  + parseInt(req.query.num2 ) 
           res.status(200)
           res.send({
               resultado: suma
           })
           return
        } else{
            res.status(400)
            res.send({mensaje: 'Por favor envie los parametros num1 y num2'})
            return
        }
      
    },
    usuario: (req, res) => {
        const nombre = req.query 
        if('nombre' in nombre){
            res.status(200)
            res.send({
                usuario: req.query.nombre
            })
            return
        } else{
            res.status(400)
            res.send({
                mensaje: 'Debe enviar el nombre como parametro'
            })
            return
        }
    },
    swapi: (req, res) =>{
        const num = req.query
        if('num' in num){
            fetch(`https://swapi.dev/api/people/${parseInt(num.num)}`)
            .then(response => response.json())
            .then((data) => {
                res.status(200)
                res.send({
                    personaje: data
                })
                return
            })
            
        }else{
            res.status(400)
            res.send({mensaje: 'Debe enviar un num como parametro'});
            return
        }
    },
    body: (req,res) =>{
        const body = req.body
        res.status(200)
        res.send(body)
    },
    suma1: (req,res) =>{
        const body = req.body
        console.log(body);
        let suma;
        if('num1' in body && 'num2' in body){
            suma = parseInt(body.num1) + parseInt(body.num2)        
            res.status(200)
            res.send({
                resultado: suma
            })
        } else {
            res.status(400)
            res.send({mensaje: 'Debe enviar num1 y num2'})
        }
    },
    delete: (req,res) =>{
        const {num} = req.query
        if( parseInt(num) == 3){
            res.status(200)
            res.send({mensaje: 'Se ha eliminado el objeto con ID 3'})
        }else{
            res.status(404)
            res.send({mensaje: `No se encontro el objeto con ID ${num}`})
        }
    
    
    }
}