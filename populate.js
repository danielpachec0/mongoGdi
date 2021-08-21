db.jogador.insertMany([{
    nome: "Art",
    pais: "Brasil",
    funcao: "awp",
    idade:22,
    CPF: "1"
},
{
    nome: "Yuri",
    pais: "Brasil",
    funcao: "awp",
    idade:22,
    CPF: "2"
},
{
    nome: "Vini",
    pais: "Brasil",
    funcao: "awp",
    idade:22,
    CPF: "3"
},
{
    nome: "Kacerato",
    pais: "Brasil",
    funcao: "awp",
    idade:22,
    CPF: "4"
},
{
    nome: "Honda",
    pais: "Brasil",
    funcao: "rifler",
    idade:17,
    CPF: "5"
},
{
    nome: "Stewie",
    pais: "Brasil",
    funcao: "awp",
    idade:22,
    CPF: "6"
},
{
    nome: "Fallen",
    pais: "Brasil",
    funcao: "awp",
    idade:22,
    CPF: "7"
},
{
    nome: "Naf",
    pais: "Brasil",
    funcao: "awp",
    idade:22,
    CPF: "8"
},
{
    nome: "Grim",
    pais: "Brasil",
    funcao: "awp",
    idade:22,
    CPF: "9"
},
{
    nome: "Elige",
    pais: "Brasil",
    funcao: "awp",
    idade:22,
    CPF: "10"
},
{
    nome: "kNgV-",
    pais: "Brasil",
    funcao: "awp",
    idade:22,
    CPF: "11"
},
{
    nome: "HEN1",
    pais: "Brasil",
    funcao: "awp",
    idade:22,
    CPF: "12"
},
{
    nome: "LUCAS1",
    pais: "Brasil",
    funcao: "awp",
    idade:22,
    CPF: "13"
},
{
    nome: "vsm",
    pais: "Brasil",
    funcao: "awp",
    idade:22,
    CPF: "14"
},
{
    nome: "trk",
    pais: "Brasil",
    funcao: "awp",
    idade:22,
    CPF: "15"
},
{
    nome: "leo_drk",
    pais: "Brasil",
    funcao: "awp",
    idade:22,
    CPF: "16"
},
{
    nome: "TACO",
    pais: "Brasil",
    funcao: "awp",
    idade:22,
    CPF: "17"
},
{
    nome: "felps",
    pais: "Brasil",
    funcao: "awp",
    idade:22,
    CPF: "18"
},
{
    nome: "latto",
    pais: "Brasil",
    funcao: "awp",
    idade:22,
    CPF: "19"
},
{
    nome: "bartin",
    pais: "Brasil",
    funcao: "awp",
    idade:22,
    CPF: "20"
},
{
    nome: "dumau",
    pais: "Brasil",
    funcao: "awp",
    idade:22,
    CPF: "21"
},
{
    nome: "anna",
    pais: "Brasil",
    funcao: "igl",
    idade:24,
    CPF: "22"
},
{
    nome: "pan",
    pais: "Brasil",
    funcao: "awp",
    idade:22,
    CPF: "23"
},
{
    nome: "cAmyy",
    pais: "Brasil",
    funcao: "lurker",
    idade:17,
    CPF: "24"
},
{
    nome: "izaa",
    pais: "Brasil",
    funcao: "suporte",
    idade:18,
    CPF: "25"
},
{
    nome: "gabi",
    pais: "Brasil",
    funcao: "rifler",
    idade:22,
    CPF: "26"
},
{
    nome: "elaine",
    pais: "Brasil",
    funcao: "rifler",
    idade:22,
    CPF: "27"
},
{
    nome: "rebeca",
    pais: "Brasil",
    funcao: "rifler",
    idade:22,
    CPF: "28"
},
{
    nome: "lethy",
    pais: "Brasil",
    funcao: "rifler",
    idade:22,
    CPF: "29"
},
{
    nome: "naty",
    pais: "Brasil",
    funcao: "rifler",
    idade:22,
    CPF: "30"
},
{
    nome: "bizinha",
    pais: "Brasil",
    funcao: "rifler",
    idade:22,
    CPF: "30"

}])

db.time.insertOne(
    {
        nome: "Furia",
        pais: "Brasil",
        participacoes: 10,
        vitorias: 5,
        jogadores: [
            db.jogador.find({nome: "Art"})._id,
            db.jogador.find({nome: "Yuri"})._id,
            db.jogador.find({nome: "Vini"})._id,
            db.jogador.find({nome: "Kacerato"})._id,
            db.jogador.find({nome: "Honda"})._id
        ]
    }
)
db.time.insertOne(
    {
        nome: "Godsent",
        pais: "Suecia",
        participacoes: 12,
        vitorias: 3,
        jogadores: [
            db.jogador.find({nome: "TACO"})._id,
            db.jogador.find({nome: "felps"})._id,
            db.jogador.find({nome: "latto"})._id,
            db.jogador.find({nome: "bartin"})._id,
            db.jogador.find({nome: "dumau"})._id
        ]
    }
)
db.time.insertOne(
    {
        nome: "Pain Gaming",
        pais: "Brasil",
        participacoes: 6,
        vitorias: 2,
        jogadores: [
            db.jogador.find({nome: "cAmyy"})._id,
            db.jogador.find({nome: "izaa"})._id,
            db.jogador.find({nome: "pan"})._id,
            db.jogador.find({nome: "anna"})._id,
            db.jogador.find({nome: "bizinha"})._id
        ]
    }
)
db.time.insertOne(
    {
        nome: "O Plano",
        pais: "Brasil",
        participacoes: 7,
        vitorias: 5,
        jogadores: [
            db.jogador.find({nome: "vsm"})._id,
            db.jogador.find({nome: "leo_drk"})._id,
            db.jogador.find({nome: "kNgV-"})._id,
            db.jogador.find({nome: "trk"})._id,
            db.jogador.find({nome: "LUCAS1"})._id,
            db.jogador.find({nome: "HEN1"})._id
        ]
    }
)
db.time.insertOne(
    {
        nome: "Team Liquid",
        pais: "usa",
        participacoes: 17,
        vitorias: 7,
        jogadores: [
            db.jogador.find({nome: "Fallen"})._id,
            db.jogador.find({nome: "Elige"})._id,
            db.jogador.find({nome: "Stewie"})._id,
            db.jogador.find({nome: "Grim"})._id,
            db.jogador.find({nome: "Naf"})._id
        ]
    }
)
db.time.insertOne(
    {
        nome: "Rainhas da bala",
        pais: "Brasil",
        participacoes: 17,
        vitorias: 7,
        jogadores: [
            db.jogador.find({nome: "gabi"})._id,
            db.jogador.find({nome: "rebeca"})._id,
            db.jogador.find({nome: "lethy"})._id,
            db.jogador.find({nome: "naty"})._id,
            db.jogador.find({nome: "elaine"})._id
        ]
    }
)
db.campeonato.insertOne(
    {
        Nome: "teste",
        dt_inicio: Date.now(),
        dt_termino: Date.now(),
        juizes:[
            {nome: "j1", cpf: "123", idade: 35},
            {nome: "j2", cpf: "321", idade: 42}
        ],
        premiacao: 1000.00,
        times: [
            db.time.find({nome: "Team Liquid"})._id,
            db.time.find({nome: "Furia"})._id
        ]
    }
)
db.campeonato.insertOne(
    {
        Nome: "MAJOR 2021",
        dt_inicio: (Date.now() - 259200000),
        dt_termino: Date.now(),
        juizes:[
            {nome: "j1", cpf: "123", idade: 35},
            {nome: "j2", cpf: "321", idade: 42}
        ],
        premiacao: 1000000.00,
        times: [
            db.time.find({nome: "Godsent"})._id,
            db.time.find({nome: "O Plano"})._id,
            db.time.find({nome: "Furia"})._id
        ]
    }
)
db.campeonato.insertOne(
    {
        Nome: "Campeonato TPM",
        dt_inicio: (Date.now() - 172800000),
        dt_termino: Date.now(),
        juizes:[
            {nome: "j1", cpf: "123", idade: 35},
            {nome: "j2", cpf: "321", idade: 42}
        ],
        times: [
            db.time.find({nome: "Team Liquid"})._id,
            db.time.find({nome: "Furia"})._id,
            db.time.find({nome: "O Plano"})._id,
            db.time.find({nome: "Godsent"})._id
        ]
    }
)
db.campeonato.insertOne(
    {
        Nome: "teste",
        dt_inicio: (Date.now() - 86400000),
        dt_termino: Date.now(),
        juizes:[
            {nome: "j1", cpf: "123", idade: 35},
            {nome: "j2", cpf: "321", idade: 42}
        ],
        premiacao: 10000.00,
        times: [
            db.time.find({nome: "Godsent"})._id,
            db.time.find({nome: "Furia"})._id,
            db.time.find({nome: "Team Liquid"})._id
        ]
    }
)
db.campeonato.insertOne(
    {
        Nome: "Campeonato Brasileiro CSGO 2019",
        dt_inicio: (Date.now() - 86400000),
        dt_termino: Date.now(),
        juizes:[
            {nome: "j1", cpf: "123", idade: 35},
            {nome: "j2", cpf: "321", idade: 42}
        ],
        premiacao: 1000.00,
        times: [
            db.time.find({nome: "Pain Gaming"})._id,
            db.time.find({nome: "Furia"})._id,
            db.time.find({nome: "O Plano"})._id
        ]
    }
)
db.campeonato.insertOne(
    {
        Nome: "Campeonato Brasileiro Feminino 2020",
        dt_inicio: (Date.now() - 86400000),
        dt_termino: Date.now(),
        juizes:[
            {nome: "j1", cpf: "123", idade: 35},
            {nome: "j2", cpf: "321", idade: 42}
        ],
        premiacao: 1000.00,
        times: [
            db.time.find({nome: "Pain Gaming"})._id,
            db.time.find({nome: "Rainhas da bala"})._id
        ]
    }
);
        
