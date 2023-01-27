import { Component, OnInit } from '@angular/core';
import { GetRepositoriesService } from 'src/app/services/get-repositories.service';
import { RepositoriesInterface } from './repositories-interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private getRepos: GetRepositoriesService) {

  }
  public coreInfos!: RepositoriesInterface;

  ngOnInit(): void {
    let projects: RepositoriesInterface[] = []
    this.getRepos.getGithubRepos().subscribe((repos) => {
      repos.map((data : any) => {
          this.coreInfos = {
            name: data.name,
            description: data.description,
            created_at: data.created_at,
            avatarURL: data.owner?.avatar_url
          }
        projects.push(this.coreInfos);
      })
      console.log(repos);
    })
  }

}
