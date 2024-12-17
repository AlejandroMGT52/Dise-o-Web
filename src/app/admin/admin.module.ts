import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ClienteComponent } from './components/cliente/cliente.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LayoutComponent } from './layout/layout.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { CategoriaService } from './inventario/services/categoria.service';
import { TableModule } from 'primeng/table';
import { InventarioModule } from './inventario/inventario.module'; // Importación correcta del InventarioModule
import { ProductoService } from './inventario/services/producto.service';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { ListaPedidoComponent } from './pedido/components/lista-pedido/lista-pedido.component';

@NgModule({
  declarations: [
    ClienteComponent,
    PerfilComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppLayoutModule,
    TableModule,
    InventarioModule,  // Este módulo ahora exporta CategoriaComponent
    CardModule,
    ImageModule,
    ButtonModule,
    ListaPedidoComponent
  ],
  providers: [
    CategoriaService,
    ProductoService
  ]
})
export class AdminModule {}
