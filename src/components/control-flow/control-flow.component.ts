import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CounterService} from "../../services/counter.service";
import {delay, range, toArray} from "rxjs";

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrls: ['./control-flow.component.css']
})
export class ControlFlowComponent {
  public counter$ = inject(CounterService).counter$;
  public range$ = range(1, 8).pipe(toArray(), delay(2000));
}
