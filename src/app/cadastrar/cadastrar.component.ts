import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: Usuario = new Usuario()
  confirmSenha : string
  tipoUsuario : string
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    window.scroll(0,0)

    }

    confirmaSenha(event: any){
      this.confirmSenha = event.target.value
    }

    tipoUser(event: any){
      this.tipoUser = event.target.value
    }

    cadastrar(){
      this.user.tipo = this.tipoUsuario

      if(this.user.senha != this.confirmSenha){
        alert('As senhas estão incorretas')
      } else {
        this.authService.cadastrar(this.user).subscribe((resp: Usuario)=> {
          this.user = resp
          this.router.navigate(['/entrar'])
          alert('usuario cadastrado com sucesso')
        })

      }

    }

}
