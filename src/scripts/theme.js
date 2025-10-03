(function () {
    try {
        // Configuração inicial
        var saved = localStorage.getItem('theme');
        var prefersDark =
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = saved || (prefersDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);

        // Função global para atualizar o tema
        window.updateTheme = function (newTheme) {
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        };

        // Observer para mudanças no localStorage (para sync entre abas)
        window.addEventListener('storage', function (e) {
            if (e.key === 'theme') {
                var nextTheme = e.newValue || (prefersDark ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', nextTheme);
            }
        });
    } catch (e) {
        console.error('Erro no theme.js:', e);
    }
})();
