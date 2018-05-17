// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

//Sempre que a pagina rolar executa mySticky
window.onscroll = function() {mySticky()}

function mySticky() {
    //Pega o elemento a ser fixado
    let fixo = document.getElementById("fixo");
    //Se o rolamento da pagina for maio que o 730 adiciona a classe 
    //sticky no elemento
    if(scrollY >= 730){
        fixo.classList.add("sticky");
    } else {
        fixo.classList.remove("sticky");
    }
}