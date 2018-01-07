getUserData = () => {
    let data = [];
    if (localStorage.getItem('user_data') ) {
      data = JSON.parse(localStorage.getItem('user_data'));
    }
    return data;
}

isRegisteredUser = () => {
    let user_data = [] ;
    if (localStorage.getItem('user_data')) {
       user_data = JSON.parse(localStorage.getItem('user_data'));
        if ('guest' === user_data.mode) {
          return false;
        }else
            if ('registered' === user_data.mode) {
              return true;
          }
        }
}

getCurrentUserByEmail = (email) => {
    if(localStorage.getItem('users')) {
        const users = JSON.parse(localStorage.getItem('users'));
        const currentUser = users.find(user => user.email === email);
        return currentUser ;
    }
}
getAllRegisteredUsers = () =>{
    if(localStorage.getItem('users')) {
        const users = JSON.parse(localStorage.getItem('users'));
        return users;
    }
}

calculateVAT= (cost) => {
    const VAT = .05;
    return cost*VAT;
}
module.exports =
{
    getUserData ,
    isRegisteredUser,
    getCurrentUserByEmail,
    getAllRegisteredUsers,
    calculateVAT
}