const product_category = require('../models/Category');

module.exports = (app) => {
    app.get('/api/getMenuItems', (req,res,next) => {
        product_category.find({category_parent: "None"})
        .exec()
        .then((categoryinfo) => {
            console.log(categoryinfo)
            return (
                res.send(categoryinfo)
            );
        })
        .catch((err) => next(err))
    })

    // app.post('/api/adddata', (req, res, next) => {
    //     const data = new Data({...req.body});
    
    //     try{
    //       data.save()
    //       .then(res.json(data));
    //       console.log(req.body)
          
    //     }catch(err){
    //       console.log(err);
    //     }
    //   });
}