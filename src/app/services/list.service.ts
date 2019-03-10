import { Injectable } from '@angular/core';
import {Room} from '../models/room';
import {LostItem} from '../models/lostitem';
import {ReturnedItem} from '../models/returneditem';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ListService {
  private lostUrl = 'https://northerngrand-hotel-test.herokuapp.com/lostAndFound/';
  private Url = 'https://northerngrand-hotel-test.herokuapp.com/list/';

  constructor(private http: HttpClient) { }

  getRoomList(type, month, year): Promise<any> {
    return this.http.get(this.Url + type + '/' + year + '/' + month).toPromise();
  }

  getLostList(): Promise<any> {
    return this.http.get(this.Url + 'lost/lostItems').toPromise();
  }

  getReturnedItemList(): Promise<any> {
    return this.http.get(this.Url + 'lost/returnedItems').toPromise();
  }

  changeRoomStatus(rooms: Room[], status) {
    return this.http.post(this.Url + 'roomStatusChange', [rooms, status]).toPromise();
  }

  deleteLostItem(currentItem: LostItem): Promise<any> {
    return this.http.get(this.lostUrl + 'deleteLostItem/' + currentItem._id).toPromise();
  }

  addNewLostItem(lostItem: LostItem) {
    return this.http.post(this.lostUrl + 'new', lostItem, {}).toPromise();
  }

  sendItemEmail(lostItem: LostItem) {
    return this.http.post(this.lostUrl + 'email', lostItem, {}).toPromise();
  }

  returnItem(returnItem: ReturnedItem | (() => void)) {
    return this.http.post(this.lostUrl + 'returnItem', returnItem, {}).toPromise();
  }

  undoReturn(returnItem: ReturnedItem): Promise<any> {
    return this.http.post(this.lostUrl + 'undoReturn', returnItem, {}).toPromise();
  }

  updateLostItem(item): Promise<any> {
    return this.http.post(this.lostUrl + 'updateItem', item, {}).toPromise();
  }

  updateReturnedItem(item: any): Promise<any> {
    return this.http.post(this.lostUrl + 'updateReturnedItem', item, {}).toPromise();
  }

  deleteReturnedItem(currentReturnItem: ReturnedItem): Promise<any> {
    return this.http.get(this.lostUrl + 'deleteReturnedItem/' + currentReturnItem._id).toPromise();
  }
}

