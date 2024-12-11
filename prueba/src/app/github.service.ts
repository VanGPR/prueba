import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Octokit } from 'octokit';
import { environment } from '../environments/environment';
const token = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private baseUrl: string = 'https://api.github.com';
  private token: string = token;  // Reemplaza con tu token

  constructor(private http: HttpClient) { }

  async getBranches(){
    const octokit = new Octokit({   auth: token});
    const branches = await octokit.request('GET /repos/{owner}/{repo}/branches', {   owner: 'VanGPR',   repo: 'prueba',   headers: {     'X-GitHub-Api-Version': '2022-11-28'  } })
    console.log(branches);
  }
  async getPr(){
    const octokit = new Octokit({   auth: token});
    const prs = await octokit.request('GET /repos/{owner}/{repo}/pulls', {   owner: 'VanGPR',   repo: 'prueba',   headers: {     'X-GitHub-Api-Version': '2022-11-28'  } })
    console.log(prs);
  }
}

export interface Branches {
  name:           string;
  commit:         Commit;
  protected:      boolean;
  protection:     Protection;
  protection_url: string;
}

export interface Commit {
  sha: string;
  url: string;
}

export interface Protection {
  required_status_checks: RequiredStatusChecks;
}

export interface RequiredStatusChecks {
  enforcement_level: string;
  contexts:          string[];
}
