export interface IAuthUserModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
}

export interface ILoginModel {
    email: string;
    password: string;
}

export class LoginModel implements ILoginModel {
    email = '';
    password = '';
}
