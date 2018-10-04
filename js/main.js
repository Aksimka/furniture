new Vue({
    el: '#app',
    data: {
        slided: false,
        eng: true,
        titleSite: 'Wooder',
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