import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  n:any="";
  nomi=[{
      nome:"Giovani" },
    {
      nome:"Serena" },
    {
      nome:"Barisla"}
  ]
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.n=this.nomi[params['nome']]
  })}

  }


