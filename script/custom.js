var app = new Vue({
    el: '#dnevnik-app',
    data: {
        /*Hardcoded, but want to read from json*/
        meals: [{
            location: '(ročni vnos)',
            datum: '20.5.2018',
            obrok: `pizza`
        }, {
            location: '(ročni vnos)',
            datum: '19.5.2018',
            obrok: `hamburger`
        }, {
            location: '(ročni vnos)',
            datum: '19.5.2018',
            obrok: `pečen krompir, piščanji file`
        }, {
            location: 'FKKT',
            datum: '1.2.2016',
            obrok: `jajčni rezanci v omaki s tartufato,
            zelenjavna kremna juha,
            sestavljena solata`
        }, {
            location: 'FKKT',
            datum: '1.2.2016',
            obrok: `paradižnikova enolončnica z mesnimi cmočki in zelenjavo,
            sestavljena solata,
            sadje, dnevna sladica
            `
        }, {
            location: 'FKKT',
            datum: '1.2.2016',
            obrok: `solatni krožnik s tunininem filejem,
            dnevna juha,
            sestavljena solata            
            `
        }, {
            location: 'FKKT',
            datum: '1.2.2016',
            obrok: `puranji zrezek v omaki s sirom, testenine ali bulgur,
            zelenjavna mineštra,
            sestavljena solata
            `
        }, {
            location: 'FKKT',
            datum: '1.2.2016',
            obrok: `svinjski kotlet na žaru, krompirjevi krhlji in ajvar,
            zelenjavna kremna juha,
            sestavljena solata
            `
        }, {
            location: 'FKKT',
            datum: '1.2.2016',
            obrok: `pečeno piščančje bedro, stročji fižol z gobicami in krompirjevi krhlji,
            zelenjavna kremna juha,
            sestavljena solata`
        }, {
            location: 'FKKT',
            datum: '1.2.2016',
            obrok: `pašta fižol,
            sestavljena solata,
            sadje, dnevna sladica            
            `
        }

        ],
    }
})

var app2 = new Vue({
    el: '#alergen-app',
    data: {
        alergens: [
            {name: 'gluten'}, 
            {name:'laktoza'}
        ]
    }
})