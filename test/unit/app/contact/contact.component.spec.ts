// 3d party imports
import { TestBed } from '@angular/core/testing';

// app imports
import { ContactComponent } from '../../../../src/app/contact/contact.component';


describe('ContactComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [ContactComponent]});
    });

    it ('should have default template', () => {

        // given
        const fixture = TestBed.createComponent(ContactComponent);

        // when
        fixture.detectChanges();

        // then
        expect(fixture.nativeElement.textContent).toContain('Contact');
    });

});
