import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './css/style.css'
import '@fortawesome/fontawesome-free/js/all.min';

document.querySelectorAll('[data-bs-toggle="tooltip"]')
  .forEach(item => new bootstrap.Tooltip(item));
