import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.less']
})
export class DateComponent implements OnInit {
  public title: string = "这是绑定数据的一些知识点";//规定类型的定义
  public man: object = {
    name: "啦啦啦",
    sex: "男"
  };
  public unknow:any;
  public ids:any="value";
  constructor() { 
    this.unknow="在constructor赋值"
  }

  ngOnInit() {
  }

}
