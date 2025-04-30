const productModel = (sequalize, DataTypes)=>{
Product = sequalize.define("product",{
    productName:{
        type: DataTypes.STRING
    },
    productDescription: {
        type: DataTypes.STRING
    },
    productPrice:{
        type: DataTypes.INTEGER
    }
})
return Product
}

module.exports = productModel