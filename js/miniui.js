"use strict";

const MiniUI = {
    
    mostrarModal: function(opciones) {
        const titulo = opciones.titulo || "Mensaje";
        const mensaje = opciones.mensaje || "Contenido del modal";
        const textoBoton = opciones.textoBoton || "Cerrar";

        let modalExistente = document.getElementById("miniui-modal");

        if (modalExistente) {
            modalExistente.remove();
        }

        const modal = document.createElement("div");
        modal.id = "miniui-modal";
        modal.className = "miniui-modal-fondo";

        const caja = document.createElement("div");
        caja.className = "miniui-modal-caja";

        const tituloModal = document.createElement("h2");
        tituloModal.textContent = titulo;

        const mensajeModal = document.createElement("p");
        mensajeModal.textContent = mensaje;

        const botonCerrar = document.createElement("button");
        botonCerrar.textContent = textoBoton;
        botonCerrar.className = "miniui-btn-cerrar";

        botonCerrar.addEventListener("click", function() {
            modal.remove();
        });

        modal.addEventListener("click", function(evento) {
            if (evento.target === modal) {
                modal.remove();
            }
        });

        caja.appendChild(tituloModal);
        caja.appendChild(mensajeModal);
        caja.appendChild(botonCerrar);

        modal.appendChild(caja);
        document.body.appendChild(modal);
    },

    mostrarToast: function(opciones) {
        const titulo = opciones.titulo || "Notificación";
        const mensaje = opciones.mensaje || "Mensaje de ejemplo";
        const tipo = opciones.tipo || "info";
        const duracion = opciones.duracion || 3000;

        let contenedor = document.getElementById("miniui-toast-contenedor");

        if (!contenedor) {
            contenedor = document.createElement("div");
            contenedor.id = "miniui-toast-contenedor";
            document.body.appendChild(contenedor);
        }

        const toast = document.createElement("div");
        toast.className = "miniui-toast " + tipo;

        const tituloToast = document.createElement("strong");
        tituloToast.textContent = titulo;

        const mensajeToast = document.createElement("p");
        mensajeToast.textContent = mensaje;

        const botonCerrar = document.createElement("button");
        botonCerrar.textContent = "×";
        botonCerrar.className = "miniui-toast-cerrar";

        botonCerrar.addEventListener("click", function() {
            toast.remove();
        });

        toast.appendChild(botonCerrar);
        toast.appendChild(tituloToast);
        toast.appendChild(mensajeToast);

        contenedor.appendChild(toast);

        setTimeout(function() {
            toast.remove();
        }, duracion);
    }
};