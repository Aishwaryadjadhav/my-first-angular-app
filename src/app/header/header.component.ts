import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // message =  signal ("this msg from header component");

  // Changemsg(){
  //   this.message.update(()=>'you clicked the button');
  // } 
}
