import { Component, ElementRef, OnInit, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { NavbarComponent } from './components/navbar/navbar.component'
import { InicioComponent } from './components/inicio/inicio.component'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, NavbarComponent, InicioComponent],
})
export class AppComponent implements OnInit {
  title = 'Javi Maldonado'
  private elementRef = inject(ElementRef)

  ngOnInit(): void {
    this.selectOptionMenu()
  }

  private createObserver(target: HTMLElement) {
    const options = {
      rootMargin: '-30% 0px -70% 0px',
    }

    const isIntersecting = (entry: IntersectionObserverEntry) =>
      entry.isIntersecting || entry.intersectionRatio > 0

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id')
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`)

        if (isIntersecting(entry)) {
          const itemSelected = document.querySelector('.menu a.selected')
          itemSelected?.classList.remove('selected')
          menuLink?.classList.add('selected')
        }
      })
    }, options)

    observer.observe(target)
  }

  selectOptionMenu(): void {
    try {
      const menuItems =
        this.elementRef.nativeElement.querySelectorAll('.menu a[href^="#"]')

      menuItems.forEach((item: HTMLElement) => {
        if (item) {
          const hash = item.getAttribute('href')
          console.log(`hash -  ${hash}`)
          const target: HTMLElement =
            this.elementRef.nativeElement.querySelector(`${hash}`)

          if (target) {
            this.createObserver(target)
          }
        }
      })
    } catch (error) {
      console.error(' === JM === ')
      console.error(error)
    }
  }
}
