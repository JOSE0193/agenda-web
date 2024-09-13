import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';
import { ClientesService } from '../clientes-services/clientes.service';
import { Cliente } from './../cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  preserveWhitespaces: true
})
export class ClientesComponent implements OnInit {

  deleteModalRef!: BsModalRef;
  @ViewChild('deleteModal', {static: true}) deleteModal: any;

  clientes$!: Observable<Cliente[]>;
  error$ = new Subject<boolean>();
  clienteSelecionado!: Cliente

  constructor(
    private alertService: AlertModalService,
    private service: ClientesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh(){
    this.clientes$ = this.service.list()
      .pipe(
        catchError(error => {console.error(error)
          this.handleError();
          return EMPTY;
        })
      );
  }

  handleError(){
    this.alertService.showAlertDanger('Erro ao carregar a lista de clientes. Tente novamente mais tarde.');
  }

  onEdit(id: number){
    this.router.navigate(['edit', id], {relativeTo: this.route});
  }

  onDelete(cliente: Cliente){

    this.clienteSelecionado = cliente;

    const result$ = this.alertService.showConfirm('Confirmacao', 'Tem certeza que deseja remover esse cliente?');
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.service.remove(cliente.id) : EMPTY)
    )
    .subscribe(
      success => {
        this.onRefresh();
      },
      error => {
        this.alertService.showAlertDanger('Erro ao remover cliente. Tente novamente mais tarde.');
      }
    );
  }
  onConfirmDelete(){
    this.service.remove(this.clienteSelecionado.id)
    .subscribe(
      success => {
        this.onRefresh();
        this.deleteModalRef.hide();
      },
      error => {
        this.alertService.showAlertDanger('Error ao remover cliente. Tente novamente mais tarde.');
        this.deleteModalRef.hide();
      }
    );
  }

  onDeclineDelete(){
    this.deleteModalRef.hide();
  }
}
