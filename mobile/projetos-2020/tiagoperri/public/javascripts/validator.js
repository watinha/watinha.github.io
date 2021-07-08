module.exports = class Validator{

       static verify(email,password){
            let msgDeErro = ""; 
            // if (userLogado() == true){
            //     return false;       
            // }
            if(email == null || email == "") {
                return false;
            }
            if(password == null || password == "") {
                return false;
            }
            if(email.length <= 3) {
                return false;
            }
            if(password.length <= 3) {
                return false;
            }
            return true;
        }
}
