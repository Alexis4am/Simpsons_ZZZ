import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GestionProductos } from '../../services/gestion-productos';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-resgistro-producto',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './resgistro-producto.html',
  styleUrls: ['./resgistro-producto.css'],
})
export class ResgistroProducto implements OnInit {
  producto = { 
    codigo: 'xdr',
    nombre: '',
    stock: 0
  };
  constructor(private gp: GestionProductos, private route: ActivatedRoute, private router: Router) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');     
    if (id !== null) {
      const datos = this.gp.getAll()[Number(id)];
      this.producto = {...datos};
    } 
  }

  guardarProducto() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== null){
      this.gp.update(Number(id), this.producto);
      console.log('Producto actualizado:', this.producto);
      
    }else{
      this.gp.add(this.producto);
      console.log('Producto guardado:', this.producto);

    }

    this.router.navigate(['producto/listado']);
  }
}
