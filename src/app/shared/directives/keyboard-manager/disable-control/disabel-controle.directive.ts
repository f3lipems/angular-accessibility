import { Directive, Input, OnChanges, SimpleChanges } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
    selector: '[appDisableControl]'
})
export class DisabelControlDirective implements OnChanges {
    @Input() appDisableControl: boolean = false;
    constructor(private ngControl: NgControl) { }
    
    ngOnChanges(changes: SimpleChanges): void {
        if(changes.appDisableControl) {
            const action = this.appDisableControl ? 'disable' : 'enable';
            this.ngControl.control[action]();
        }
    }

}