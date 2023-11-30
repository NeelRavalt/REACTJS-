import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const pagedata = createAsyncThunk('page2',async ()=>{
    const response = await fetch ("https://jsonplaceholder.typicode.com/users");
    return response.json();
});


 const PageSlice = createSlice({
  name: "page",
  initialState:{
    isLoading:false,
    data:null,
    isError: false,
  },
  extraReducers:(builder)=> {
  
    builder.addCase(pagedata.pending, (state, action)=>{
    state.isLoading =true;
    });
    builder.addCase(pagedata.fulfilled, (state, action)=>{
    state.isLoading =false;
    state.data = action.payload;
    });
    builder.addCase(pagedata.rejected, (state, action)=>{
    console.log("error", action.payload);
    state.isError =true;
    });
}
});
export default PageSlice.reducer;