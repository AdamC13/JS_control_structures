
let isLoggedOn = true;
let availableProducts = {
    1:{'name':'Apple', 'price':2.99}, 
    2:{'name':'Orange', 'price':3.99}, 
    3:{'name':'Banana', 'price':2.50}
};
let cart = [1, 3, 1, 2]



if (isLoggedOn){
    for (const key in availableProducts){
        console.log(`${availableProducts[key]['name']}: ${availableProducts[key]['price']}`)
    };
    let cost = 0;
    for (const item of cart){
        cost += availableProducts[item]['price']
    }
    console.log(`Your total is: ${cost}`)
}
