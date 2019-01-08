import { BrowserModule } from '@angular/platform-browser'; //浏览器解析模块
import { NgModule } from '@angular/core'; //ng核心模块

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { DateComponent } from './components/date/date.component';//s跟组件


@NgModule({
  declarations: [  
    AppComponent, DateComponent //引入当前项目运行的组件
  ],
  imports: [  //当前模块运行的依赖
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],  //定义的服务
  bootstrap: [AppComponent] //引入根组件启动服务
})
export class AppModule { }
