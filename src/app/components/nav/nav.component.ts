import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credenciais } from 'src/app/models/credenciais';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['tecnicos'])
  }

}
