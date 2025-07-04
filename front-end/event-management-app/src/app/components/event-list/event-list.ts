import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-event-list',
  templateUrl: './event-list.html',
  styleUrls: ['./event-list.scss'],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  selectedEvent: Event = this.newEmptyEvent();
  loading = true;
  error = '';

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {
    this.loading = true;
    this.eventService.getEvents().subscribe({
      next: (data) => {
        this.events = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar eventos';
        console.error(err);
        this.loading = false;
      }
    });
  }

  onSubmit() {
    if (this.selectedEvent.id) {
      // Editar
      this.eventService.updateEvent(this.selectedEvent.id, this.selectedEvent).subscribe(() => {
        this.resetForm();
        this.loadEvents();
      });
    } else {
      // Crear
      this.eventService.createEvent(this.selectedEvent).subscribe(() => {
        this.resetForm();
        this.loadEvents();
      });
    }
  }

  editEvent(event: Event) {
    this.selectedEvent = { ...event };
  }

  deleteEvent(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este evento?')) {
      this.eventService.deleteEvent(id).subscribe(() => this.loadEvents());
    }
  }

  resetForm() {
    this.selectedEvent = this.newEmptyEvent();
  }

  private newEmptyEvent(): Event {
    return {
      title: '',
      description: '',
      location: '',
      eventdate: new Date().toISOString().slice(0, 16) // formato yyyy-MM-ddTHH:mm
    };
  }
}
