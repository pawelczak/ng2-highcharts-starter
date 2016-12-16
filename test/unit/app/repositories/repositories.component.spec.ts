// 3d party imports
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Pipe, PipeTransform } from '@angular/core';

// app imports
import { RepositoriesComponent } from '../../../../src/app/repositories/repositories.component';
import { RepositoriesService } from '../../../../src/app/repositories/services/repositories.service';


xdescribe('RepositoriesComponent', () => {

    class MockRepositoriesService {
        getRepositories() {
            // TODO TestFactory
            const repos = [
                {name: 'Repo 1', stargazers_count: 3238},
                {name: 'Repo 2', stargazers_count: 319},
                {name: 'Repo 3', stargazers_count: 41}
            ];
            return Observable.of(repos);
        }
    }

    // TODO use mock pipe
    @Pipe({
        name: 'starCount'
    })
    class MockStarCountPipe implements PipeTransform {
        transform(objects: any[], param?: any) {
            return objects.map((obj) => obj.stargazers_count + 100);
        }
    }

    beforeEach(() => {
        TestBed
            .configureTestingModule({
                declarations: [
                    RepositoriesComponent,
                    MockStarCountPipe
                ]
            })
            .overrideComponent(RepositoriesComponent, {
                add: {
                    providers: [
                        {provide: RepositoriesService, useClass: MockRepositoriesService}
                    ]
                }
            });
    });

    it ('should have header message', () => {

        // given
        const fixture = TestBed.createComponent(RepositoriesComponent);

        // when
        fixture.detectChanges();

        // then
        expect(fixture.nativeElement.querySelector('p').textContent).toContain('List of most popular* Angular2 repos on github:');
    });

    it ('should have list of repos', () => {

        // given
        const fixture = TestBed.createComponent(RepositoriesComponent),
            compInstance = fixture.componentInstance,
            element = fixture.nativeElement;

        // when
        fixture.detectChanges();

        // then
        expect(compInstance.repositories.length).toEqual(3);
        expect(element.querySelectorAll('li').length).toEqual(2);
    });

});
