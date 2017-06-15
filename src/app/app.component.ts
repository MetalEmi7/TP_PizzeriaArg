import { Component } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource  } from 'ng2-smart-table';   
import { ServicioService } from "./Servicios/servicio.service";

import 'rxjs/add/operator/toPromise';    

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP - Pizzeria Argenta SRL';
  source_test: LocalDataSource;
  showForm = true;  

  form={
    nombre:"Emi",
    pass:"123",
  };

  sets = {
    noDataMessage:"Cargando...",
    pager:{perPage:10},
    columns:
    {
      Nombre:
        {title:"nombre"},    
      TipoPerfil:
        {title:"tipo de Perfil"},
    }  
  };

constructor (private datos:ServicioService){
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

getUser()
{
  this.datos.TraerTodosUsuarios()
  .then(data=>{
    this.source_test.load(data)
    console.log(data)
  })
  .catch(error=> console.log(error));
}


}
