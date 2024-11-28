import { Component, HostListener } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { BotaoComponent } from "../botao/botao.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DropdownComponent, CommonModule, BotaoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // A condição verifica a quantidade de rolagem em pixels
    if (window.scrollY > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
