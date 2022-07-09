const monsters = {
    Emby : {
        position: {
            x: 280,
            y: 325
        },
        image: {
            src: 'embySprite.png'
        },
        frames:{
            max: 4,
            hold: 20
        },
        animate: true,
        name: 'Emby',
        attacks: [attacks.Tackle, attacks.Ember]
    },
    Draggle : {
        position: {
            x: 800,
            y: 100
        },
        image: {
            src: 'draggleSprite.png'
        },
        frames:{
            max: 4,
            hold: 20
        },
        animate: true,
        isEnemy: true,
        name: 'Draggle',
        attacks: [attacks.Tackle, attacks.Ember]
    }

}