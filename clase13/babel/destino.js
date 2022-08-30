"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var lista = [4, 3, 9, 5, 90];
lista.map(function (x) {
  return x * x;
}).forEach(function (x) {
  return console.log(x);
});

var Persona = /*#__PURE__*/function () {
  function Persona(nombre, apellido) {
    _classCallCheck(this, Persona);

    this.nombre = nombre;
    this.apellido = apellido;
  }

  _createClass(Persona, [{
    key: "mostrarNombreCompleto",
    value: function mostrarNombreCompleto() {
      return "".concat(this.nombre, " ").concat(this.apellido);
    }
  }]);

  return Persona;
}();

var luis = new Persona("Luis", "Navas");
console.log(luis.mostrarNombreCompleto());
