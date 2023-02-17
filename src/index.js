
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
   <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">enter your name </label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">enter your lastname</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">age</label>
    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label date">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder=""/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
</div>
 
);


reportWebVitals();
