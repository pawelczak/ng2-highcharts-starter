// 3d party imports
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

// app imports
import { StarCountDirective } from '../../../../../src/app/repositories/directives/star-count.directive';


describe('StarCountDirective', () => {

    beforeEach(() => {
       TestBed
           .configureTestingModule({
               declarations: [
                   TestComponent,
                   StarCountDirective
               ]
           });
    });

    it ('should show element when star count is high enough', () => {

        // given
        TestBed
            .overrideComponent(TestComponent, {
                set: {
                    template: '<p *starCount="301">Works!</p>'
                }
            });

        const fixture = TestBed.createComponent(TestComponent);

        // when
        fixture.detectChanges();

        // then
        expect(fixture.nativeElement.querySelector('p').textContent).toEqual('Works!');

    });

    it ('should hide element when star count is not high enough', () => {

        // given
        TestBed
            .overrideComponent(TestComponent, {
                set: {
                    template: '<p *starCount="101">Hidden!</p>'
                }
            });

        const fixture = TestBed.createComponent(TestComponent);

        // when
        fixture.detectChanges();

        // then
        expect(fixture.nativeElement.querySelectorAll('p').length).toEqual(0);
    });

});

@Component({
    selector: 'test-component',
    template: ``
})
class TestComponent {
}
