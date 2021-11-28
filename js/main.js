const app = new Vue({
    el: "#root",
    data: {
        items: [
            {
                src: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                src: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.'
            },
            {
                src: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                src: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
            },
            {
                src: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
            }
        ],
        currentImg: 0,
    },
    methods: {
        nextImg: function () {
            if (this.currentImg == this.items.length - 1) {
                this.currentImg = 0;
            } else {
                this.currentImg++;
            }
        },

        prevImg: function () {
            if (this.currentImg == 0) {
                this.currentImg = this.items.length - 1;
            } else {
                this.currentImg--;
            }
        },
        setActiveClass: function (i) {
            if (i == this.currentImg) {
                return "active";
            } else {
                return "";
            }
        },
        activeItem: function (i) {
            this.currentImg = i;
        },
    },
});