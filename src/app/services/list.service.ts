import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import {Room} from '../models/room';
import {LostItem} from '../models/lostitem';
import {ReturnedItem} from '../models/returneditem';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ListService {
  private lostUrl = environment.lostUrl;
  private Url = 'https://northerngrandmaintenance.herokuapp.com/list/';

  constructor(private http: HttpClient) { }

  getRoomList(type, month, year): Promise<any> {
    // return this.http.get(this.Url + type + '/' + year + '/' + month, {}, {});
    return this.http.get(this.Url + type + '/' + year + '/' + month).toPromise();
  }

  getLostList() {
    return this.http.get(this.Url + 'lost/lostItems');
    // return this.http.get(this.Url + 'lost/lostItems', {}, {});
  }

  getReturnedItemList() {
    return this.http.get(this.Url + 'lost/returnedItems');
    // return this.http.get(this.Url + 'lost/returnedItems', {}, {});
  }

  changeRoomStatus(rooms: Room[], status) {
    return this.http.post(this.Url + 'roomStatusChange', [rooms, status], {});
  }

  deleteLostItem(currentItem: LostItem) {
    return this.http.get(this.lostUrl + 'deleteLostItem/' + currentItem._id);
    // return this.http.get(this.lostUrl + 'deleteLostItem/' + currentItem._id, {}, {});
  }

  addNewLostItem(lostItem: LostItem) {
    return this.http.post(this.lostUrl + 'new', lostItem, {});
  }

  sendItemEmail(lostItem: LostItem) {
    return this.http.post(this.lostUrl + 'email', lostItem, {});
  }

  returnItem(returnItem: ReturnedItem | (() => void)) {
    return this.http.post(this.lostUrl + 'returnItem', returnItem, {});
  }

  undoReturn(returnItem: ReturnedItem) {
    return this.http.post(this.lostUrl + 'undoReturn', returnItem, {});
  }

  updateLostItem(item){
    return this.http.post(this.lostUrl + 'updateItem', item, {});
  }

  updateReturnedItem(item: any) {
    return this.http.post(this.lostUrl + 'updateReturnedItem', item, {});
  }

  deleteReturnedItem(currentReturnItem: ReturnedItem) {
    return this.http.get(this.lostUrl + 'deleteReturnedItem/' + currentReturnItem._id);
    // return this.http.get(this.lostUrl + 'deleteReturnedItem/' + currentReturnItem._id, {}, {});
  }
}

