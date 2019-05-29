import { Component, OnInit, ViewChild, Input, ViewContainerRef, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { DynamicOneComponent } from '../dynamic-one/dynamic-one.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
})
export class DynamicComponent implements OnInit {

  @ViewChild('layoutsContainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  @Input()
  set layoutData(layoutData:any)
  {
      console.log('set '+layoutData.index);
      
      this.entry.clear(); 

      const factory = this.resolver.resolveComponentFactory(DynamicOneComponent);
      const componentRef = this.entry.createComponent(factory);
      // SEND DATA TO NEWLY GENERATED COMPONENT
      (<DynamicOneComponent>componentRef.instance).layoutData = layoutData;
  }

  constructor(private resolver: ComponentFactoryResolver, private cdr: ChangeDetectorRef) { 
  }
  ngOnInit() {}

}
