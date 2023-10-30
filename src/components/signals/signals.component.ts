import {Component, computed, effect, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {takeUntilDestroyed, toObservable} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent {
  public showAge = false;
  public showSummary = false;

  // Simple writable signals, that can be mutated.
  public birthday = signal(new Date(1994, 5, 30));
  public currentDate = signal(new Date());

  // Computed signals that recompute when necessary, and cache the computed value for its consumers.
  public age = computed(() => {
    console.log('Computing age...');
    return this.dateDiff(this.currentDate(), this.birthday());
  });
  public nextAge = computed(() => this.age() + 1);

  constructor() {
    toObservable(this.age)
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        // You can also convert signals to observables!
      });
  }

  // Similar to tap(), allows you to do whatever without producing new values.
  private dateChangedEffect = effect(() => {
    console.log('The current date changed!', this.currentDate());
  });

  public fastForward() {
    // Update the date based on its old value
    this.currentDate.update(date => new Date(date.getFullYear() + 1, date.getMonth(), date.getDate()));
  }

  public resetCurrentDate() {
    // Assign a new value, ignoring its old value
    this.currentDate.set(new Date());
  }

  private dateDiff(newDate: Date, oldDate: Date) {
    return Math.floor((this.currentDate().getTime() - this.birthday().getTime()) / 1000 / 3600 / 24 / 365.25);
  }
}
