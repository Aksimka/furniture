function lang() {
    if (this.eng === true) {
        return {
            menu: 'menu',
            home: 'home',
            products: 'products',
            about: 'about',
            learn: 'learn more',
            furniture: 'furniture',
            decor: 'decor',
            vids: [
                {
                    image: '../../images/vid1.png',
                    desc: 'Innovative design'
                },
                {
                    image: '../../images/vid2.png',
                    desc: 'High-level Skills'
                },
                {
                    image: '../../images/vid3.png',
                    desc: 'Quality products'
                }
            ]
        }
    } else {
        return {
            menu: 'меню',
            home: 'Главная',
            products: 'Продукты',
            about: 'О нас',
            learn: 'Узнать больше',
            furniture: 'Интерьер',
            decor: 'Декор',
            vids: [
                {
                    image: '/../images/vid1.png',
                    desc: 'Инновационный дизайн'
                },
                {
                    image: '/../images/vid2.png',
                    desc: 'Лучшие профессионалы'
                },
                {
                    image: '/../images/vid3.png',
                    desc: 'Качественный продукт'
                }
            ]
        }
    }
}

function backs(i){

}

new Vue({
    el: '#app',
    data: {
        slided: false,
        eng: true,
        content: lang,
        images: {
            furniture: 'images/furniture.png',
            decor: 'images/decor.jpg'
        }
    },
    methods: {
        btnAni: function(){
            var item = document.getElementsByClassName('header-content__floatingtext');
            if(this.slided === false){
                item[0].style.transform = 'translateX(300px) rotate(90deg) scale(2)';
                item[0].style.opacity = 0;
                this.slided = true;
            }else{
                item[0].style.transform = 'translateX(0px) rotate(90deg) scale(1)';
                item[0].style.opacity = 0.3;
                this.slided = false;
            }
        }
    }
});