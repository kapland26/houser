module.exports = {
    read: ( req, res ) => {
        const connection = req.app.get('db');
        connection.get_houses()
            .then( (houses)=>{
                res.status(200).send(houses)})
            .catch( (err) => {
                console.log(err)
                res.status(500).send(err) 
            });    
    },
    create:( req, res ) => {
        const connection = req.app.get('db');
        const {name,address, city, state, zipcode} = req.body;
        console.log("name: "+name+" zip= "+zipcode)
        connection.create_house([name,address, city, state, zipcode])
            .then( ()=> res.status(200).send())
            .catch( (err) => {
                console.log(err)
                res.status(500).send(err) 
            });    
    },
    delete:(req, res) => {
        const connection = req.app.get('db');
        
        connection.delete_house([req.params.id])
        .then( ()=> res.status(200).send())
        .catch( (err) => {
            console.log(err)
            res.status(500).send(err) 
        });   
    }
}