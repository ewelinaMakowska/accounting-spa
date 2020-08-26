<template>
    <div>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                      <b>Registration</b><br/><br/>
                        <form @submit="submitForm($event)" novalidate method="post">
                            <label for="form__name">First Name:</label><input id="form__name" name="name" type="text"/><br/><br/>
                            <label for="form__name">Last Name:</label><input id="form__name" name="name" type="text"/><br/><br/>
                            <label for="form__email">E-mail:</label><input id="form__email" name="email" type="email"/><br/><br/>
                            <label for="form__email">Password:</label><input id="form__password" name="password" type="password"/><br/><br/>
                            <label for="form__email">Confirm Password:</label><input id="form__password" name="password" type="password"/><br/><br/>
                          
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
      </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    input[type="text"],
    input[type="email"],
    input[type="password"] {
        border: 1px solid #333;
        margin-left: 20px;
    }

    input[type="submit"] {
        background: lightblue;
    }

</style>