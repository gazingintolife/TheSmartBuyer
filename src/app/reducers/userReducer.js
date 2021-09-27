const userDefaultState = [];
 
const userReducer = (state = userDefaultState, action) => {
   switch(action.type){
       case 'USER_SIGNEDUP':
           return {
               ...action.userData
           }
       default:
           return state;
   }
};

export default userReducer;