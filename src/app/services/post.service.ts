import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly onHttpError: Subject<HttpErrorResponse> = new Subject<HttpErrorResponse>();


  private baseUrl = 'https://liga-bootcamp-postit.herokuapp.com'; //link básico da url
  // https://liga-bootcamp-postit.herokuapp.com/post

  constructor(private httpClient: HttpClient) { }

  // public async post(url: string, body: any) {
  //   return await this.httpClient.post(this.baseUrl + url, body).toPromise();
  // }


  public async post<T>(
    url: string,
    options?: any,
  ): Promise<AsyncResult<T>> {
    const token = localStorage.getItem(environment.keys.token);
    if (token) {
      options.headers = {
        authorization: token,
      };
    }
    return await this.httpClient.post(this.baseUrl + url, options).toPromise()
      .then((data: any) => this.success<any>(data)
      )
      .catch((error: HttpErrorResponse) => this.error<T>(error))
      .then<AsyncResult<T>>((result: AsyncResult<T>) => result);
  }




  public async get<T>(
    url: string,
    options: any = {},
  ): Promise<AsyncResult<T>> {
    const token = localStorage.getItem(environment.keys.token);
    if (token) {
      Object.assign(options, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(options);
      return await this.httpClient.get(this.baseUrl + url, options).toPromise()
        .then((data: any) => this.success<any>(data)
        )
        .catch((error: HttpErrorResponse) => this.error<T>(error))
        .then<AsyncResult<T>>((result: AsyncResult<T>) => result);
    }
  }

  private success<T>(result: T): AsyncResult<T> {
    return {
      success: result,
    };
  }

  private error<T>(error: HttpErrorResponse): AsyncResult<T> {
    this.onHttpError.next(error);

    return {
      error,
    };
  }

  // public async get(url: string) {
  //   return await this.httpClient.get(this.baseUrl + url).toPromise();
  // }//

}


export interface AsyncResult<T> {
  success?: T;
  body?: T;
  error?: HttpErrorResponse;

}
