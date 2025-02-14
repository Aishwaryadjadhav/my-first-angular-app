import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // message =  signal ("this msg from header component");

  // Changemsg(){
  //   this.message.update(()=>'you clicked the button');
  // } 
}
