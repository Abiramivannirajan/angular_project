import { Component } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  title = "new project";
  product = {
    name: "iphone",
    price: 999,
    color: 'red',
    image: "/assets/images/phone.png"
  }

  onclick() {
    alert("Hello");
  }
  value = 0;
  increment() {
    this.value += 1;
  }
  decrement() {
    this.value--;

  }
  somevalue = "";


  status = true;
  onclicks() {
    this.status = false;
  }

  val: number = 1
  valfinal: number = 0
  list: string[] = ["abi", "thirisha", "kavi", "nithu", "jemi"]
  clicked() {
    if (this.val % 2 != 0) {
      this.valfinal = 0

    }
    else if (this.val % 3 == 0) {
      this.valfinal = 1
    }
    else {
      this.valfinal = 1
    }
      this.val++
  }

  result:boolean=false;


  results:boolean= true;


  change = " ";
  changeview(s:string){
    this.change = s;
  }

  count :number = 6;


  name : string="heloo to all"
}








