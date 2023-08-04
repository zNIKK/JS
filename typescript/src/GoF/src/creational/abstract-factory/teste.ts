// interface de botão genérica
interface Button {
  name: string;
  submit?: boolean;

  status(): void;
}

// interface para criar o botão
interface UIElementFactory {
  createButton(nameButton: string, submit?: boolean): Button;
}

// classe que implementa um botão para windows
class ButtonWindows implements Button {
  submit?: boolean | undefined = false;
  constructor(public name: string = 'text') {}

  status(): void {
    console.log(`text: ${this.name} / submit status: ${this.submit}`);
  }
}

// classe que implementa um botão para linux
class ButtonLinux implements Button {
  constructor(public name: string, public submit: boolean) {}

  status(): void {
    console.log(`text: ${this.name} / submit status: ${this.submit}`);
  }
}

// classe que
class UIElementFactoryWindows implements UIElementFactory {
  createButton(windowsNameButton: string): Button {
    return new ButtonWindows(windowsNameButton);
  }
}

class UIElementFactoryLinux implements UIElementFactory {
  createButton(linuxNameButton: string, submit: boolean): Button {
    return new ButtonLinux(linuxNameButton, submit);
  }
}

const windowsButton = new UIElementFactoryWindows();
const linuxButton = new UIElementFactoryLinux();

const button1 = windowsButton.createButton('submit');
const button2 = linuxButton.createButton('submit', true);

button1.status();
button2.status();
