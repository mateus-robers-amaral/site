import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { BotaoComponent } from '../botao/botao.component';
import { CarouselComponent } from '../carrossel/carrossel.component';
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    BotaoComponent,
    // CarouselComponent,
    FooterComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { }
