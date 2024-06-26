import Swal from 'sweetalert2';
import './alerts.css';

export const success = Swal.mixin({
    icon: 'success',
    showConfirmButton: true,
    confirmButtonText: 'Continuar',
    confirmButtonColor: '#020120',
    showCancelButton: false,
    showCloseButton: false,
    reverseButtons: true,
    timer: 2000,
    timerProgressBar: true,
    focusConfirm: false,
    focusCancel: false,
    customClass: {
        title: 'alert-title',
        htmlContainer: 'alert-text',
        confirmButton: 'alert-button',
        cancelButton: 'alert-button',
        denyButton: 'alert-button'
    },
    padding: '10px'
});

export const question = Swal.mixin({
    icon: 'question',
    showCloseButton: false,
    showCancelButton: true,
    cancelButtonColor: '#bbb',
    cancelButtonText: 'Cancelar',
    showConfirmButton: true,
    confirmButtonColor: '#020120',
    confirmButtonText: 'Confirmar',
    reverseButtons: true,
    customClass: {
        title: 'alert-title',
        htmlContainer: 'alert-text',
        confirmButton: 'alert-button',
        cancelButton: 'alert-button',
        denyButton: 'alert-button'
    },
    padding: '10px'
})

export const alert_error = Swal.mixin({
    icon: 'error',
    showCloseButton: false,
    showConfirmButton: true,
    confirmButtonColor: '#020120',
    confirmButtonText: 'Continuar',
    timer: 3000,
    timerProgressBar: true,
    customClass: {
        title: 'alert-title',
        htmlContainer: 'alert-text',
        confirmButton: 'alert-button',
        cancelButton: 'alert-button',
        denyButton: 'alert-button'
    },
    padding: '10px'
})

export const warning =  Swal.mixin({
    icon: 'warning',
    showCloseButton: false,
    showConfirmButton: true,
    confirmButtonColor: '#020120',
    confirmButtonText: 'Continuar',
    timer: 3000,
    timerProgressBar: true,
    customClass: {
        title: 'alert-title',
        htmlContainer: 'alert-text',
        confirmButton: 'alert-button',
        cancelButton: 'alert-button',
        denyButton: 'alert-button'
    },
    padding: '10px'
})