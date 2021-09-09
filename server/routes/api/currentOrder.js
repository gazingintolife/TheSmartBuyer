const Order = require('../../models/CustomerInfo');

module.exports = (app) => {
    app.post('/api/currentOrder', (req, res, next) => {
        const order = new Order({...req.body});
    
        try{
          order.save()
          .then(res.json(order));
          console.log(order)
          
        }catch(err){
          console.log(err);
        }
      });
}