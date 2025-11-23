import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistroProducto } from './resgistro-producto';
import { FormsModule } from '@angular/forms';

describe('ResgistroProducto', () => {
  let component: ResgistroProducto;
  let fixture: ComponentFixture<ResgistroProducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResgistroProducto, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResgistroProducto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
