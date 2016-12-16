// 3d party imports
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class RepositoriesService {

    private url: string = 'https://api.github.com/search/repositories?q=angular2&sort=stars&order=desc';

    constructor(private http: Http) {
    }

    getRepositories(): Observable<any[]> {
        return this.http
                    .get(this.url)
                    .map((response: Response) => response.json().items);
                    // .catch(this.handleError);
    }


    private handleError (error: any) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        return Observable.throw(error || 'Server error');
    }
}
