import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const token = "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";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private baseUrl: string = 'https://api.github.com';
  private token: string = token;  // Reemplaza con tu token

  constructor(private http: HttpClient) { }

  // Obtener ramas del repositorio
  getBranches(owner: string, repo: string): Observable<any> {
    const url = `${this.baseUrl}/repos/${owner}/${repo}/branches`;
    const headers = new HttpHeaders().set('Authorization', `token ${this.token}`);
    return this.http.get(url, { headers });
  }

  // Obtener pull requests activos del repositorio
  getActivePullRequests(owner: string, repo: string): Observable<any> {
    const url = `${this.baseUrl}/repos/${owner}/${repo}/pulls?state=open`;
    const headers = new HttpHeaders().set('Authorization', `token ${this.token}`);
    return this.http.get(url, { headers });
  }
}
