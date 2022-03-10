export function loadRecipes(){
    return [
        {
            id: 1,
            name: 'Arroz com banana e bacon',
            image: 'https://www.theflavorbender.com/wp-content/uploads/2018/03/Chicken-Kottu-Roti-The-Flavor-Bender-Featured-Image-SQ-8-200x200.jpg',
            preparation: [
                {
                    id: 1,
                    description: 'Faça o arroz branco de modo regular'
                },
                {
                    id: 2,
                    description: 'Frite o bacon, até que fique crocante. Retire do fogo e reserve'
                },
                {
                    id: 3,
                    description: 'Frite as bananas na gordura que o bacon deixou na panela, até ficarem bem douradas'
                },
                {
                    id: 4,
                    description: 'Misture o arroz, o bacon, a banana e o queijo parmesão ralado'
                },
                {
                    id: 5,
                    description: 'Se quiser, acrescente 1 colher de manteiga com sal à mistura'
                },
                {
                    id: 6,
                    description: 'Sirva quentinho'
                }
            ],
            time: '30 minutos',
            type: 'Fácil',
            serves: '6 pessoas',
            rate: 2,
            goodWith: [
                {
                    id: 1,
                    recipe: 'Pernil assado'
                },
                {
                    id: 2,
                    recipe: 'Lombo assado'
                },
                {
                    id: 3,
                    recipe: 'Filé mignon grelhado'
                },
                {
                    id: 4,
                    recipe: 'Tender de natal'
                },
                {
                    id: 5,
                    recipe: 'Farofa de castanhas'
                },
                {
                    id: 6,
                    recipe: 'Molho de damasco'
                },
                {
                    id: 7,
                    recipe: 'Salada verde'
                },
            ],
            goodWere: [
                {
                    id: 1,
                    local: 'Almoço aos domingos'
                },
                {
                    id: 2,
                    local: 'Encontros de família'
                },
                {
                    id: 3,
                    local: 'Ocasiões especiais'
                },
                {
                    id: 4,
                    local: 'Receber os amigos'
                },
                {
                    id: 5,
                    local: 'Visitas de última hora'
                },
            ],
            drinksWith: [
                {
                    id: 1,
                    drink: 'Vinho branco seco'
                },
                {
                    id: 2,
                    drink: 'Suco de uva'
                },
                {
                    id: 3,
                    drink: 'Limonada'
                },
            ]
        },
        {
            id: 2,
            name: 'Arroz com milho e ameixa',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdLjTnpapVbb-QmaJwLJntqOF_QaaXD6iF7XKHJKbR4b3lU9kt5uWv5OIw0T_1r4LFvBM&usqp=CAU',
            preparation: [
                {
                    id: 1,
                    description: 'Faça o arroz branco de modo regular'
                },
                {
                    id: 2,
                    description: 'Frite o bacon, até que fique crocante. Retire do fogo e reserve'
                },
                {
                    id: 3,
                    description: 'Misture ao arroz pronto: a manteiga, o queijo ralado, as ameixas, o bacon e o milho'
                },
                {
                    id: 4,
                    description: 'Sirva quentinho'
                }
            ],
            time: '30 minutos',
            type: 'Fácil',
            serves: '6 pessoas',
            rate: 2,
            goodWith: [
                {
                    id: 1,
                    recipe: 'Pernil assado'
                },
                {
                    id: 2,
                    recipe: 'Lombo assado'
                },
                {
                    id: 3,
                    recipe: 'Filé mignon grelhado'
                },
                {
                    id: 4,
                    recipe: 'Tender de natal'
                },
                {
                    id: 5,
                    recipe: 'Farofa de castanhas'
                },
                {
                    id: 6,
                    recipe: 'Molho de damasco'
                },
                {
                    id: 7,
                    recipe: 'Salada verde'
                },
            ],
            goodWere: [
                {
                    id: 1,
                    local: 'Almoço aos domingos'
                },
                {
                    id: 2,
                    local: 'Encontros de família'
                },
                {
                    id: 3,
                    local: 'Ocasiões especiais'
                },
                {
                    id: 4,
                    local: 'Receber os amigos'
                },
                {
                    id: 5,
                    local: 'Visitas de última hora'
                },
            ],
            drinksWith: [
                {
                    id: 1,
                    drink: 'Vinho branco seco'
                },
                {
                    id: 2,
                    drink: 'Suco de uva'
                },
                {
                    id: 3,
                    drink: 'Limonada'
                },
            ]
        }
    ]
}