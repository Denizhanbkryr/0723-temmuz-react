import { useForm } from "react-hook-form";
import { Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import FormInput from "./atoms/FormInput";
import { toast } from "react-toastify";
import axios from "axios";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    mode: "all",
  });

  const onFormSubmit = (formData) => {
    console.log("formData: ", formData);
    // todo: axios post request oluştur
    // formData yı gönder
    toast("Bilgiler kontrol ediliyor");

    axios
      .post("olmayan-bir-url.com", formData)
      .then((res) => {})
      .catch((err) => {
        toast.error("Login olurken bir hata ile karşılaşıldı!");
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <FormGroup>
          <Label>Kullanıcı:</Label>
          <FormInput
            type="email"
            name={"email"}
            validations={{
              required: "Email alanı zorunludur!",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Email adresi geçerli değildir.",
              },
            }}
            register={register}
            invalid={!!errors.email?.message}
          />
          <FormFeedback>{errors.email?.message}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Password:</Label>
          <FormInput
            type="password"
            name={"password"}
            validations={{
              required: "Password alanı zorunludur.",
              minLength: {
                value: 6,
                message: "En az 6 karakter girilmelidir.",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/,
                message:
                  "Şifreniz büyük harf, küçük harf, sayı ve özel karakter içermelidir.",
              },
            }}
            register={register}
            invalid={!!errors.password?.message}
          />
          <FormFeedback>{errors.password?.message}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Remember Me:</Label>
          <FormInput type="checkbox" name={"rememberMe"} register={register} />
        </FormGroup>

        <Input
          type="submit"
          formNoValidate="formnovalidate"
          value="Log in"
          disabled={!isValid}
        />
      </Form>
    </div>
  );
};

export default LoginForm;
