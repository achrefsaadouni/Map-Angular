import { Injectable } from '@angular/core';
import { ApiUri } from '../../shared/api-uri';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Mandate} from '../../Models/Mandate';
import {RequestA} from '../../Models/RequestA';
import {Resource} from '../../Models/Resource';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Project} from '../../Models/Project';
import {MapContent} from '../../Models/MapContent';
import {Suggestion} from '../../Models/Suggestion';
@Injectable()
export class MandateService {
  uri: string;
  constructor(private http: HttpClient) {}
  getAllMandates() {
    return this.http.get<Mandate[]>(ApiUri.URI + 'mandate');
  }
  getAllRequests() {
    return this.http.get<RequestA[]>(ApiUri.URI + 'mandate/request');
  }
  getAllGps() {
    return this.http.get<Resource[]>(ApiUri.URI + 'mandate/gps');
  }
  getAllArchived() {
    return this.http.get<Mandate[]>(ApiUri.URI + 'mandate?archive=show');
  }
  getMandate() {
    return this.http.get<Mandate>(ApiUri.URI + 'mandate?ressourceId='+localStorage.getItem("id"));
  }
  getAllRequestsClient() {
    return this.http.get<RequestA[]>(ApiUri.URI + 'mandate/request?id='+localStorage.getItem("id"));
  }
  cancelRequest(id){
    return this.http.put(ApiUri.URI + 'mandate/cancel',JSON.stringify({"requestId" : id}),{  responseType: 'text', headers: new HttpHeaders().set('Content-Type', 'application/json')})
      .pipe( catchError(this.handleError('cancelRequest', [])))
  }
  acceptRequest(s: RequestA) {
    return this.http.post(ApiUri.URI + 'mandate',JSON.stringify({'requestId' : s.id, 'resourceId' : s.suggessedResource.id}),{  responseType: 'json', headers: new HttpHeaders().set('Content-Type', 'application/json')})
      .pipe( catchError(this.handleError('acceptRequest', [])))
  }

  summon(s: RequestA, date: string) {

    return this.http.post(ApiUri.URI + 'mandate/Summon1',JSON.stringify({'requestId' : s.id, 'date' : date, 'link' : '', 'email': s.suggessedResource.email}),{  responseType: 'json', headers: new HttpHeaders().set('Content-Type', 'application/json')})
      .pipe( catchError(this.handleError('acceptRequest', [])));
  }

  getAllProjects() {
    return this.http.get<Project[]>(ApiUri.URI + 'mandate/project');
  }

  getMapContent() {
    return this.http.get<MapContent[]>(ApiUri.URI + 'mandate/map');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getSuggession(id:number) {
    return this.http.post<Suggestion>(ApiUri.URI + 'mandate/suggestion',JSON.stringify({'requestId': id}),{  responseType: 'json', headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

  addSuggestion(idResource: number, idRequest: number) {
    return this.http.post(ApiUri.URI + 'mandate/Addsuggestion',JSON.stringify({'resourceId': idResource, 'requestId': idRequest}),{responseType: 'json',  headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

  getMyMandates() {
    return this.http.get<Mandate[]>(ApiUri.URI + 'mandate/client?id='+localStorage.getItem("id"));
  }
  addGps(r:Resource,m:Mandate){
    return this.http.put(ApiUri.URI + 'mandate/addGps',JSON.stringify({'resourceId':m.mandateId.ressourceId , 'projectId': m.mandateId.projetId , 'startDate':m.mandateId.dateDebut, 'endDate':m.mandateId.dateFin, 'gpsId':r.id}),{responseType: 'json',  headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }
  restore(m:Mandate)
  {
    return this.http.put(ApiUri.URI + 'mandate/restoreGps',JSON.stringify({'resourceId':m.mandateId.ressourceId , 'projectId': m.mandateId.projetId , 'startDate':m.mandateId.dateDebut, 'endDate':m.mandateId.dateFin}),{responseType: 'json',  headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }
}
