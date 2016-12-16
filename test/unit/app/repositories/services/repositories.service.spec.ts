// 3d party imports
import { TestBed, inject } from '@angular/core/testing';
import { BaseRequestOptions, Http, ConnectionBackend, HttpModule, ResponseOptions, Response } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

// app imports
import { RepositoriesService } from '../../../../../src/app/repositories/services/repositories.service';


describe('RepositoriesService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                RepositoriesService,
                BaseRequestOptions,
                MockBackend,
                {
                    provide: Http,
                    useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                }
            ],
            imports: [
                HttpModule
            ]
        });
    });

    it ('should get array of repos',
        inject([MockBackend, RepositoriesService], (backend: MockBackend, repositoriesService: RepositoriesService) => {

            // given
            const rawReposData = [
                // TODO TestFactory
                {name: 'Repo 1', stargazers_count: 28},
                {name: 'Repo 2', stargazers_count: 19}
            ];
            const baseResponse = new Response(new ResponseOptions({
                body: JSON.stringify({items: rawReposData}),
                status: 200
            }));
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));

            // when
            repositoriesService.getRepositories().subscribe((response) => {

                // then
                expect(response.length).toEqual(2);
            });
        }
    ));

    it ('should handle error response',
        inject([MockBackend, RepositoriesService], (backend: MockBackend, repositoriesService: RepositoriesService) => {

            // given
            backend.connections.subscribe((c: MockConnection) => c.mockError(new Error('Internal error')));

            // when
            repositoriesService
                .getRepositories()
                .subscribe(
                    () => {},
                    (error) => {

                        // then
                        expect(error).toEqual(new Error('Internal error'));
                    }
                );
        }
    ));
});
