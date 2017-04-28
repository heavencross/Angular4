import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ENTITIES } from './mock-entities';


@Injectable()
export class MyEntitiesService {

  private headers = new Headers({ 'Content-Type' : 'application/json;charset=UTF-8', 'userId': 79 });
  private options = new RequestOptions({ headers: this.headers });
  private entitiesUrl = 'http://localhost:4200/CredDataService/dashboard/getRelationships';
  private entitiesUrlLocal = './../../api/entities.json';

  constructor(private http: Http) {};

  /*getEntities(): Promise<any[]> {
    return Promise.resolve(ENTITIES.relationshipList);
  };*/

  getEntities(payload): Observable<any[]> {
     // return Observable.create(ENTITIES.relationshipList);
    return this.http.post(this.entitiesUrl , payload, this.options)
                    .map(this.extractData)
                    .catch(this.handleError);

    /*Promsie version */
    /*return this.http.post(this.entitiesUrl, this.payload)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);*/
  }

  private extractData(response: Response) {
    const body = response.json();
    const recordsToDsiplay = body.relationshipList;

    // this.setTotalDisplayItems(recordsToDsiplay.length);
    return  recordsToDsiplay || [];
  }

 private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
