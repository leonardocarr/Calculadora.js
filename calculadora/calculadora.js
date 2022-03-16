function calcular(tipo, valor) {
    if (tipo === "acao") {

        // Limpar visor
        if (valor === "c") {
            document.getElementById("resultado").value = ""
        }
        // Mostrar operação aritmetica
        if (valor === "/" || valor === "*" || valor === "-" || valor === "+" || valor === ".") {
            document.getElementById("resultado").value += valor
        }

        // mostrar resultado total
        if (valor === "=") {
            var result = eval(document.getElementById("resultado").value)
            document.getElementById("resultado").value = result
        }

        // Mostrar numeros
    } else if (tipo === "valor") {
        document.getElementById("resultado").value += valor
    }
}