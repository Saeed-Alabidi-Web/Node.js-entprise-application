
//------------------------------------------------------------------------------
// <auto-generated>
//   name :saeed mohammed alabidi
//  Email:saeed1adm@gmail.com
//  Phone:00967-733122038
// </auto-generated>
//------------------------------------------------------------------------------


const businessRoles = require('../../entities')
const constraint = require('../../Constraints')

module.exports = function makeUserUseCase({ usersRepository, serices }) {

     async function addUser(data) {

          //check business recquitment
          const user = businessRoles.user.makeUser(data)

          //check business recquitment
          if (!user.status)
               return businessRoles.user.result(constraint.status.ERROR, user.message, data)

          // return result
          return businessRoles.user.result(constraint.status.SUCCESS, "Operation completed successfully", await usersRepository.addUser(user.data));

     }


     async function getAllUser() {

          // return result
          return businessRoles.user.result(constraint.status.SUCCESS, "Operation completed successfully", await usersRepository.getAllUser());
     }


     return { addUser, getAllUser };

}