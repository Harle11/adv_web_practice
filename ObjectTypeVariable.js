let brand = "SomeBrand"
let no_of_keys = 101
let colour = "Black"
let price = 500
let keyboard = {brand,no_of_keys,colour,price}
let new_key_no = 105
let update_keys = function()
{
    this.no_of_keys = new_key_no
}
let show = function()
{
    console.log(`Keyboard Specifications:\nBrand: ${this.brand}\nNo of keys: ${this.no_of_keys}\nColour: ${this.colour}\nPrice: ${this.price}`)
}
keyboard = {brand,no_of_keys,colour,price,update_keys,show}
keyboard.update_keys()
keyboard.show()