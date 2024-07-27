import Swal from 'sweetalert2';
import './alerts.css';

let svgLoader = `
<div class="flex items-center">
    <svg viewBox="25 25 50 50" style="width: 3.25em; transform-origin: center; animation: rotate4 2s linear infinite;" xmlns="http://www.w3.org/2000/svg">
    <circle r="20" cy="50" cx="50" style="fill: none; stroke: hsl(214, 97%, 59%); stroke-width: 2; stroke-dasharray: 1, 200; stroke-dashoffset: 0; stroke-linecap: round; animation: dash4 1.5s ease-in-out infinite;"></circle>
    <style>
        @keyframes rotate4 {
        100% { transform: rotate(360deg); }
        }
        @keyframes dash4 {
        0% { stroke-dasharray: 1, 200; stroke-dashoffset: 0; }
        50% { stroke-dasharray: 90, 200; stroke-dashoffset: -35px; }
        100% { stroke-dashoffset: -125px; }
        }
    </style>
    </svg>
    <p class="grow text-center font-[600] text-[var(--text-black)]">Cargando...</p>
</div>
`
export const loading = Swal.mixin({
    toast: true,
    html: svgLoader,
    showCloseButton: false,
    showConfirmButton: false,
    allowOutsideClick: false
})

export const success = Swal.mixin({
    icon: 'success',
    toast: true,
    timer: 2000,
    showConfirmButton: false,
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
    toast: true,
    timer: 3000,
    showConfirmButton: false,
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