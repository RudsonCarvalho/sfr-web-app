export class Constants {

    public debugMode : boolean = true;

    public cpfMask: string;
    public cnpjMask: string;
    public cellPhoneMask: string;
    public phoneMask: string;
    public cepMask: string;
    public valueMask: string;
    public cnaeMask: string;        
    public dateMask: any;

    public currencies: any;

    public sfrApp : any = {
        key:""
    };

    public imagesPath : string = "assets/imgs";

    constructor() {

        this.cpfMask = '###.###.###-##';
        this.cnpjMask = '##.###.###/####-##';
        this.cellPhoneMask = '(##) # ####-####';
        this.phoneMask = '(##) ####-####';
        this.cepMask = '#####-###';
        this.valueMask = '###.###.###.###.###,##';
        this.cnaeMask = '####-#/##';
        this.dateMask = '##/##/####';

        this.currencies = [
            {
              img: this.imagesPath + '/flags/Brazil.png',
              name:'Real Brasileiro',
              country: "Brasil",
              id:'BRL',
              symbol:'R$'
            }, {
              img: this.imagesPath + '/flags/USA.png',
              name:'Dólar Americano',
              country: "Estados Unidos",
              id:'USD',
              symbol:'$'
            }, {
              img: this.imagesPath + '/flags/UnitedEurope.png',
              name:'Euro',
              country : [ "Alemanha", "Áustria", "Bélgica", "Chipre", "Eslováquia",
              "Eslovénia", "Espanha", "Estónia", "Finlândia", "França", "Grécia",
               "Irlanda", "Itália", "Letónia", "Lituânia", "Luxemburgo", "Malta",
               "Países Baixos" , "Portugal"],
              id:'EUR',
              symbol:'€'
            } , {
              img: this.imagesPath + '/flags/UnitedKingdom.png',
              name:'Libra Esterlina',
              country: "Reino Unido",
              id:'GBP',
              symbol:'£'
            } , {
              img: this.imagesPath + '/flags/Bangladesh.png',
              name:'Bangladesh Taka',
              country:'Bangladesh',
              id:'BDT',
              symbol:'৳'
            } , {
              img: this.imagesPath + '/flags/Rep_Tcheca.png',
              name:'Coroa Checa',
              country: 'República Tcheca',
              id:'CZK',
              symbol:'Kč'
            } , {
              img: this.imagesPath + '/flags/Dinamarca.png',
              name:'Coroa Dinamarquesa',
              country: ['Dinamarca','Groenlândia'],
              id:'DKK',
              symbol:'kr'
            } , {
              img: this.imagesPath + '/flags/Noruega.png',
              name:'Coroa Norueguesa',
              country: 'Noruega',
              id:'NOK',
              symbol:'kr'
            } , {
              img: this.imagesPath + '/flags/Suécia.png',
              name:'Coroa Sueca',
              country: 'Suécia',
              id:'SEK',
              symbol:'kr'
            } , {
              img: this.imagesPath + '/flags/UnitedAran.png',
              name:'Dirham dos Emirados Árabes Unidos',
              country:'Emirados Árabes Unidos',
              id:'AED',
              symbol:'د.إ'
            } , {
              img: this.imagesPath + '/flags/Australia.png',
              name:'Dólar Australiano',
              country:'Austrália',
              id:'AUD',
              symbol:'$'
            } , {
              img: this.imagesPath + '/flags/Canada.png',
              name:'Dólar Canadense',
              country:'Canadá',
              id:'CAD',
              symbol:'$'
            }
          ];
    }
}