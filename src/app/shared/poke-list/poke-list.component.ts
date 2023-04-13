import { Component, HostListener } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { Digimon, DigimonApiService } from 'src/app/service/digimon-api.service';
import { PokeAPIService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {
  

  constructor(
    private pokeApiService: PokeAPIService,
    private digimonApiService: DigimonApiService
  ) {
  }
  private setAllPokemons: any = [];
  public getAllPokemons: any = [];
  public nextPokemon: string = "";
  digimons: any[] | undefined;
  newDigimonName: string | null = null;
  selectedDigimon: any | undefined; // Variable para guardar el digimon seleccionado
  newName: string | undefined; // Variable para guardar el nuevo nombre del digimon


  ngOnInit(): void {
    this.twoApis();
  }

  getPokemons() {
    this.pokeApiService.apiListAllPokemons().subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = res.results
        this.nextPokemon = res.next;
      }
    );
  }
  getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });


    this.getAllPokemons = filter;
  }

  twoApis() {
    // Combina las peticiones a las APIs de Pokemon y Digimon
    forkJoin([
      this.pokeApiService.apiListAllPokemons(),
      this.digimonApiService.getDigimons()
    ]).pipe(
      map(([pokemonResponse, digimonResponse]) => {
        // Obtén los resultados de las peticiones
        this.getAllPokemons = pokemonResponse.results;
        this.digimons = digimonResponse;
        debugger;
      })
    ).subscribe();
  }

  onSubmit() {
    // Validar si se ingresó un nombre de digimon
    if (this.newDigimonName && this.newDigimonName.trim() !== '') { // Validar si newDigimonName no es undefined antes de acceder a su propiedad trim()
      // Crear un nuevo digimon con el nombre ingresado
      const newDigimon = { name: this.newDigimonName , image: 'https://via.placeholder.com/300'};

      // Agregar el nuevo digimon al arreglo de digimons
      this.digimons?.push(newDigimon);

      // Limpiar el campo del nombre del nuevo digimon
      this.newDigimonName = null; // Cambio en la limpieza del campo

      alert('Digimon agregado. Se ha añadido a la lista de abajo.');
    }
  }

  deleteDigimon(digimon: any): void {
    // Simular el borrado del digimon solo de la lista digimons
    this.digimons = this.digimons?.filter(d => d.id !== digimon.id);
  }

   // Método para abrir el cuadro de diálogo alert y solicitar el nuevo nombre del digimon
   openUpdateAlert(digimon: any): void {
    this.selectedDigimon = digimon; // Guardar el digimon seleccionado
    this.newName = ''; // Reiniciar el valor del nuevo nombre
    const result = prompt('Actualizar Nombre', 'Ingrese el nuevo nombre'); // Mostrar el cuadro de diálogo alert
    if (result !== null && result.trim() !== '') {
      this.newName = result.trim(); // Guardar el nuevo nombre
      this.updateDigimonName(this.newName); // Llamar al método para actualizar el nombre del digimon
    }
  }

  // Método para actualizar el nombre del digimon
  updateDigimonName(newName: string): void {
    if (this.selectedDigimon) {
      this.selectedDigimon.name = newName; // Actualizar el nombre del digimon
  
      // Actualizar la lista de digimons en el template
      const index = this.digimons?.findIndex(digimon => digimon.id === this.selectedDigimon?.id);
      if (index !== undefined && index !== -1 && this.digimons != undefined) {
        this.digimons[index].name = newName;
      }
    }
  }
  
}
