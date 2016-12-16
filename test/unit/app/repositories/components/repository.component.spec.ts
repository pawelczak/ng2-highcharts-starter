// 3d party imports
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

// app imports
import { RepositoryComponent } from '../../../../../src/app/repositories/components/repository.component';


// Test setup, mocks, data
const givenItem = {
    name: 'Repo 1',
    stargazers_count: 3
};

@Component({
    selector: 'test-component',
    template: `<repository [item]='data' ></repository>`,
})
class TestComponent {

    public data: any = givenItem;
}


xdescribe('RepositoryComponent', () => {

    beforeEach(() => {
        TestBed
            .configureTestingModule({
               declarations: [
                   RepositoryComponent,
                   TestComponent
               ]
            });

    });

    it ('should load input data', () => {

        // given
        let fixture = TestBed.createComponent(TestComponent),
            instance = fixture.debugElement.children[0].componentInstance;

        // when
        fixture.detectChanges();

        // then
        expect(instance.item).toEqual(givenItem);
    });

    it ('should render view', () => {

        // given
        const fixture = TestBed.createComponent(TestComponent),
            element = fixture.debugElement.children[0].nativeElement;

        // when
        fixture.detectChanges();

        // then
        let spans = element.querySelectorAll('span');

        expect(spans[0].textContent).toEqual(givenItem.name);
        expect(spans[1].textContent).toEqual(givenItem.stargazers_count + '');
    });

});
