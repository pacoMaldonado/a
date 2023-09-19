import { Component, ElementRef, HostListener, inject } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  private elementRef = inject(ElementRef)
  isDisplacement = false

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.elementRef.nativeElement.offsetTop
    const scrollPosition = window.scrollY

    if (scrollPosition >= componentPosition - 128) {
      this.isDisplacement = true
    } else {
      this.isDisplacement = false
    }

    if (scrollPosition === componentPosition - 128) {
      this.isDisplacement = false
    } else {
      this.isDisplacement = true
    }
  }
}
