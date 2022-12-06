//contains variable holding all items in bag

const itemsList = []
let subTotal = 0;

function addToList(item){
    let alreadyInList = false
    itemsList.map((Listitem)=>{
        if (Listitem.name == item.name){
            alreadyInList = true
        }
    })
    if (alreadyInList == false){
        item.quantity = 1;
        itemsList.push(item);
        this.calculateSubtotal();
    }
}

function removeFromList(position){
    itemsList.splice(position, 1)
    this.calculateSubtotal()
}

function updateQuantity(newQuantity, position){
    itemsList[position].quantity = newQuantity;
    this.calculateSubtotal();
}

function calculateSubtotal(){
    subTotal = 0
    itemsList.map((item)=>{
        subTotal += (item.price * item.quantity)
    })
    console.log(subTotal);
}

export default {itemsList, addToList, removeFromList, updateQuantity, calculateSubtotal}
