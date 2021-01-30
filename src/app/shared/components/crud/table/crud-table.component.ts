import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CrudDialogComponent } from '../dialog/crud-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss']
})
export class CrudTableComponent implements OnInit {

  @Input() title: string;
  @Input() rows: Observable<any>;
  @Input() columns: any[];
  @Input() showActions: boolean = true;

  @Input() create: Function;
  @Input() read: Function;
  @Input() update: Function;
  @Input() delete: Function;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<any>;

  constructor(
    private dialog: MatDialog,
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
     this.rows = this.read();
     this.rows.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CrudDialogComponent, {
      width: '500px',
    });
  }

  get tableColumns(): string[] {
    const columns = this.columns.map(x => x.name);
    if (this.showActions) columns.push("actions");
    return columns;
  }

}
