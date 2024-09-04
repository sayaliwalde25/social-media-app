const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    UserDate:{},
    isRegister:false,
    isLogin:false,
};

const UserSlice = createSlice ({
    initialState ,
    name:"user",
    reducers: {
        login:(state , action) => {
            state.isLogin = true ;
            state.UserDate = action.payload;
        },
        register: (state , action) => {
            state.UserDate = action.payload;
            state.isRegister = true;
        },
        logout:(state) => {
            state.isLogin = false;
            state.UserDate = {};
        },
    },
});

export const {login , register , logout} = UserSlice.actions;
export default UserSlice.reducer;