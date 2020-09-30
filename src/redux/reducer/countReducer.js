let initialState={
    count:0,
    color:"red",
    ownColor:[]
}
const countReducer=(state=initialState,action)=>{
    let {type,payload}=action
    
    switch (type) {
        case "INCREMENT":
            state.ownColor.push("");
            state.ownColor = [...state.ownColor]
            state.count++;
            break;
        case "DECREMENT":
            if (state.count>0){
                state.ownColor.pop()
                state.ownColor = [...state.ownColor]
                state.count--;
             } 
             break;
        case "RESET":
            state.count=0;
            state.ownColor=[]
            break;
        case "CHANGEOWNCOLOR":
            state.ownColor[payload.id]={value:payload.value,id:payload.id}
            console.log(state.ownColor)
            break;
        case "CHANGECOLOR":
            state.color=payload;
            break;
        default:
          return {...state};
      }  
      return {...state};
}
export default countReducer