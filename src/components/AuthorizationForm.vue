<script>
    export default {
        data() {
            return {
                login: '',
                pass: '',
                remember: false,
                showRegister: false
            }
        },
        methods:{
            Auth(){
                
                if (this.login == '' || this.pass == ''){
                    this.error ="Введите поле"
                    return;
                }
                this.error=''
                this.users.push({
                    name:this.name,
                    pass:this.pass,
                    mail:this.mail
                })
            },
            toggleRegister() {
                this.showRegister = !this.showRegister;
            }
        }
    }
    
</script>

    <template>
        <div class="login-wrapper">
            <form class="auth-form" @submit.prevent="showRegister ? null : Auth">
                <div class="form-header">
                    <h2 class="login-title" v-if="!showRegister">Вход в аккаунт</h2>
                    <h2 class="register-title" v-else>Регистрация</h2>
                    <div class="burger" v-if="!showRegister" @click.stop="toggleRegister">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div v-if="showRegister" class="close-btn" @click.stop="toggleRegister">✕</div>
                </div>
                <template v-if="!showRegister">
                    <label class="input-label">ЛОГИН</label>
                    <input class="input-field" type="text" v-model="login" placeholder="" />
                    <label class="input-label">ПАРОЛЬ</label>
                    <input class="input-field" type="password" v-model="pass" placeholder="" />
                    <div class="form-row">
                        <label class="remember-label">
                            <input type="checkbox" v-model="remember" /> Запомнить меня
                        </label>
                        <a href="#" class="forgot-link">Забыли пароль?</a>
                    </div>
                    <button class="login-btn" type="submit">ВОЙТИ</button>
                </template>
                <template v-else>
                    <label class="input-label">ЛОГИН</label>
                    <input class="input-field" type="text" placeholder="" />
                    <label class="input-label">E-MAIL</label>
                    <input class="input-field" type="email" placeholder="" />
                    <label class="input-label">ПАРОЛЬ</label>
                    <input class="input-field" type="password" placeholder="" />
                    <button class="register-btn" type="button">Зарегистрироваться</button>
                </template>
            </form>
        </div>
    </template>

<style>
.login-wrapper {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    font-family: 'SF Pro Rounded', 'Arial Rounded MT Bold', 'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
    font-weight: 500;
}
.auth-form {
    width: 400px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    padding: 2.5rem 2.5rem 2rem 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
}
.form-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
}
.login-title, .register-title {
    color: #4a90e2;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;
}
.input-label {
    font-size: 0.85rem;
    color: #b0b4be;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 0.2rem;
    margin-top: 0.7rem;
}
.input-field {
    width: 100%;
    padding: 0.9rem 1rem;
    border: none;
    border-radius: 5px;
    background: #ededed;
    font-size: 1rem;
    margin-bottom: 0.2rem;
}
.form-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.7rem 0 1.2rem 0;
}
.remember-label {
    font-size: 0.95rem;
    color: #888;
    display: flex;
    align-items: center;
    gap: 0.3rem;
}
.forgot-link {
    color: #4a90e2;
    font-size: 0.95rem;
    text-decoration: none;
    transition: color 0.2s;
}
.forgot-link:hover {
    color: #2563eb;
}
.login-btn, .register-btn {
    width: 100%;
    padding: 0.9rem 0;
    background: #4a90e2;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;
    margin-top: 0.5rem;
    transition: background 0.2s;
}
.login-btn:hover, .register-btn:hover {
    background: #2563eb;
}
.burger {
    position: static;
    width: 32px;
    height: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    z-index: 10;
    margin-left: 1rem;
}
.burger div {
    width: 100%;
    height: 4px;
    background: #4a90e2;
    border-radius: 2px;
    transition: 0.3s;
}
.close-btn {
    font-size: 2rem;
    color: #4a90e2;
    cursor: pointer;
    margin-left: 1rem;
    user-select: none;
}
</style>