import { Component, ViewChild } from '@angular/core';
import { IonVirtualScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('vScroll', { read: IonVirtualScroll }) vScroll: IonVirtualScroll;
  ourItems:any[] = []
  constructor()
  {
    this.add(10);
  }

  refresh()
  {
    this.vScroll.checkRange(0);
  }

  add(howMany:number)
  {
    var offset = this.ourItems.length;
    console.log("Add elements "+offset+" to "+(offset+howMany-1));
    for(var i = offset; i < offset+howMany; i++)
    {
      this.ourItems.push({
        index:i
      });
    }
  }

  infiniteScroll(event)
  {
    this.add(10);
    this.vScroll.checkEnd();
    event.target.complete();
  }

}
