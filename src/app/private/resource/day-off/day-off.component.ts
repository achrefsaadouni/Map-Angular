import {Component, OnInit, ViewChild} from '@angular/core';
import {Options} from "fullcalendar";
import {CalendarComponent} from "ng-fullcalendar";
import {Resource} from "../../Models/Resource";
import {ResourceService} from "../resource/service/resource.service";
import {ActivatedRoute} from "@angular/router";
import {DayOffService} from "../service/day-off.service";

@Component({
  selector: 'app-day-off',
  templateUrl: './day-off.component.html',
  styleUrls: ['./day-off.component.css'],
    providers:[ResourceService,DayOffService]
})
export class DayOffComponent implements OnInit {
    calendarOptions: Options;
    displayEvent: any;
    events = null;
    @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
    id: number;
    ObjectRessource:Resource;
    constructor(private ServiceResource: ResourceService,private route:ActivatedRoute,
                private dayOffService: DayOffService) {

        this.route.params.subscribe(params=>this.id = params.id);
        // this.id = this.route.snapshot.params['id'];

    }


    ngOnInit() {



        this.ServiceResource.GetResourceById(this.id).subscribe(data=> {
            this.ObjectRessource=data;
            console.log(data)});

        this.calendarOptions = {
            editable: true,
            contentHeight:400,
            eventLimit: false,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listMonth'
            },
            events: []
        };

        this.dayOffService.getDayOff(this.id).subscribe(data => {
            this.events = data;
            console.log(data);
        });


    }

    clickButton(model: any) {
        this.displayEvent = model;
    }
    dayClick(model: any) {
        console.log(model);
    }
    eventClick(model: any) {
        model = {
            event: {
                id: model.event.id,
                start: model.event.start,
                end: model.event.end,
                title: model.event.subject,
                // other params
            },
            duration: {}
        }
        this.displayEvent = model;
    }
    updateEvent(model: any) {
        model = {
            event: {
                id: model.event.id,
                start: model.event.start,
                end: model.event.end,
                title: model.event.subject,
                // other params
            },
            duration: {
                _data: model.duration._data
            }
        }
        this.displayEvent = model;

    }

    updateRessource(ress) {


        console.log(ress);
       // this.ServiceResource.updateRessource(ress.id,ress).subscribe(data => console.log('ok'));



    }

}
