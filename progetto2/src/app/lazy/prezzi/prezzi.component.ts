import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prezzi',
  templateUrl: './prezzi.component.html',
  styleUrls: ['./prezzi.component.scss']
})
export class PrezziComponent implements OnInit {
  qualevedo:any;
  testo=[
    '<div><h4>hosting based:</h4><ul><li>+ Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi aliquam quidem ut veritatis similique, atque, illo quisquam culpa, repellat nobis laborum beatae laboriosam. Necessitatibus, mollitia velit nulla illo obcaecati nesciunt!</li><li>+ Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi aliquam quidem ut veritatis similique, atque, illo quisquam culpa, repellat nobis laborum beatae laboriosam. Necessitatibus, mollitia velit nulla illo obcaecati nesciunt!</li><li>+ Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi aliquam quidem ut veritatis similique, atque, illo quisquam culpa, repellat nobis laborum beatae laboriosam. Necessitatibus, mollitia velit nulla illo obcaecati nesciunt!</li></ul></div>',
    '<div><h4>hosting avg:</h4><ul><li>+ Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi aliquam quidem ut veritatis similique, atque, illo quisquam culpa, repellat nobis laborum beatae laboriosam. Necessitatibus, mollitia velit nulla illo obcaecati nesciunt!</li><li>+ Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi aliquam quidem ut veritatis similique, atque, illo quisquam culpa, repellat nobis laborum beatae laboriosam. Necessitatibus, mollitia velit nulla illo obcaecati nesciunt!</li><li>+ Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi aliquam quidem ut veritatis similique, atque, illo quisquam culpa, repellat nobis laborum beatae laboriosam. Necessitatibus, mollitia velit nulla illo obcaecati nesciunt!</li></ul></div>',
    '<div><h4>hosting top:</h4><ul><li>+ Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi aliquam quidem ut veritatis similique, atque, illo quisquam culpa, repellat nobis laborum beatae laboriosam. Necessitatibus, mollitia velit nulla illo obcaecati nesciunt!</li><li>+ Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi aliquam quidem ut veritatis similique, atque, illo quisquam culpa, repellat nobis laborum beatae laboriosam. Necessitatibus, mollitia velit nulla illo obcaecati nesciunt!</li><li>+ Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi aliquam quidem ut veritatis similique, atque, illo quisquam culpa, repellat nobis laborum beatae laboriosam. Necessitatibus, mollitia velit nulla illo obcaecati nesciunt!</li></ul></div>'
  ]
  constructor() { }
  cliccato(put:any){
    this.qualevedo=put;
  }
  test(){
    return this.qualevedo;
  }
  ngOnInit(): void {
    console.log(this.qualevedo);
  }

}
