import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; //createSlice should be fix

//this perform action
export const fetchdata = createAsyncThunk('page1',async ()=>{  //generally we can use key insted of fetchdata, async
    const response = await fetch ("https://jsonplaceholder.typicode.com/users");
    return response.json();
});


 const counterSlice = createSlice({
  name: "counter",
  initialState:{
    isLoading:false,
    data:null,
    isError: false,
  },
  extraReducers:(builder)=> {//extraReducer has extra features compare to reducer
  
    builder.addCase(fetchdata.pending, (state, action)=>{
    state.isLoading =true;
    });
    builder.addCase(fetchdata.fulfilled, (state, action)=>{
    state.isLoading =false;
    state.data = action.payload;   // store data in to data
    });
    builder.addCase(fetchdata.rejected, (state, action)=>{
    console.log("error", action.payload);
    state.isError =true;
    });
}
});
export default counterSlice.reducer;