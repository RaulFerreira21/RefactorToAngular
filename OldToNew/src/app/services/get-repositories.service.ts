import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetRepositoriesService {

  constructor(private httpCliente: HttpClient) { }

  private url = 'https://api.github.com/users/RaulFerreira21/repos'

  public getGithubRepos(): Observable<any> {
    const repos = this.httpCliente.get(this.url)
    return repos;
  }
}
