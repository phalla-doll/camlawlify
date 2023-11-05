import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

export interface UserCreationModel {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
}

export interface UserLoginModel {
  email?: string;
  password?: string;
}

export interface UserResetPasswordModel {
  password?: string;
  new_password?: string;
}

export interface UserForgotPassword {
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _HttpClient: HttpClient
  ) {
  }

  onRegisterUser(user: UserCreationModel): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body: any = {
      "first_name": user.first_name,
      "last_name": user.first_name,
      "phone_number": user.phone_number,
      "email": user.email,
      "password": user.password,
      "password_confirmation": user.password_confirmation
    }
    return this._HttpClient.post<any>(`${environment.api}/auth/register`, body, httpOptions);
  }

  onLoginUser(user: UserLoginModel): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body: any = {
      "email": user.email,
      "password": user.password,
    }
    return this._HttpClient.post<any>(`${environment.api}/auth/login`, body, httpOptions);
  }

  onLogOutUser(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${JSON.parse(localStorage.getItem('USER_DATA') ?? '').token}`
      })
    };
    return this._HttpClient.post<any>(`${environment.api}/auth/logout`, {}, httpOptions);
  }

  onResetPasswordUser(user: UserResetPasswordModel): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body: any = {
      "password": user.password,
      "new_password": user.new_password,
    }
    return this._HttpClient.post<any>(`${environment.api}/auth/reset-logged-in-password`, body, httpOptions);
  }

  onForgotPasswordUser(user: UserForgotPassword): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body: any = {
      "email": user.email,
    }
    return this._HttpClient.post<any>(`${environment.api}/auth/forgot-password`, body, httpOptions);
  }
}
