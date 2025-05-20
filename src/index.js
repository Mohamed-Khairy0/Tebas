import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './css/style.css'
import '@fortawesome/fontawesome-free/js/all.min';

document.querySelectorAll('[data-bs-toggle="tooltip"]')
  .forEach(item => new bootstrap.Tooltip(item));



  document.addEventListener('DOMContentLoaded', function () {
    const toastElement = document.getElementById('liveToast');
    const toast = new bootstrap.Toast(toastElement);

    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        toast.show();
      });
    });
  });

document.getElementById("copyright").innerHTML = "جميع الحقوق محفوظة للمتجر سنة " + new Date ().getFullYear()

