import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource  } from 'ng2-smart-table';
import { AltaService } from "./Servicios/Alta.service"; // (MAYUS)
import 'rxjs/add/operator/toPromise';      

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {
dataSource:LocalDataSource;

  form={
    nombre:"",
    pass:"",
    telefono:"",
    direccion:"",
    foto:"",
  };

constructor(private datos:AltaService)
{this.dataSource = new LocalDataSource(); }

ngOnInit() {
}



}
