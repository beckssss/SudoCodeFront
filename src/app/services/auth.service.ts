import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {

    }
    registerStudent(udata: any): Observable<any> {
       return  this.http.post('https://localhost:3500/users/student-register', udata).pipe(map(
           (response: any) => {
               console.log(response);
               return response;
            }));
    }

    registerTeacher(data: any): Observable<any> {
        return  this.http.post('https://localhost:3500/users/student-register', data).pipe(map(
            (response: any) => {
                console.log(response);
                return response;
            }));
    }

    registerCollege(data: any): Observable<any> {
        return  this.http.post('https://localhost:3500/users/student-register', data).pipe(map(
            (response: any) => {
                console.log(response);
                return response;
            }));

    }
    loginUser(udata: any): Observable<any> {
        return this.http.post('', udata).pipe(map(
            (res: any) => {
                 console.log(res);
                 return res;
                }));
    }

}
