import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
// import { User } from '../../models/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;


  constructor(private http: HttpClient, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(login) {
    return this.http.post<any>(`account/login/`, login)
        .pipe(map(authData => {
          console.log(authData);
            if (authData && authData.token) {
                localStorage.setItem('currentUser', JSON.stringify(authData));
                this.currentUserSubject.next(authData);
            }
            return authData;
        }));
    }


    logout() {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
      this.router.navigate(['/login'])
    }





}