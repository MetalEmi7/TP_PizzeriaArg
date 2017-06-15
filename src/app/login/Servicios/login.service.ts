import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
  constructor(public http: Http) { }



Loguearse(User){
  let url = "http://localhost/TPLAb4PizzeriasArg/slim/index.php/table/usuarios/Login";
  //Cambiar URL

  return this.http.post(url, User)
  .toPromise()
  .then(this.extractData)
  .catch(this.error);

  /* Para hacer un Login hay que usar:
  
  -Usar metodo POST de HTTP desde angular (el envio de datos)
  -Que el metodo SLIM reciva por POST, tome el valor string de la URL 'usuarios'
  -Que el metodo SLIM tome valores con        '$resquest->getParams();'
  -QUE el metodo SLIM retorne                 'GenericDAO::getUser($table, $params);'

  -QUE en genericDAO utilice para retornar... 'Json_encode($statement->fetchAll(PDO::FETCH_OBJ));'

  */
}







extractData(Res: Response)
{return Res.json() || {};}

error(error: Response)
{return error;}
}
