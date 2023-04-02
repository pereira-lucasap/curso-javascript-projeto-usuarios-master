class User {

    constructor(name, gender, birth, country, email, password, photo, admin) {

        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date();

    }

    //Metods Getters and Setters
    //Name
    get name(){

        return this._name;
    }
    set name(value){

        this._name = value;
    }
    //Gender
    get gender(){

        return this._gender;
    }
    set gender(value){

        this._gender = value;
    }
    //Birth
    get birth(){

        return this._birth;
    }
    set birth(value){

        this._birth = value;
    }
    //Country
    get coutry(){

        return this._country;
    }
    set country(value){

        this._country = value;
    }
    //email
    get email(){

        return this._email;
    }
    set email(value){

        this._email = value;
    }
    //Password
    get password(){

        return this._password;
    }
    set password(value){

        this._password = value;
    }
    //Photo
    get photo(){

        return this._photo;
    }
    set photo(value){

        this._photo = value;
    }
    //Admin
    get admin(){

        return this._admin;
    }
    set admin(value){

        this._admin = value;
    }
    //register
    get register(){

        return this._register;
    }
    set register(value){

        this.register = value;
    }


}