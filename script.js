class Counter {
    constructor(config) {
        console.log(config);
        /**
         * @param const exampleConfig = {
         *    selector: '.achievements__card--number.years',
         *    countEnd: 31,
         *    steps: 1,
         *    intervalMS: 100
         *    }
         * 
         */
        // define properties
        this.selector = config.selector;
        this.currentCount = 0;
        this.countEnd = config.countEnd;
        this.steps = config.steps;
        this.intervalMS = config.intervalMS;
        this.element  = null;

        // initialize counter
        this.init();
    }

    getElement() {
        // select element
        this.element = document.querySelector(this.selector);
    }

    startCounter() {
        this.element.innerHTML = this.currentCount;
        setTimeout(() => {
            if (this.currentCount < this.countEnd) {
                this.currentCount += this.steps;
                this.startCounter();
            }
        }, this.intervalMS)
    }

    init() {
        console.log('init');
        this.getElement();
        this.startCounter();
    }
}

const countriesElement = {
    selector: '.achievements__card--number.countries',
    countEnd: 23,
    steps: 1,
    intervalMS: 50,
}

const customersElement = {
    selector: '.achievements__card--number.customers',
    countEnd: 24690,
    steps: 50,
    intervalMS: 1,
}

const yearsElement = {
    selector: '.achievements__card--number.years',
    countEnd: 31,
    steps: 1,
    intervalMS: 100,
}

const CountriesCounter = new Counter(countriesElement);
const CustomersCounter = new Counter(customersElement);
const YearsCounter = new Counter(yearsElement);


