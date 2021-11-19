import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  qualevedo:any;
  prodotti=[{
    nome:"hosting based",
    prezzo:"2€ al mese*"
  },{
    nome:"hosting avg",
    prezzo:"15€ al mese*"
  },{
    nome:"hosting top",
    prezzo:"30€ al mese*"
  },

]


  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.qualevedo=this.prodotti[params['prodotto']]
  })}



}
