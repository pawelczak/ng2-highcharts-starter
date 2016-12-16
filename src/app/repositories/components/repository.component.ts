// 3d party imports
import { Component, Input } from '@angular/core';


@Component({
    selector: 'repository',
    templateUrl: './repository.component.html'
})
export class RepositoryComponent {

    @Input() item: any;
}
