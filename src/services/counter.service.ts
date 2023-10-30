import {Injectable} from '@angular/core';
import {interval, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public counter$ = interval(1_000).pipe(map(n => n + 1));
}
