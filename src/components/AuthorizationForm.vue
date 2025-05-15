<script>
    export default {
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
            }
    }
    }
    
</script>

    <template>
        <form>
            <label>Вход</label>
            <input type ="login" v-model="login" placeholder="Логин"/>
            <input type ="password" v-model="pass" placeholder="Пароль"/>
            <button @click="Auth()">Войти</button>
        </form>
    </template>

<style>
</style>