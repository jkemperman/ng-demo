import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TakeUntilDestroyedComponent} from "../components/take-until-destroyed/take-until-destroyed.component";
import {ControlFlowComponent} from "../components/control-flow/control-flow.component";
import {SignalsComponent} from "../components/signals/signals.component";
import {OtherStuffComponent} from "../components/other-stuff/other-stuff.component";
import {DeferComponent} from "../components/defer/defer.component";

const routes: Routes = [{
  path: 'take-until-destroyed',
  component: TakeUntilDestroyedComponent
}, {
  path: 'control-flow',
  component: ControlFlowComponent
}, {
  path: 'signals',
  component: SignalsComponent
}, {
  path: 'other-stuff',
  component: OtherStuffComponent
}, {
  path: 'defer',
  component: DeferComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
