import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CounterService} from "../../services/counter.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-take-until-destroyed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './take-until-destroyed.component.html',
  styleUrls: ['./take-until-destroyed.component.css']
})
export class TakeUntilDestroyedComponent {
  private counter = inject(CounterService);
  public counter2$ = this.counter.counter$; // Auto unsubscribes when component is destroyed

  constructor() {
    this.counter.counter$
      .pipe(takeUntilDestroyed()) // Auto completes when component is destroyed
      .subscribe({
        next: number => console.log(number),
        complete: () => console.log('complete!')
      })
  }
}
