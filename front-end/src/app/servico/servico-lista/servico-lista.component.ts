import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';
import { ServicoService } from '../service/servico.service';
import { Servico } from '../servico';

@Component({
  selector: 'app-servico-lista',
  templateUrl: './servico-lista.component.html',
  styleUrls: ['./servico-lista.component.css']
})
export class ServicoListaComponent implements OnInit {

  deleteModalRef!: BsModalRef;
  @ViewChild('deleteModal', {static: true}) deleteModal: any;

  servicos$!: Observable<Servico[]>;
  error$ = new Subject<boolean>();
  servicoSelecionado!: Servico;

  constructor(
    private alertService: AlertModalService,
    private service: ServicoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh(){
    this.servicos$ = this.service.list()
      .pipe(
        catchError(error => {console.error(error)
          this.handleError();
          return EMPTY;
        })
      );
  }

  handleError(){
    this.alertService.showAlertDanger('Erro ao carregar a lista de serviços. Tente novamente mais tarde.');
  }

  onEdit(id: number){
    this.router.navigate(['edit', id], {relativeTo: this.route});
  }

  onDelete(servico: Servico){

    this.servicoSelecionado = servico;

    const result$ = this.alertService.showConfirm('Confirmacao', 'Tem certeza que deseja remover esse cliente?');
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.service.remove(servico.id) : EMPTY)
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
    this.service.remove(this.servicoSelecionado.id)
    .subscribe(
      success => {
        this.onRefresh();
        this.deleteModalRef.hide();
      },
      error => {
        this.alertService.showAlertDanger('Error ao remover serviço. Tente novamente mais tarde.');
        this.deleteModalRef.hide();
      }
    );
  }

  onDeclineDelete(){
    this.deleteModalRef.hide();
  }
}
