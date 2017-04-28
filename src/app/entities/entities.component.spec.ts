import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesComponent } from './entities.component';
import { CustomMaterialModules } from './../custommaterial.modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { EntitiesFilterPipe } from './../entities-filter.pipe';
import { FormsModule } from '@angular/forms';
import { MyEntitiesService } from './my-entities.service';

describe('EntitiesComponent', () => {
  let component: EntitiesComponent;
  let fixture: ComponentFixture<EntitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitiesComponent, EntitiesFilterPipe ],
      imports: [FormsModule, CustomMaterialModules, BrowserAnimationsModule, PaginationModule, NgxPaginationModule],
      providers: [MyEntitiesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
