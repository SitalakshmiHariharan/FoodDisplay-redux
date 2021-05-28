import React from 'react';

const DisplayItems = (props) =>{
    console.log("Inside the component")
    
    const List = ({dataList})=>{
        console.log({dataList})
        if (dataList){
            return dataList.map((data)=>{                
                return(
                    <div key={data.id}>
                        {data.name}
                    </div>
                )
            })
        }
    }

    return(
        <div>
            {List(props)}
        </div>
    )
}

export default DisplayItems;