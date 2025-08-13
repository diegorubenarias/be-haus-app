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
  selectedMonthIndex = new Date().getMonth(); // Get current month index (0-11);
  rooms: any;
  daysInMonth: number[] = [];
  roomService = inject(RoomService);
  showModal: boolean = false;

   ngOnInit(): void {
    this.roomService.getRooms().subscribe((data: any) => {
        this.rooms = data.sort((a: any, b: any) => {
          if (a.building === b.building) {
            return a.roomNumber - b.roomNumber;
          }
          return a.building.localeCompare(b.building);
        });

      });
    this.daysInMonth = this.getDaysInMonth(this.selectedMonthIndex);
  }
  selectMonth(month: number) {
    this.selectedMonthIndex = month;
    this.daysInMonth = this.getDaysInMonth(month);
  }

  openReservationModal() {
    this.showModal = true;
  }
  closeReservationModal() {
    this.showModal = false;
  }
  getDaysInMonth(monthIndex: number): number[] {
    const year = new Date().getFullYear();
    // monthIndex is 0-based for Date, but your months array is 0-based too
    const days = new Date(year, monthIndex + 1, 0).getDate();
    return Array.from({ length: days }, (_, i) => i + 1);
  }

  isHoliday(day: number): boolean {
    // Example logic for holidays, replace with actual logic
    const holidays = getHollidaysForMonth(this.selectedMonthIndex);
    const weekends = [0, 6]; // 0 = Sunday, 6 = Saturday
    const date = new Date(new Date().getFullYear(), this.selectedMonthIndex, day);
    // Check if the day is a weekend
    if (weekends.includes(date.getDay())) {
      return true;
    }
    return holidays.includes(day);
  }
}

function getHollidaysForMonth(selectedMonthIndex: number): number[] {
  // Example: hardcoded holidays for demonstration purposes
  // Key: month index (0 = January), Value: array of day numbers
  const holidaysByMonth: { [key: number]: number[] } = {
    0: [1],           // January: New Year, Epiphany
    11: [25],         // December: Christmas
  };
  return holidaysByMonth[selectedMonthIndex] || [];
}


