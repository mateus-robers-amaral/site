import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { BotaoComponent } from "../botao/botao.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, BotaoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
