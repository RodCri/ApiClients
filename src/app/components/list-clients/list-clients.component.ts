import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { Client, Persona } from './../../model/client';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit{

  clients: Persona[] = [];

  constructor(private clientService: ClientsService){  }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(client =>{
      this.clients = client.personas.sort((a,b) => a.nombre.toLowerCase() < b.nombre.toLowerCase() ? -1 : 1)
    })
  }

  orderDesc(){
    this.clients.sort((a,b) => a.nombre.toLowerCase() < b.nombre.toLowerCase() ? 1 : -1)
  }

  orderAsc(){
    this.clients.sort((a,b) => a.nombre.toLowerCase() < b.nombre.toLowerCase() ? -1 : 1)
  }
}
