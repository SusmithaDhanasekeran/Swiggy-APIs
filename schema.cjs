const mongoose = require ('mongoose')
const restaurantsSchema = new mongoose.Schema({
    name: {
        type: String
    },
    avgRating :{
        type: Number 
    },
    costForTwo :{
        type: String
    },
    cuisines: {
        type: Array
    },
    name : {
        type : String
    }


})
const restaurant = mongoose.model('restaurantList',restaurantsSchema)
module.exports = (restaurant)

const userSchema = new mongoose.Schema({
    contact : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    userName : {
        type : String
    },
})
const Users = mongoose.model('userDetail', userSchema)

module.exports = {restaurant, Users}