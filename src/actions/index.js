export function foodItemsAction(){
    console.log("Inside the action")
    return{
        type:'FOOD_ITEMS',
        payload:[
            {id:1, name:'idly'},
            {id:2, name:'chapathi'},
            {id:3, name:'mac&cheese'},
            {id:4, name:'PB&J'}
        ]
    }
}