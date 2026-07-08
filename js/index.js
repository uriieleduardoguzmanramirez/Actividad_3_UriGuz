
        document.getElementById("btnAvisoInscripcion").addEventListener("click", function() {
            MiniUI.mostrarModal({
                titulo: "Aviso de inscripción",
                mensaje: "El periodo de inscripción estará disponible del 10 al 15 de julio. Recuerda revisar tus materias antes de enviar tu solicitud.",
                textoBoton: "Entendido"
            });
        });

        document.getElementById("btnRequisitos").addEventListener("click", function() {
            MiniUI.mostrarModal({
                titulo: "Requisitos del trámite",
                mensaje: "Para realizar el trámite necesitas tu número de control, correo institucional y credencial vigente.",
                textoBoton: "Cerrar"
            });
        });

        document.getElementById("btnSolicitudEnviada").addEventListener("click", function() {
            MiniUI.mostrarToast({
                titulo: "Solicitud enviada",
                mensaje: "Tu solicitud fue registrada correctamente.",
                tipo: "exito",
                duracion: 3500
            });
        });

        document.getElementById("btnErrorDocumentos").addEventListener("click", function() {
            MiniUI.mostrarToast({
                titulo: "Documentos incompletos",
                mensaje: "Falta adjuntar una identificación válida.",
                tipo: "error",
                duracion: 3500
            });
        });

        document.getElementById("btnPendiente").addEventListener("click", function() {
            MiniUI.mostrarToast({
                titulo: "Revisión pendiente",
                mensaje: "Tu trámite aún se encuentra en proceso de revisión.",
                tipo: "advertencia",
                duracion: 3500
            });
        });

        document.getElementById("btnInfoHorario").addEventListener("click", function() {
            MiniUI.mostrarToast({
                titulo: "Horario de atención",
                mensaje: "El horario de atención es de lunes a viernes de 9:00 a 14:00 horas.",
                tipo: "info",
                duracion: 3500
            });
        });