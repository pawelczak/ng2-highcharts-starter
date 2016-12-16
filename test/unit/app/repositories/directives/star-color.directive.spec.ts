// 3d party imports
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

// app imports
import { StarColorDirective } from '../../../../../src/app/repositories/directives/star-color.directive';


xdescribe('StarColorDirective', () => {

    const colors = [
        { stars: 4000, color: 'rgb(68, 68, 68)'},
        { stars: 2000, color: 'rgb(102, 102, 102)'},
        { stars: 1000, color: 'rgb(136, 136, 136)'},
        { stars: 500, color: 'rgb(170, 170, 170)'}
    ];

    beforeEach(() => {
       TestBed.configureTestingModule({
            declarations: [
                TestComponent,
                StarColorDirective
            ]
       });
    });

    describe('star color', () => {

        for (let i = 1, length = colors.length; i < length; i += 1) {

            it ('should set color to ' + colors[i].color + ' base for star count: ' + colors[i].stars, () => {

                // given
                const template = '<p [starColor]="' + colors[i].stars + '">stars</p>';
                const fixture = TestBed
                    .overrideComponent(TestComponent, {
                        set: {
                            template: template
                        }
                    })
                    .createComponent(TestComponent);

                // when
                fixture.detectChanges();

                // then
                expect(fixture.nativeElement.querySelector('p').style.color).toEqual(colors[i].color);
            });
        }
    });

});

@Component({
    selector: 'test-component',
    template: ``
})
class TestComponent {}
