import { async, TestBed, inject } from '@angular/core/testing';
import { XHRBackend, Http, BaseRequestOptions, HttpModule, ResponseOptions, Response, ResponseType } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { MyEntitiesService } from './my-entities.service';

describe('MyEntitiesService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ 
        MockBackend, 
        MyEntitiesService,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            }
         }
      ],
      imports:[HttpModule]
    });
    TestBed.compileComponents();
  }));

  it('should have service...', async(() => {
    var service: MyEntitiesService = TestBed.get(MyEntitiesService);    
    expect(service).toBeTruthy();
  }));
  
  it('should get entities...', async(() => {
    let mockBackend: MockBackend = TestBed.get(MockBackend);
    let entService: MyEntitiesService = TestBed.get(MyEntitiesService);
    
    mockBackend.connections.subscribe((connection: MockConnection) => {
      let ent = {
        "serviceResponseStatus": {
          "statusCode": "RC-S013",
          "statusMessage": "Successfully fetching relationships",
          "statusType": "SUCCESS",
          "languageCode": "ENG",
          "traceID": "b17a5921-99cc-479a-82eb-80979e77b596",
          "errorSeverity": "NA",
          "displayOnUI": "N"
        },
        "canAccessRequest": true,
        "userType": "CONSUMER",
        "relationshipList": [{
          "serialNumber": null,
          "rid": 76481510,
          "r2id": null,
          "providerid": 100000489,
          "consumerid": null,
          "leoiid": 123587989,
          "provider": "IM C1",
          "consumer": "--",
          "leoi": "\"Accelerated\" High Yield Income Fund, Ltd.",
          "status": null,
          "isprovidertoleoi": null,
          "endDate": null,
          "canOfferAccess": false,
          "provConsInd": "CONSUMER",
          "leoiOtherName": "--",
          "leoiOtherNameId": null,
          "aliasSearchInd": null,
          "canManageRelationship": null,
          "groupedRelationship": [{
            "serialNumber": 916,
            "rid": 76481510,
            "r2id": 76481540,
            "providerid": 100000489,
            "consumerid": 100000619,
            "leoiid": 123587989,
            "provider": "IM C1",
            "consumer": "State Street Global Advisors Limited",
            "leoi": "\"Accelerated\" High Yield Income Fund, Ltd.",
            "status": "Active",
            "isprovidertoleoi": null,
            "endDate": null,
            "canOfferAccess": false,
            "provConsInd": "CONSUMER",
            "leoiOtherName": "--",
            "leoiOtherNameId": null,
            "aliasSearchInd": null,
            "canManageRelationship": true,
            "groupedRelationship": null,
            "services": "Public KYC Premium",
            "country": "--",
            "isNew": false,
            "serviceCd": "PKYC_PREMIUM",
            "sourceTypeCd": "PROVIDER",
            "canInitiateServiceRequest": true
          },
          {
            "serialNumber": 917,
            "rid": 76481510,
            "r2id": 76481540,
            "providerid": 100000489,
            "consumerid": 100000619,
            "leoiid": 123587989,
            "provider": "IM C1",
            "consumer": "State Street Global Advisors Limited",
            "leoi": "\"Accelerated\" High Yield Income Fund, Ltd.",
            "status": "Active",
            "isprovidertoleoi": null,
            "endDate": null,
            "canOfferAccess": false,
            "provConsInd": "CONSUMER",
            "leoiOtherName": "--",
            "leoiOtherNameId": null,
            "aliasSearchInd": null,
            "canManageRelationship": true,
            "groupedRelationship": null,
            "services": "Public KYC",
            "country": "--",
            "isNew": false,
            "serviceCd": "PKYC",
            "sourceTypeCd": "PROVIDER",
            "canInitiateServiceRequest": true
          },
          {
            "serialNumber": 918,
            "rid": 76481510,
            "r2id": 76481540,
            "providerid": 100000489,
            "consumerid": 100000619,
            "leoiid": 123587989,
            "provider": "IM C1",
            "consumer": "State Street Global Advisors Limited",
            "leoi": "\"Accelerated\" High Yield Income Fund, Ltd.",
            "status": "Active",
            "isprovidertoleoi": null,
            "endDate": null,
            "canOfferAccess": false,
            "provConsInd": "CONSUMER",
            "leoiOtherName": "--",
            "leoiOtherNameId": null,
            "aliasSearchInd": null,
            "canManageRelationship": true,
            "groupedRelationship": null,
            "services": "Base Relationship",
            "country": "--",
            "isNew": false,
            "serviceCd": "BASE_REL",
            "sourceTypeCd": "PROVIDER",
            "canInitiateServiceRequest": true
          }],
          "services": "--",
          "country": "--",
          "isNew": null,
          "serviceCd": null,
          "sourceTypeCd": null,
          "canInitiateServiceRequest": false
        }]
      };
      
      let options = new ResponseOptions({
        body: ent
      });
      connection.mockRespond(new Response(options));
    });
        
   const json = {
        'status' : null,
        'creationDate' : {
          'dateFormat': 'dd-MMM-yyyy'
        },
        'toDate': {
          'dateFormat': 'dd-MMM-yyyy'
        },
        'displayOnlyNew': null
      };

    const payload = JSON.stringify(json);     
        
    entService.getEntities(payload).subscribe(
      (data) => {
        expect(data.length).toBe(1);
        expect(data[0].groupedRelationship.length).toBe(3);
        expect(data[0].leoiid).toBe(123587989);
      });
    
  }));
  
  it('should fail get entities...', async(() => {
    let mockBackend: MockBackend = TestBed.get(MockBackend);
    let entService: MyEntitiesService = TestBed.get(MyEntitiesService);
    
    mockBackend.connections.subscribe((connection: MockConnection) => {
      let err = {'status': 404, 'statusText':'not found', 'message':'error'};
      let options = new ResponseOptions({
        body: err,
        status: 404,
      });
      connection.mockError(new Error(JSON.stringify(err)));
    });
        
   const json = {
        'status' : null,
        'creationDate' : {
          'dateFormat': 'dd-MMM-yyyy'
        },
        'toDate': {
          'dateFormat': 'dd-MMM-yyyy'
        },
        'displayOnlyNew': null
      };

    const payload = JSON.stringify(json);     
        
    entService.getEntities(payload).subscribe(
      (data) => {
        expect(data.length).toBe(1);
      },
      (error) => {
        expect(error).toBeTruthy();
        expect(JSON.parse(error).status).toBe(404);
      }
    );
        
  }));
  
/*it('should fail get entities with if...', async(() => {
    let mockBackend: MockBackend = TestBed.get(MockBackend);
    let entService: MyEntitiesService = TestBed.get(MyEntitiesService);
    
    mockBackend.connections.subscribe((connection: MockConnection) => {
      let err = {'statusText':'not found', 'message':'error'};
      let options = new ResponseOptions({
        body: err,
        status: 404,
      });
      connection.mockError(new Response(err));
    });
        
   const json = {
        'status' : null,
        'creationDate' : {
          'dateFormat': 'dd-MMM-yyyy'
        },
        'toDate': {
          'dateFormat': 'dd-MMM-yyyy'
        },
        'displayOnlyNew': null
      };

    const payload = JSON.stringify(json);     
        
    entService.getEntities(payload).subscribe(
      (data) => {
        expect(data.length).toBe(1);
      },
      (error) => {
        let res = new Response(new ResponseOptions(error));
        expect(res).toBeTruthy();
      }
    );
    
  }));*/
  

});
