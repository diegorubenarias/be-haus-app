import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  http = inject(HttpClient);
  constructor() { }

  getRooms() {
    this.http.get('/data/rooms.json');
    return  [
      { number: 101, isOccupied: true, guest: { name: 'John Doe', checkInDate: '2025-01-20', checkOutDate: '2025-01-25' }, 
      futureReservations: [
        { guestName: 'Jane Smith', startDate: '2025-01-30', endDate: '2025-02-02' },
        { guestName: 'Alice Brown', startDate: '2025-02-03', endDate: '2025-02-13' },
        { guestName: 'John Doe', startDate: '2025-02-15', endDate: '2025-02-29' }
      ] },
      { number: 102, isOccupied: false, futureReservations: [
        { guestName: 'Jane Smith', startDate: '2025-01-30', endDate: '2025-02-02' }
      ] },
      { number: 103, isOccupied: false, futureReservations: [
        { guestName: 'Jane Smith', startDate: '2025-01-30', endDate: '2025-02-02' }
      ] },{ number: 104, isOccupied: true, guest: { name: 'John Doe', checkInDate: '2025-01-20', checkOutDate: '2025-01-25' }, futureReservations: [] },
      { number: 105, isOccupied: false, futureReservations: [
        { guestName: 'Jane Smith', startDate: '2025-01-30', endDate: '2025-02-02' }
      ] },
      { number: 106, isOccupied: true, guest: { name: 'Alice Brown', checkInDate: '2025-01-18', checkOutDate: '2025-01-22' }, futureReservations: [] },
      { number: 107, isOccupied: true, guest: { name: 'John Doe', checkInDate: '2025-01-20', checkOutDate: '2025-01-25' }, futureReservations: [] },
      { number: 108, isOccupied: false, futureReservations: [
        { guestName: 'Jane Smith', startDate: '2025-01-30', endDate: '2025-02-02' }
      ] },
      { number: 109, isOccupied: true, guest: { name: 'Alice Brown', checkInDate: '2025-01-18', checkOutDate: '2025-01-22' }, futureReservations: [] },
      { number: 110, isOccupied: true, guest: { name: 'John Doe', checkInDate: '2025-01-20', checkOutDate: '2025-01-25' }, futureReservations: [] },
      { number: 111, isOccupied: false, futureReservations: [
        { guestName: 'Jane Smith', startDate: '2025-01-30', endDate: '2025-02-02' }
      ] },
      { number: 112, isOccupied: true, guest: { name: 'Alice Brown', checkInDate: '2025-01-18', checkOutDate: '2025-01-22' }, futureReservations: [] },
      { number: 113, isOccupied: false, futureReservations: [
        { guestName: 'Jane Smith', startDate: '2025-01-30', endDate: '2025-02-02' }
      ] },{ number: 114, isOccupied: false, futureReservations: [
        { guestName: 'Jane Smith', startDate: '2025-01-30', endDate: '2025-02-02' }
      ] },
      { number: 115, isOccupied: true, guest: { name: 'Alice Brown', checkInDate: '2025-01-18', checkOutDate: '2025-01-22' }, futureReservations: [] },
      { number: 116, isOccupied: false, futureReservations: [
        { guestName: 'Jane Smith', startDate: '2025-01-30', endDate: '2025-02-02' }
      ] },{ number: 117, isOccupied: false, futureReservations: [
        { guestName: 'Jane Smith', startDate: '2025-01-30', endDate: '2025-02-02' }
      ] },
      { number: 118, isOccupied: true, guest: { name: 'Alice Brown', checkInDate: '2025-01-18', checkOutDate: '2025-01-22' }, futureReservations: [] },
      { number: 119, isOccupied: true, guest: { name: 'John Doe', checkInDate: '2025-01-20', checkOutDate: '2025-01-25' }, futureReservations: [] },
      { number: 120, isOccupied: false, futureReservations: [
        { guestName: 'Jane Smith', startDate: '2025-01-30', endDate: '2025-02-02' }
      ] },
      { number: 121, isOccupied: false, futureReservations: [
        { guestName: 'Jane Smith', startDate: '2025-01-30', endDate: '2025-02-02' }
      ] }, ];
  }
}
