import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]'
})
export class MarcaTextoDirective implements OnInit {
  @Input() corDeFundo = 'yellow';
  @Input() corDeTexto = 'white';

  constructor(private elemento: ElementRef) { }

  ngOnInit(){
    this.mudarFundo();
  }

  private mudarFundo(cor: string = 'yellow') {
    this.elemento.nativeElement.style.backgroundColor = this.corDeFundo || cor;
    this.elemento.nativeElement.style.cor =this.corDeTexto;
    this.elemento.nativeElement.style.fontweight = 'bold';
  }
}
