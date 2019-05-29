import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-one',
  templateUrl: './dynamic-one.component.html',
  styleUrls: ['./dynamic-one.component.scss'],
})
export class DynamicOneComponent implements OnInit {

  _listData:any;
  constructor() { }
  @Input()
  set layoutData(listData:any)
  {
    console.log('DynamicOneComponent '+listData.index);
    this._listData = listData;
  }
  get layoutData()
  {
    return this._listData;
  }
  ngOnInit() {}

  get getText()
  {
    return (this._listData.index.toString()+' ').repeat(((this._listData.index % 10)*30+1)*(this._listData.index % 3 + 1));
  }

}
