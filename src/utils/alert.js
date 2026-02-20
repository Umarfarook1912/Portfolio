import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const THEME_COLOR = '#169b46'; // app green

const basePopupClass = 'rounded-2xl p-6 text-left';
const confirmBtnClass = 'bg-gradient-to-r from-[#169b46] to-[#50ca71] text-white px-4 py-2 rounded-xl font-semibold';
const denyBtnClass = 'bg-gray-100 text-gray-800 px-4 py-2 rounded-xl font-semibold';

export function successAlert(title = 'Message sent', text = 'Thank you — I will get back to you soon.') {
  return Swal.fire({
    icon: 'success',
    title,
    text,
    customClass: {
      popup: basePopupClass,
      confirmButton: confirmBtnClass,
      denyButton: denyBtnClass,
    },
    showDenyButton: false,
    confirmButtonText: 'OK',
    backdrop: true,
  });
}

export function errorAlert(title = 'Error', text = 'Something went wrong. Please try again later.') {
  return Swal.fire({
    icon: 'error',
    title,
    text,
    customClass: {
      popup: basePopupClass,
      confirmButton: confirmBtnClass,
    },
    confirmButtonText: 'OK',
  });
}

export default { successAlert, errorAlert };
