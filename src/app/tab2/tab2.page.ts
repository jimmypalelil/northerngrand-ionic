import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {InventoryItem} from '../models/InventoryItem';
import {InventoryService} from '../services/inventory.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit, AfterViewInit {
    inventoryItems: any[];
    inventoryTableData: MatTableDataSource<any>;
    types: string[] = [];
    displayedColumns: string[];
    currentTypeIndex = 0;
    newInventoryItem: InventoryItem;
    panelOpened: boolean;
    showUpdateBar: boolean;
    currentInventoryItem: InventoryItem;
    showSpinner = false;
    totalCountOfType = 0;
    totalCostOfType = 0;
    totalItems = 0;


    constructor(private inventoryService: InventoryService, private snackBar: MatSnackBar) {
        this.newInventoryItem = new InventoryItem();
        this.panelOpened = false;
        this.showUpdateBar = false;
        this.currentInventoryItem = new InventoryItem();
    }

    @ViewChild(MatSort) sort: MatSort;

    @Output() spinnerEvent = new EventEmitter<boolean>();

    ngOnInit() {}

    ngAfterViewInit() {
        this.getInventoryItems();
    }

    toggleSpinner() {
        this.showSpinner = !this.showSpinner;
        this.spinnerEvent.emit(this.showSpinner);
    }

    getInventoryItems() {
        this.toggleSpinner();
        this.inventoryService.getInventoryItems().then(data => {
            this.inventoryItems = data;
            const types = [];
            const itemLabels = [];
            data.forEach(function(obj) {
                types.push(obj._id);
            });
            const item = data[0].items[0];
            for (const label in item) {
                if (label !== 'cat' && label !== 'type' && label !== '_id') {
                    itemLabels.push(label);
                }
            }
            this.types = types;
            this.displayedColumns = itemLabels;
            this.displayedColumns.push('action');
            this.inventoryTableData = new MatTableDataSource(this.inventoryItems[this.currentTypeIndex].items);
            this.inventoryTableData.filterPredicate = (inventoryItem: any, filter: any) =>
                String(inventoryItem['item_name']).includes(filter);
            this.inventoryTableData.sort = this.sort;
            this.toggleSpinner();
        });
    }

    changeType(index: number) {
        this.toggleSpinner();
        this.currentTypeIndex = index;
        this.totalCostOfType = this.totalCountOfType = 0;
        setTimeout(() => {
            this.inventoryTableData.data = this.inventoryItems[index].items;
            this.inventoryTableData.data.forEach((item: InventoryItem) => {
                this.totalCountOfType += item['total_count'];
                this.totalCostOfType += item['total_cost'];
            });
            this.totalItems = this.inventoryTableData.data.length;
            this.toggleSpinner();
        }, 1000);
    }

    setPanelOpen(value) {
        this.panelOpened = value;
    }

    isHK(): boolean {
        const email = localStorage.getItem('token');
        return email === 'housekeeping@northerngrand.ca' || email === 'tester@test.com' || email === 'jimmypalelil@gmail.com';
    }

    addItem() {
        if (this.isHK()) {
            this.toggleSpinner();
            this.inventoryService.addItem(this.newInventoryItem).then(msg => {
                this.snackBar.open(msg['text'], '', {
                    duration: 2000,
                });
                this.panelOpened = false;
                this.getInventoryItems();
            });
        } else {
            this.snackBar.open('Only Housekeeping Department can Add New Items', '', {
                duration: 2000,
            });
        }
    }

    applyFilter(filter: string): void {
        this.inventoryTableData.filter = filter;
    }

    sortData(event) {
        this.sort.active = event.active;
        this.sort.direction = event.direction;
        this.inventoryTableData.sort = this.sort;
    }

    sendItemInfo(inventoryItem) {
        this.currentInventoryItem = inventoryItem;
    }

    deleteInventoryItem() {
        if (this.isHK()) {
            this.inventoryService.deleteInventoryItem(this.currentInventoryItem).then(msg => {
                this.snackBar.open(msg['text'], '', {
                    duration: 2000,
                });
                this.inventoryTableData.data.splice(this.inventoryTableData.data.indexOf(this.currentInventoryItem), 1);
                this.inventoryTableData._updateChangeSubscription();
            });
        } else {
            this.snackBar.open('Only Housekeeping Department can Delete Items', '', {
                duration: 2000,
            });
        }
    }

    updateInventoryItem() {
        // Update Total Count first
        const i = this.currentInventoryItem;
        i['total_count'] = i['laundry'] + i['lock_up'] + i['second'] + i['third'] + i['fourth'] + i['fifth'] + i['sixth'] + i['par_stock'];
        i['total_cost'] = i['cost_per_item'] * i['total_count'];
        this.inventoryService.updateInventoryItem(this.currentInventoryItem).then(msg => {
            this.snackBar.open(msg['text'], '', {
                duration: 2000,
            });
        });
    }
}
