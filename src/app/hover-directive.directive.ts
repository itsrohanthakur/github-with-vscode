

import { Directive, ElementRef, Input, OnInit  } from '@angular/core';


@Directive({
  selector: '[HoverDirective]'
})
export class HoverDirectiveDirective implements OnInit {
  @Input() hoverColor: string;
  
  constructor(private  el:ElementRef) { 
    
    el.nativeElement.style.backgroundColor="red";
  }

  ngOnInit(){
    console.log(this.hoverColor);
  }
  

  


}
