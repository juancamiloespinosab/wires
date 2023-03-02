import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  private isMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.initBreakpointObserver();
  }

  get mobile() {
    return this.isMobile;
  }

  private initBreakpointObserver() {
    return this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((breakpointState: BreakpointState) => {
        this.isMobile = breakpointState.matches;
      });
  }
}
