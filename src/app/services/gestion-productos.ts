import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GestionProductos {

  productos: any[] = [];

add(producto:any){
  this.productos.push(producto);
  console.log('Producto agregado:', producto);
}

update(id: number, producto: any) {
  this.productos[id] = producto;
  console.log('Producto actualizado:', producto);
}


getAll(){
  return this.productos;
}

}
