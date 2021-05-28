export default function(state=null,action)
{
    console.log("Inside the reducer");
    console.log(action.payload);
    switch(action.type){
        case 'FOOD_ITEMS':
            return action.payload;
        default:
            return state
    }
}