import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})
export class CalendarioComponent implements OnInit {
  
  months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  selectedMonthIndex = 1;
  rooms: any;
  daysInMonth: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  roomService = inject(RoomService);
   ngOnInit(): void {
    this.roomService.getRooms().subscribe((data: any) => {
        this.rooms = data.sort((a: any, b: any) => {
          if (a.building === b.building) {
            return a.roomNumber - b.roomNumber;
          }
          return a.building.localeCompare(b.building);
        });

      });
  }
  selectMonth(month: number) {

  }
}
