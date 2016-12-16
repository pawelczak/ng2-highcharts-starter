// 3d party imports
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'starCount'
})
export class StarCountPipe implements PipeTransform {

    transform(repos: any[], starCount: number): any[] {
        return repos.filter((repo) => {
            if (repo.stargazers_count >= starCount) {
                return true;
            }
        });
    }
}
