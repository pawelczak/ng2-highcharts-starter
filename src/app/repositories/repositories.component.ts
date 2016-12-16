// 3d party imports
import { Component, OnInit } from '@angular/core';

// app imports
import { RepositoriesService } from './services/repositories.service';


@Component({
    selector: 'repositories',
    providers: [
        RepositoriesService
    ],
    templateUrl: './repositories.component.html'
})
export class RepositoriesComponent implements OnInit {

    public repositories: any[] = [];

    constructor(private repositoriesService: RepositoriesService) {
    }

    ngOnInit() {
        this.repositoriesService
            .getRepositories()
            .subscribe((repos) => {
                this.repositories = repos;
            });
    }
}
