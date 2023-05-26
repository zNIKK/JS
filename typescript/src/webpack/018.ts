import validation from './mod';
const register: {
  form: HTMLFormElement;
  formFields: NodeListOf<HTMLElement>;
  username: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  password2: HTMLInputElement;
} = {
  formFields: document.querySelectorAll<HTMLElement>('.form-fields'),
  form: document.querySelector('#form') as HTMLFormElement,
  username: document.querySelector('#username') as HTMLInputElement,
  email: document.querySelector('#email') as HTMLInputElement,
  password: document.querySelector('#password') as HTMLInputElement,
  password2: document.querySelector('#password2') as HTMLInputElement,
};

validation(register);
// console.log(register);
