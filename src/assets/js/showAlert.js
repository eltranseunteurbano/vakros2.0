import Swal from 'sweetalert2';

export const successRegister = (() => {

    Swal.fire({
        title: "Haz sido registrado con éxito",
        text: 'Te estaremos contactando cuando estemos operando para que así puedas disfrutar de todos los beneficios de Vakros.',
        icon: 'success',
        timer: 7000,
        showCloseButton: true,
        showConfirmButton: false,
        footer: '<a href="https://api.whatsapp.com/send?phone=573022880083" target="_blank" rel="noopener noreferrer" class="modal-footer"> Escríbenos a whats app </a>'
    })
});

export const errorRegister = (() => {

    Swal.fire({
        title: "No hemos podido registrar tus datos",
        text: 'Al parecer algo ha sucedido mientras te registrabas. Por favor intentalo nuevamente o escríbenos a whatsapp.',
        icon: 'error',
        timer: 7000,
        showCloseButton: true,
        showConfirmButton: false,
        showConfirmButton: false,
        footer: '<a href="https://api.whatsapp.com/send?phone=573022880083" target="_blank" rel="noopener noreferrer" class="modal-footer"> Escríbenos a whats app </a>'
    })

});


export const successEmail = (() => {

    Swal.fire({
        title: "Hemos recibido tu correo",
        text: 'Gracias por escribirnos, estaremos comunicandonos contigo tan pronto como podamos.',
        icon: 'success',
        timer: 7000,
        showCloseButton: true,
        showConfirmButton: false,
        footer: '<a href="https://api.whatsapp.com/send?phone=573022880083" target="_blank" rel="noopener noreferrer" class="modal-footer"> Escríbenos a whats app </a>'
    })

});

export const errorEmail = (() => {

    Swal.fire({
        title: "No hemos podido recibir tu mensaje",
        text: 'Al parecer algo ha sucedido mientras recibiamos tu correo. Por favor intentalo nuevamente o escríbenos a whatsapp.',
        icon: 'error',
        timer: 7000,
        showCloseButton: true,
        showConfirmButton: false,
        footer: '<a href="https://api.whatsapp.com/send?phone=573022880083" target="_blank" rel="noopener noreferrer" class="modal-footer"> Escríbenos a whats app </a>'
    })

});