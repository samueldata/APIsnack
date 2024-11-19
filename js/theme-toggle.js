// Função para alternar entre tema claro e escuro
const themeToggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Função para aplicar o tema
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        themeToggleButton.innerHTML = '🌙'; // Ícone de lua (escuro)
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        themeToggleButton.innerHTML = '🌞'; // Ícone de sol (claro)
    }
    // Salvar a escolha no localStorage
    localStorage.setItem('theme', theme);
}

// Verificar o tema salvo no localStorage
if (currentTheme) {
    applyTheme(currentTheme);  // Se o tema está salvo, aplica ele
} else {
    // Aplicar o tema claro por padrão se não houver preferência salva
    applyTheme('light');
}

// Alterar tema ao clicar no botão
themeToggleButton.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
    applyTheme(newTheme);
});
