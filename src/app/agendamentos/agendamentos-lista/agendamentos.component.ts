import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';

import { AgendamentosService } from './../service/agendamgentos.service';
import { Agendamento } from './../agendamento';



@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.css'],
  preserveWhitespaces: true
})
export class AgendamentosComponent implements OnInit {

  deleteModalRef!: BsModalRef;
  @ViewChild('deleteModal', {static: true}) deleteModal: any;

  agendamentos$!: Observable<Agendamento[]>;
  error$ = new Subject<boolean>();
  agendamentoSelecionado!: Agendamento;

  constructor(
    private alertService: AlertModalService,
    private service: AgendamentosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh(){
    this.agendamentos$ = this.service.list()
      .pipe(
        catchError(error => {console.error(error);
          this.handleError();
          return EMPTY;
        })
      );
  }

  handleError(){
    this.alertService.showAlertDanger('Erro ao carregar lista de Agendamentos. Tente novamente mais tarde.');
  }

  onEdit(id: number){
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  onDelete(agendamento: Agendamento){

    this.agendamentoSelecionado = agendamento;

    const reuslt$ = this.alertService.showConfirm('Confirmaçao', 'Tem certeza que deseja remover o agendamento');
    reuslt$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.service.remove(agendamento.id) : EMPTY)
    )
    .subscribe(
      success => {
        this.onRefresh();
      },
      error => {
        this.alertService.showAlertDanger('Erro ao remover o agendamento. Tente novamente mais tarde.')
      }
    );
  }

  onConfirmDelete(){
    this.service.remove(this.agendamentoSelecionado.id)
    .subscribe(
      success => {
        this.onRefresh();
        this.deleteModalRef.hide();
      },
      error => {
        this.alertService.showAlertDanger('Error ao remover agendamento. Tente novamente mais tarde.');
        this.deleteModalRef.hide();
      }
    );
  }

  onDeclineDelete(){
    this.deleteModalRef.hide();
  }

}
