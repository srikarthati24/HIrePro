import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  mobileQuery: MediaQueryList;
  ngOnInit(): void {
  }
 logoutClick(){
  this.router.navigate(["login"]);
 }
 private _mobileQueryListener: () => void;

 constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private route: ActivatedRoute,private router : Router) {
   this.mobileQuery = media.matchMedia('(max-width: 600px)');
   this._mobileQueryListener = () => changeDetectorRef.detectChanges();
   this.mobileQuery.addListener(this._mobileQueryListener);
 }

 ngOnDestroy(): void {
   this.mobileQuery.removeListener(this._mobileQueryListener);
 }

 shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}

