import '../css/trainer.css';
import '../css/util.css';
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css';

function Trainer() {

  return (
    <div class="t_limiter">
    <div class="t_container-login100">
        <div class="t_wrap-login100">
            <form class="t_login100-form t_validate-form p-l-55 p-r-55 p-t-178">
                <span class="t_login100-form-title">
                    Trainers Page
                </span>
                <div class="t_wrap-input100 t_validate-input" data-validate = "Please enter password">
                    <input class="t_input100" type="password" name="pass" placeholder="Password"/>
                    <span class="t_focus-input100"></span>
                </div>

                <div class="t_container-login100-form-btn">
                    <button class="t_login100-form-btn">
                        Mint
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
  );
}

export default Trainer;