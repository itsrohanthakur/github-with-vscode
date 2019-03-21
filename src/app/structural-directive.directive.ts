import { Directive  , TemplateRef , ViewContainerRef, OnInit, Input} from '@angular/core';

@Directive({
  selector: '[hide]'
})
export class StructuralDirectiveDirective implements OnInit {
  @Input() state: string;
  statetemp = false;
  constructor(
    private tref: TemplateRef<any>,
    private vcref: ViewContainerRef
  ) { }
  ngOnInit(){
    console.log(this.state);
    if(this.statetemp === false){
      this.vcref.createEmbeddedView(this.tref);
    }
    else{
     this.vcref.clear();
    }
  }
}
