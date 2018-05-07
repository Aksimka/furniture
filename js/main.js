new Vue({
    el: '#app',
    data: {
        slided:false,
        eng: false,
        content: function(){
            if(this.eng === true){
                return {
                    menu: 'menu',
                    home: 'home',
                    products: 'products',
                    about: 'about',
                    learn: 'learn more',
                    furniture: 'furniture'
                }
            }else{
                return {
                    menu: 'меню',
                    home: 'Главная',
                    products: 'Продукты',
                    about: 'О нас',
                    learn: 'Узнать больше',
                    furniture: 'Интерьер'
                }
            }
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