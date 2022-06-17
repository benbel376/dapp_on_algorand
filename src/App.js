import img_1 from './images/logo2.webp'
import './App.css';
import './css/main.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';

function App() {
  return (
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <div class="login100-pic js-tilt" data-tilt>
              <img src={img_1} alt="IMG"/>
            </div>

            <form class="login100-form validate-form">
              <span class="login100-form-title">
                Member OptIn
              </span>

              <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                <input class="input100" type="text" name="email" placeholder="Private Key"/>
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>              
              <div class="container-login100-form-btn">
                <button class="login100-form-btn">
                  OptIn
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default App;
