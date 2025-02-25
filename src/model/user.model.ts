class UserModel{
    private _user_id:string
    private _full_name:string
    private _email:string
    private _password:string

    get user_id(): string {
        return this._user_id;
    }

    set user_id(value: string) {
        this._user_id = value;
    }

    get full_name(): string {
        return this._full_name;
    }

    set full_name(value: string) {
        this._full_name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    constructor(user_id: string, full_name: string, email: string, password: string) {
        this._user_id = user_id;
        this._full_name = full_name;
        this._email = email;
        this._password = password;
    }
}
export default UserModel;