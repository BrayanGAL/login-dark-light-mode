const btnTheme = document.querySelector('#mode-icon');
const loginForm = document.querySelector('#login-form')
const rootColors = document.querySelector(':root');
const logoGithub = document.querySelector('#github')
const nameIcon = document.querySelector('#name-icon');
const emailIcon = document.querySelector('#email-icon');
const passwordIcon = document.querySelector('#password-icon');

function theme() {
  btnTheme.addEventListener('click', () => {
    const currentTheme = rootColors.style.getPropertyValue('--background-light');
    if (!currentTheme || currentTheme === 'white') {
      rootColors.style.setProperty('--background-light', '#141414');
      rootColors.style.setProperty('--font', 'white');
      btnTheme.src = "./Assets/sol.png";
      logoGithub.src = "./Assets/github-dark-mode.png"
      nameIcon.src = "./Assets/usuario-dark-mode.png"
      emailIcon.src = "./Assets/email-dark-mode.png"
      passwordIcon.src = "./Assets/senha-dark-mode.png"
    } else {
      rootColors.style.setProperty('--background-light', 'white');
      rootColors.style.setProperty('--font', '#333131');
      btnTheme.src = "./Assets/lua.png";
      logoGithub.src = "./Assets/github-light-mode.png"
      nameIcon.src = "./Assets/usuario-light-mode.png"
      emailIcon.src = "./Assets/email-light-mode.png"
      passwordIcon.src = "./Assets/senha-light-mode.png"
    }
  })
}

theme()