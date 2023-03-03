import { BehaviorSubject } from 'rxjs';

export class State<T> {
  private observablePrivate: BehaviorSubject<T> = new BehaviorSubject<T>(
    <any>[]
  );

  constructor() {}

  get observable() {
    return this.observablePrivate.asObservable();
  }

  set observableData(data: T) {
    this.observablePrivate.next(data);
  }
}
