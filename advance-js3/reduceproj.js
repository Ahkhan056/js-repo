// we have an darray of user cart and their shopping price we need to total the amount and show in the totalamount 

const shop= [{
    item:"cake",
    price : 200,
},

{
    item2: "biscuit",
    price : 100,
},

{
    item3:"clothes",
    price : 400,
}
];

const total = shop.reduce( (acc , item ) => acc+item.price ,0  )

console.log(` your total amount of Bill is ${total}`);  //700
