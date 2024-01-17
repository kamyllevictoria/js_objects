class Npc{
    static alert = false

    
    //parametros de energy e alert
    constructor(energy){
        this.energy = energy;
    }
    //função para exibir as informações de energia e alerta
    info(){
        console.log(`Energy: ${this.energy}`);
        console.log(`Alert: ${(Npc.alert? "Yes" : "No")}`);
        console.log('-------');
    }

    static setAlert(){
        Npc.alert = true
    }
    //metodo faz parte da classe e nao do objeto!
}

const npc1 = new Npc(100)
const npc2 = new Npc(200)
const npc3 = new Npc(300)

Npc.alert = true

npc1.info()
npc2.info()
npc3.info()

//quando colocamos o alert em um static, ele passa a ser um metodo da classe e nao dos objetos, logo, quando alertramos npc1.alert = true, estavmos instanciando o nosso objeto, mas, quando substituimos por Npc.alert = true, estabelecemos todas as condições para true nos nosso sobjetos npc1, npc2 e npc3

//no static, podemos atribuir funções, porem quando tentamos atribuir uma função da classe à um objeto, aparece que naõ é uma função e, de fato não é, pois esta sendo convocada em um objeto e nao em uma classe
Npc.setAlert()// agora sim a nossa função funciona, pois estamos atribuindo à uma classe