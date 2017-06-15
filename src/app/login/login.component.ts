import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource  } from 'ng2-smart-table';   
import { LoginService } from "./Servicios/Login.service";
import 'rxjs/add/operator/toPromise';    

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  source_test: LocalDataSource;

  form={
    nombre:"",
    pass:"",
  };

constructor(private datos:LoginService){
  this.source_test = new LocalDataSource();
}

Login()
{
  this.datos.Loguearse(this.form)
  .then(data=>{
    this.source_test.load(data)
    console.log(data)
  })
  .catch(error=> console.log(error));
}

ngOnInit()
{}




}
