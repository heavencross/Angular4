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
  
  it('should would..', () => {
    component.ngOnInit();
    expect(component.entities).not.toBeDefined();
    expect(component.loading).toBe(true);
  });
  
  it('on select..', () => {
    let entity = {name:'name', id: 12345};
    component.onSelect(entity);
    expect(component.selectedEntity).toBe(entity);
  });
  
  it('on page change..', () => {
    let mockEvent = new Event('click');
    component.pageChanged(mockEvent);
    expect(console.log).toContain('Page changed to:')
  });
  
  it('on row toggle..', () => {
    let mockEvent = new Event('click');    
    let icon = [true];
    component.rowToggle(mockEvent, 0);
    expect(icon[0]).not.toBe(false);
  });

  
  it('on set page...', () => {
    let pno = 10;
    component.setPage(pno);
    expect(component.currentPage).toBe(10);
  });
  
});
