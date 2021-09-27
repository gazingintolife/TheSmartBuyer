
export const userLoggedIn = (userData) => {
    console.log(userData)
    return ({type: "USER_SIGNEDUP",    
    userData})
};