function addItem() {
let ItemObjects = {
    bread: {
        
        price: 850
    },
    Rice: {
        
        price: 800
    },
    Eggs: {
        
        price: 600
    },
    Plantain: {
        
        price: 1000
    }
}
//console.log(ItemObjects.bread.price);
    let item = document.getElementById('item').value
    if (item === 'Bread') {
       let result = document.getElementById('result')
        result.append("Bread " + ItemObjects.bread.price)
    }
    else if (item === 'Rice') {
        
         result.append("Rice " + ItemObjects.Rice.price)
     }
    else if (item === 'Eggs') {
        
         result.append("Eggs " + ItemObjects.Eggs.price)
     }
    else if (item === 'Plantain') {
        
         result.append("Plantain " + ItemObjects.Plantain.price)
     }
     else{
        result.append("sorry, items out of stock")
     }
}