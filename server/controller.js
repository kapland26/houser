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
    }
}