import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {TypeClaim} from '../../models/TypeClaim';
import {RequestClaim} from '../../models/RequestClaim';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestClaimServiceService {

  apiUrl : string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  retrieveAllClaims(): Observable<RequestClaim[]> {
    return this.http.get<RequestClaim[]>(`${this.apiUrl}/RequestClaim/all`); // appel de l`API REST pour récupérer les réclamations
  }

  getClaimById(id: number):Observable<RequestClaim> {
    return this.http.get<RequestClaim>(`${this.apiUrl}/RequestClaim/get/${id}`);
  }

  deleteClaim(id:number):Observable<RequestClaim>{

    return this.http.delete<RequestClaim>(this.apiUrl+'/RequestClaim/deleteClaim/'+id);
  }

  public getClaimByTypeClaim(typeClaim: TypeClaim){
    return this.http.get(this.apiUrl+'/RequestClaim/RechercheClaimParType/'+typeClaim);
  }

  public resolveRequestClaim(requestClaim) {
    return this.http.post(this.apiUrl+'/RequestClaim/reclamations',requestClaim,)
  }
}
