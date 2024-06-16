//Salario * % - dedudação

function renda() {
    var out = document.getElementById("inss");
    var v = parseFloat(document.getElementById("renda").value);
    var d = parseFloat(document.getElementById("dependente").value);
    var inss, ir;

    if(v < 0 || isNaN(v)) v = 0; document.getElementById("renda").value = '0';
    if(d < 0 || isNaN(d)) d = 0; document.getElementById("dependente").value = '0';

    v <= 1412 ? inss = (v * 0.075)
    : v <= 2666.68 ? inss = (v * 0.09) - 21.18
    : v <= 4000.03 ? inss = (v * 0.12) - 101.18
    : v <= 7786.02 ? inss = (v * 0.14) - 181.18
    : inss = 908.85;

    out.textContent = inss.toFixed(2);

    v -= inss;

    out = document.getElementById("ir");

    v <= 2259.20 ? ir = 0
    : v <= 2826.65 ? ir = (v * 0.075) - (169.44 + (189.59 * d))
    : v <= 3751.05 ? ir = (v * 0.15) - (381.44 + (189.59 * d))
    : v <= 4664.68 ? ir = (v * 0.225) - (662.77 + (189.59 * d))
    : ir = (v * 0.275) - (896 + (189.59 * d));

    v -= ir;

    out.textContent = ir.toFixed(2);

    out = document.getElementById("liquido");

    out.textContent = v.toFixed(2);
}