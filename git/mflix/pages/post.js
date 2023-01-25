export async function postUser(req, res){
    try {
        const formData = req.body;
        if (!formData) 
        return res.status(404).json({error: "error"})
        Users.create(formData, function(err, data){
            return res.status(200).json(data)
        })

    } catch(error) {
        return res.status(404).json({error})
    }
}