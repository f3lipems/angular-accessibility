import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DisabelControlDirective } from "./disabel-controle.directive";

@NgModule({
    declarations: [DisabelControlDirective],
    imports: [CommonModule],
    exports: [DisabelControlDirective]
})
export class DisableControlModule {}