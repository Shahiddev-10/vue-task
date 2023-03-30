const emailValidation = {
    methods: {
        validateEmail() {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(email.value)) {
                if (email.value) {
                    placeholder.value.message = "Please enter a valid email address";
                    placeholder.value.color = "text-danger";
                    return false;
                } else {
                    placeholder.value.message = "Please enter email address";
                    placeholder.value.color = "text-white-200";
                }
            } else {
                placeholder.value.message = "";
                placeholder.value.color = "text-white-200";
                return true;
            }
            if (email.value == "") {
                placeholder.value.message = "Please enter email address";
                placeholder.value.color = "text-white-200";
            }
        }
    }
}

export default emailValidation