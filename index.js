var bebida = parseFloat;
function maquinaRefrigerante(bebida){
    switch (bebida){
        case 'coca':
            console.log(`coquinha 6 conto a lata`);
            break;
        case 'pepsi':
            console.log(`pepsi 5 conto a lata`);
            break;
        case 'fanta':
            console.log(`fanta 5.50 conto a lata`);
            break;
        default: console.log(`Escolha inválida`);
    }}

var salario_bruto = 0;

function calcularSalario(salario_bruto,valor_fgts,valor_imposto,valor_mais_imposto,valor_de_mais_imposto,salario_liquido){
    salario_bruto = console.log(`Digite o seu salário`);
    valor_fgts = salario_bruto * 0.7
    valor_imposto = salario_bruto * 0.5
    valor_de_mais_imposto = salario_bruto * 0.5
    valor_mais_imposto = salario_bruto * 0.5
    salario_liquido = salario_bruto - valor_fgts - valor_imposto - valor_de_mais_imposto - valor_mais_imposto
    console.log(`Salário Líquido é de : ${salario_liquido}`)
    return salario_liquido
    }



function calcularforçagalodebriga(destreza,força,velocidade,altura,peso,largura,angulo_penas_rabo){
    força = (((angulo_penas_rabo * peso) - largura) + altura)
    destreza =(altura * velocidade) - (peso + largura)
    console.log(`o galo possui força de : ${força} em Newtons //---// e destreza de : ${destreza} `)
    if (peso === 100){
        console.log("galo desqualificado por:possível uso de esteroids e anabolizantes")
    }else if(altura === 180){
        console.log("galo desqualificado:tamanho desproporcional para qualquer raça de galo")
    }else if(angulo_penas_rabo === 30){
        console.log("galo desqualificado:Penas do rabo muito abaixadas")
    }else{
        ("galo aprovado")
    }
    
}

module.exports = {maquinaRefrigerante}
module.exports = {calcularSalario}
module.exports = {calcularforçagalodebriga}
