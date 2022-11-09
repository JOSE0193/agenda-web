import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ProfissionaisService } from './../service/profissionais.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EMPTY, Observable, Subject } from 'rxjs';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';
import { Profissional } from '../profissional';
import { catchError, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css'],
  preserveWhitespaces: true
})
export class ProfissionaisComponent implements OnInit {

  deleteModalRef!: BsModalRef;
  @ViewChild('deleteModal', {static: true}) deleteModal: any;

  profissionais$!: Observable<Profissional[]>;
  error$ = new Subject<boolean>();
  profissionalSelecionado!: Profissional;

  constructor(
    private alertService: AlertModalService,
    private service: ProfissionaisService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh(){
   this.profissionais$ = this.service.list()
      .pipe(
        catchError(error => {console.error(error)
          this.handleError();
          return EMPTY;
        })
      );
  }

  handleError(){
    this.alertService.showAlertDanger('Erro ao carregar a lista de profissionais. Tente novamente mais tarde.');
  }

  onEdit(id: number){
    this.router.navigate(['edit', id], {relativeTo: this.route});
  }

  onDelete(profissional: Profissional){

    this.profissionalSelecionado = profissional;

    const result$ = this.alertService.showConfirm('Confirmacao', 'Tem certeza que deseja remover esse profissional?');
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.service.remove(this.profissionalSelecionado.id) : EMPTY)
    )
    .subscribe(
      success => {
        this.onRefresh();
      },
      error => {
        this.alertService.showAlertDanger('Erro ao remover profissional. Tente novamente mais tarde.');
      }
    );
  }
  onConfirmDelete(){
    this.service.remove(this.profissionalSelecionado.id)
    .subscribe(
      success => {
        this.onRefresh();
        this.deleteModalRef.hide();
      },
      error => {
        this.alertService.showAlertDanger('Error ao remover profissional. Tente novamente mais tarde.');
        this.deleteModalRef.hide();
      }
    );
  }

  onDeclineDelete(){
    this.deleteModalRef.hide();
  }
}

