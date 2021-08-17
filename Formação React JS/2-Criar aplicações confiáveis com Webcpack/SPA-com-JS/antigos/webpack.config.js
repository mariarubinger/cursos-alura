//todas as configurações do WEBPACK está nesse arquivo

const path = require("path")
const HtmlWebpackPlugin = required("html-werbpack-plugin")
module.exports = {
    mode: "development",
    devServer: {
        open: true,
        contentBase: "dist"
    },
    entry: "./src/components/listagem/listagem-cliente.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"), 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/clientes.html",
            filename: "index.html"
        })
    ]
}