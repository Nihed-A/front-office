import {ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import {RequestClaimServiceService} from '../request-claim-service.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-request-claim-list',
  templateUrl: './request-claim-list.component.html',
  styleUrls: ['./request-claim-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RequestClaimListComponent implements OnInit {

  someSubscription: any;
  data: any;
  public basicSelectedOption: number = 10;
  
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableRowDetails') tableRowDetails: any;
  constructor(private requestService: RequestClaimServiceService, private ngxService: NgxUiLoaderService,private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.getAllRequestClaims();
  }

  loadRequests(): void {
    this.requestService.retrieveAllClaims().subscribe(requests => {
      this.data = requests;
      this.cdr.detectChanges();
    });
  }
    filterUpdate($event: KeyboardEvent) {

    }

  public ColumnMode = ColumnMode;
  selectPlan: any;
  selectStatus: any;
  selectedStatus: any;
  selectRole: any;
  contentHeader: any;
  selectedRole: any;
  selectedPlan: any;

  filterByPlan($event: any) {
    
  }

  filterByStatus($event: any) {
    
  }

  filterByRole($event: any) {
    
  }

  getAllRequestClaims(){
    this.data = this.requestService.retrieveAllClaims().subscribe(res =>this.data = res)
  }

  resolveRequest(requestClaim) {
    this.requestService.resolveRequestClaim(requestClaim).subscribe();
    setTimeout(() => {
      this.loadRequests();
      this.cdr.detectChanges();
    }, 0);
  }

  deleteRequest(id: number) {
    this.requestService.deleteClaim(id).subscribe()
    setTimeout(() => {
      this.loadRequests();
      this.cdr.detectChanges();
    }, 0);
  }
}
