import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  inject,
} from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  private elementRef = inject(ElementRef)
  isDisplacement = false
  getScreenWidth = 0
  getScreenHeight = 0
  screen = true
  screenLg = false
  screenXL = false

  imgSize = '4rem'
  imgSizeLg = '5rem'
  imgSizeXL = '6rem'

  logoStyle = {
    width: this.imgSize,
    heigth: this.imgSize,
  }

  logoStyleLg = {
    width: this.imgSizeLg,
    heigth: this.imgSizeLg,
  }

  logoStyleXL = {
    width: this.imgSizeXL,
    heigth: this.imgSizeXL,
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.screenSize()
  }

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
      this.imgSize = '4rem'
      this.imgSizeLg = '5rem'
      this.imgSizeXL = '6rem'
    } else {
      this.isDisplacement = true
      this.imgSize = '3rem'
      this.imgSizeLg = '4rem'
      this.imgSizeXL = '5rem'
    }

    this.logoStyle = {
      width: this.imgSize,
      heigth: this.imgSize,
    }

    this.logoStyleLg = {
      width: this.imgSizeLg,
      heigth: this.imgSizeLg,
    }

    this.logoStyleXL = {
      width: this.imgSizeXL,
      heigth: this.imgSizeXL,
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenSize()
  }

  screenSize() {
    this.getScreenWidth = window.innerWidth
    this.getScreenHeight = window.innerHeight

    if (this.getScreenWidth <= 800) {
      this.screen = true
    } else {
      this.screen = false
    }

    if (this.getScreenWidth >= 801 && this.getScreenWidth <= 1023) {
      this.screenLg = true
    } else {
      this.screenLg = false
    }

    if (this.getScreenWidth >= 1024) {
      this.screenXL = true
    } else {
      this.screenXL = false
    }
  }
}
