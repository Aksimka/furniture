function lang() {
    if (this.eng === true) {
        return {
            header_nav_items: ['menu','home','products'],
            about: 'about',
            learn: 'learn more',
            furniture: 'furniture',
            decor: 'decor',
            vids: [
                {
                    image: 'images/vid1.png',
                    desc: 'Innovative design'
                },
                {
                    image: 'images/vid2.png',
                    desc: 'High-level Skills'
                },
                {
                    image: 'images/vid3.png',
                    desc: 'Quality products'
                }
            ]
        }
    } else {
        return {
            header_nav_items: ['меню','главная','продукты'],
            about: 'О нас',
            learn: 'Узнать больше',
            furniture: 'Интерьер',
            decor: 'Декор',
            vids: [
                {
                    image: 'images/vid1.png',
                    desc: 'Инновационный дизайн'
                },
                {
                    image: 'images/vid2.png',
                    desc: 'Лучшие профессионалы'
                },
                {
                    image: 'images/vid3.png',
                    desc: 'Качественный продукт'
                }
            ]
        }
    }
}