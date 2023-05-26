import validator from 'validator';
const SHOW_ERROR_MESSAGE = 'show-error-message';
interface Register {
  form: HTMLFormElement;
  formFields: NodeListOf<HTMLElement>;
  username: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  password2: HTMLInputElement;
}

export default function validation(obj: Register) {
  obj.form.addEventListener('submit', function (e: Event) {
    e.preventDefault();

    hideErrorMessages(obj.formFields);
    checkForEmptyFields(obj.username, obj.email, obj.password, obj.password2);

    checkUsername(obj.username);
    checkEmail(obj.email);
    checkPassword(obj.password, obj.password2);
    if (shouldSendForm(this)) console.log('FORMULÁRIO ENVIADO');
  });
}

function hideErrorMessages(form: NodeListOf<HTMLElement>): void {
  form.forEach((i: HTMLElement) => i.classList.remove(SHOW_ERROR_MESSAGE));
}

function showErrorMessages(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;

  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGE);
}

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value)
      showErrorMessages(input, 'Este campo não pode ficar vazio');
  });
}

function checkEmail(email: HTMLInputElement): void {
  if (!validator.isEmail(email.value)) {
    showErrorMessages(email, 'Insira um email válido');
  }
}

function checkUsername(username: HTMLInputElement): void {
  if (username.value.length < 7) {
    showErrorMessages(
      username,
      'Seu username precisa ter 7 caracteres ou mais',
    );
  }
}

function checkPassword(
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void {
  if (password.value !== password2.value) {
    showErrorMessages(password, 'As duas senhas precisa ser iguais');
    showErrorMessages(password2, 'As duas senhas precisa ser iguais');
  }
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach(() => (send = false));

  return send;
}
