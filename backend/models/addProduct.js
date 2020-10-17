
const User = require('./User');

class Product{
    constructor(param){
        this.param = param;
    }
    async addProduct(){
       await User.findById(this.param._id).select("productlist").exec()
       .then((x)=>{
         x.productlist.push(this.param);
        // console.log(x);
         x.save();
       })
    }
    async getProduct(){
      const response = await User.findById(this.param._id).select("productlist").exec();
      return response;
    }
    async getAllProducts(){
      const response = await User.find().select("productlist").exec();
      return response
    }
}

module.exports = Product;