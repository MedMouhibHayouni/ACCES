import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';  

@Injectable({
  providedIn: 'root'
})
export class ProduitsSoldesService {
  private apiUrl = 'http://localhost:8081/api/produits';      

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {  
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap((data: any[]) => console.log("Données reçues:", data))     
    );
  }

  getProduitById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addProduit(produit: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, produit);
  }

  updateProduit(id: number, produit: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, produit);
  }

  deleteProduit(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
