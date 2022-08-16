import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  home(){
    // this.router.navigate(["/product"]);
  }

  electronics(){
    // this.router.navigate(["/product/electronics"]);
  }

  kitchen(){
    // this.router.navigate(["/product/kitchen"]);
  }

  houseHold(){
    // this.router.navigate(["/product/houseHold"]);
  }

  fashion(){
    // this.router.navigate(["/product/fashion"]);
  }

}
