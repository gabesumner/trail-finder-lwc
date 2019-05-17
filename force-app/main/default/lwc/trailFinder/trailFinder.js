import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class TrailFinder extends LightningElement {

    @track trails = [
        {
            Id: 1,
            Title: 'One-on-One Meetings',
            Description: 'Learn tips for having productive one-on-one meetings with your direct reports.',
            Points: '300 POINTS',
            Img: 'https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/one-on-one-meetings/6f7cb8eefd86b70877cec7301737c269_badge.png'
        },
        {
            Id: 2,
            Title: 'Business Value of Equality',
            Description: 'Understand the societal and business value of having a diverse, inclusive workforce.',
            Points: '300 POINTS',
            Img: 'https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/workplace_equality_diversity_and_inclusion/91488aee47b2dff1a4c5f559d8e1dbb7_badge.png'
        },
        {
            Id: 3,
            Title: 'Advanced Formulas',
            Description: 'Learn how to write clean, easy-to-understand formulas for complex use cases.',
            Points: '3,100 POINTS',
            Img: 'https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/advanced_formulas/6f471d553d3f3f1efaf6e25b0761cb39_badge.png'
        },
        {
            Id: 4,
            Title: 'Data Management',
            Description: 'Learn how to import and export data in Salesforce.',
            Points: '550 POINTS',
            Img: 'https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/lex_implementation_data_management/4e8c947ac2967be79e0ca2722dcd491f_badge.png',
        },
        {
            Id: 5,
            Title: 'Formulas & Validations',
            Description: 'Tailor your apps without writing code by using point-and-click logic.',
            Points: '1,500 POINTS',
            Img: 'https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/point_click_business_logic/d685dcb20e493c1bd3aac9d20ffac6e6_badge.png',
        },
        {
            Id: 6,
            Title: 'Governance Basics',
            Description: 'Learn the Salesforce approach to managing technology projects and teams.',
            Points: '300 POINTS',
            Img: 'https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/governance-basics/3c4f80375335c20b92fca8b01bfb05e6_badge.png'
        },                        
    ];

    clickHandler(event) {
        const selectedId = event.detail;
        this.trails.splice(selectedId - 1, 1);
        console.log('Clicked trailFinder: ' + selectedId);

        const toastEvent = new ShowToastEvent({
            title: 'Trail Recommended',
            variant: 'success',
        });
        this.dispatchEvent(toastEvent);        
    }
}