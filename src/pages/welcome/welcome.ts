import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html',
})
export class WelcomePage {
    auth: any;
    slideIndex: number;
    // -1 to account for zero
    count = 20;
    @ViewChild(Slides) slides: Slides;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.count = this.count - 1;

        let counter = setInterval(() => {
            if ( this.count >= 1 ) {
                this.count = this.count - 1;
            } else {
                // Unlock
                this.slides.lockSwipeToNext(false);
                // Next slide
                this.slides.slideTo(1);
                // Clear
                clearInterval(counter);
            }
        }, 1000);
    }

    slideChanged() {
        let currentIndex = this.slides.getActiveIndex();
        this.slideIndex = currentIndex;
    }

    ionViewDidLoad() {
        this.slides.lockSwipeToNext(true);
        this.slides.effect = "fade";
    }

    continue() {
        // if(this._auth.authenticated) {
        //
        //     this.utils.openPage(Profile);
        // } else {
        //     this.utils.openPage(Landing);
        // }
    }

}

