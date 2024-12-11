import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GithubService } from './github.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  branches: any[] = [];
  pullRequests: any[] = [];

  constructor(private service:GithubService){}
  ngOnInit(){let a = this.service.getBranches('VanGPR', 'prueba')
    console.log(a)
  }
  
}

