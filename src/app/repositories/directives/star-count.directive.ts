// 3d party imports
import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';


@Directive({
    selector: '[starCount]'
})
export class StarCountDirective {

    private requiredStarCount: number = 300;

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef) {
    }

    @Input() set starCount(starCount: number) {
        if (starCount >= this.requiredStarCount) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}
