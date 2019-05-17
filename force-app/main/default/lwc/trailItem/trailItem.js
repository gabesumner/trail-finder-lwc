import { LightningElement, api, track } from 'lwc';

export default class TrailItem extends LightningElement {
    @api
    get trail() {
        return this.title;
    }    
    set trail(value) {
        this.id = value.Id;
        this.title = value.Title;
        this.description = value.Description;
        this.image = value.Img;
        this.points = value.Points;
    }

    @track id;
    @track title;
    @track description;
    @track image;
    @track points;
    @track selected = false;

    get wrapperClass() {
        if (this.selected === true) {
            return 'hide'
        } 
        return '';
    }

    clickHandler() {
        const selectedEvent = new CustomEvent('selected', { detail: this.id });
        this.dispatchEvent(selectedEvent);
        console.log('Clicked trailItem: ' + this.id);
    }
}