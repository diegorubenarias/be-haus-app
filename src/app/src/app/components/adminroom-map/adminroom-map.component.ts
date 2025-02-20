import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { RoomService } from '../../../../services/room.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adminroom-map',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './adminroom-map.component.html',
  styleUrl: './adminroom-map.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdminroomMapComponent implements OnInit {

  roomService = inject(RoomService);
  
  rooms: any[] = [];
  selectedRoom: any = null;
  filterCriteria = 'all';
  filteredRooms = [...this.rooms];
  filterGuestName = '';
  filterEndDate = '';
  filterStartDate = '';
  availabeRooms = 0;

  applyFilters() {
    if (this.filterCriteria === 'all') {
      this.filteredRooms = [...this.rooms];
    } else {
      this.filteredRooms = this.rooms.filter(room => room.status === this.filterCriteria);
    }
  }

  selectRoom(room: any) {
    this.selectedRoom = room;
  }

  ngOnInit(): void {
   
      this.rooms = this.roomService.getRooms();
  
  }
  get occupancyRate() {
    const occupied = this.rooms.filter(room => room.isOccupied).length;
    return ((occupied / this.rooms.length) * 100).toFixed(2);
  }

  get availableRooms() {
    return this.rooms.filter(room => !room.isOccupied).length;
  }

  get occupiedRooms() {
    return this.rooms.filter(room => room.isOccupied).length;
  }

  openRoomModal(room: any) {
    this.selectedRoom = { ...room };
  }

  closeRoomModal() {
    this.selectedRoom = null;
  }

  saveRoomChanges(updatedRoom: any) {
    const roomIndex = this.rooms.findIndex(room => room.number === updatedRoom.number);
    if (roomIndex > -1) {
      this.rooms[roomIndex] = updatedRoom;
    }
    this.closeRoomModal();
  }

  filters = {
    checkin: '',
    checkout: '',
    guests: 1,
  };



 

  openRoomDetails(room: any) {
    this.selectedRoom = room;
  }

  closeRoomDetails() {
    this.selectedRoom = null;
  }

}
