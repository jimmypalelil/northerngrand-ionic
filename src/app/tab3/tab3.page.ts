import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Room} from '../models/room';
import {Router} from '@angular/router';
import {ListService} from '../services/list.service';
import {MatSnackBar, MatTableDataSource} from '@angular/material';
import {NavController} from '@ionic/angular';
import {Observable} from 'rxjs';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit, AfterViewInit {
    results: Observable<any>;

    months = [['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
        ['jan to jun', 'jul to dec'],
        ['jan to mar', 'apr to jun', 'july to sep', 'oct to dec']];

    floors = [{label: '2nd Floor', data: 200}, {label: '3rd Floor', data: 300}, {label: '4th Floor', data: 400},
        {label: '5th Floor', data: 500}, {label: '6th Floor', data: 600}];

    types = [{label: 'Bedding', data: 'beddings', index: 0}, {label: 'Carpet Shampoo', data: 'carpets', index: 1},
        {label: 'Bed Flips', data: 'mattress', index: 2}, {label: 'Pillows', data: 'pillows', index: 2},
        {label: 'Pillow Protectors', data: 'pillowss', index: 1}];

    years = [2018, 2019];

    displayedColumns = ['select', 'room_number', 'type', 'status', 'edit'];
    dataDisplayColumns = ['room_number', 'type', 'status', 'edit'];
    currentFloor = 200;
    statuses = [{label: 'All Rooms', data: this.currentFloor}, {label: 'Undone Rooms', data: 'not done'},
        {label: 'Done Rooms', data: 'clean'}];
    currentStatusIndex: number;
    counts = [0, 0, 0];
    allRooms = [[]];

    currentMonth: string;
    currentYear: number;
    currentType: any;
    showSpinner = false;
    showMenu = false;
    dataSource: any;
    selection = new SelectionModel<Room>(true, []);

    constructor(private router: Router, private listService: ListService, public navCtrl: NavController, public snackBar: MatSnackBar) {}

    ngOnInit() {
        this.currentType = JSON.parse(JSON.stringify(this.types))[0];
        const date = new Date();
        const month = date.getMonth();
        this.currentMonth = this.months[0][month];
        this.currentYear = date.getFullYear();

    }

    ngAfterViewInit() {
        this.getMonthList(this.currentType, this.currentMonth, this.currentYear);
    }

    getMonthList(type, month, year) {
        this.listService.getRoomList(type.data, month, year).then(data => {
            this.dataSource = new MatTableDataSource();
            const print_data = [[], [], [], [], []];
            data.forEach(function(room) {
                print_data[Math.floor(room.room_number / 100) - 2].push(room);
            });
            this.allRooms = print_data;
            this.dataSource.filterPredicate = (room: Room, filter: any) =>
                room.status === filter || room.room_number >= Number(filter);
            this.changeFloor(this.currentFloor);
            this.currentType = type;
        });
    }

    changeFloor(floor) {
        this.currentFloor = floor;
        this.dataSource.data = this.allRooms[floor / 100 - 2];
        let doneCount = 0;
        this.dataSource.data.forEach(function (room) {
            if (room.status === 'clean') {
                doneCount++;
            }
        });
        const total = this.dataSource.data.length;
        this.counts = [total, total - doneCount, doneCount];
        this.selection.clear();
        this.currentStatusIndex = 0;
        this.dataSource.filter = floor;
    }

    changeRoomStatus(room: Room) {
        const newStatus = room.status === 'clean' ? 'not done' : 'clean';
        this.listService.changeRoomStatus([room], newStatus).subscribe(msg => {
            if (newStatus === 'not done') {
                this.counts[2]--;
                this.counts[1]++;
            } else {
                this.counts[1]--;
                this.counts[2]++;
            }
            room.status = newStatus;
        });
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.filteredData.length;
        return numSelected === numRows;
    }

    masterToggle() {
        this.isAllSelected() ?
            this.dataSource.filteredData.forEach(room => {
                this.selection.deselect(room);
            }) :
            this.dataSource.filteredData.forEach(room => {
                this.selection.select(room);
            });
    }

    changeSelectRoomStatus(status) {
        const selectedRooms: Room[] = [];
        for (let i = 0; i < this.selection.selected.length; i++) {
            const room = this.selection.selected[i];
            if (room.status !== status) {
                selectedRooms.push(room);
            }
        }
        this.listService.changeRoomStatus(selectedRooms, status).subscribe(msg => {
            this.selection.clear();
            this.snackBar.open(msg['text'].toUpperCase(), '', {
                duration: 2000,
            });
            let doneCount = 0;
            selectedRooms.forEach(function (room) {
                room.status = status;
                if (status === 'clean') {
                    doneCount++;
                }
            });
            this.counts[2] = doneCount;
            this.counts[1] = this.counts[0] - doneCount;
        });
    }

}
