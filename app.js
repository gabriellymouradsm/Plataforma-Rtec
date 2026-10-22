/**
 * Main Application Router & Entry Point for RTEC SPA
 */
const router = {
    routes: {
        home: renderHomeView,
        schedule: renderScheduleView,
        dashboard: renderDashboardView,
        about: renderAboutView
    },
    navigate(route) {
        const renderFn = this.routes[route] || this.routes.home;
        const appContainer = document.getElementById('app');
        if (appContainer) {
            appContainer.innerHTML = renderFn();
        }
        this.updateActiveNav(route);
    },
    updateActiveNav(activeRoute) {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            const isMatch = btn.getAttribute('data-route') === activeRoute;
            btn.className = `nav-btn flex flex-col items-center p-2 ${isMatch ? 'text-brand font-semibold' : 'text-slate-500 hover:text-brand'}`;
        });
    }
};

function renderHomeView() {
    return `
        <div class="space-y-6">
            <div class="bg-white rounded-2xl p-6 eco-shadow border border-slate-100">
                <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-brand mb-2">Plataforma Sustentável</span>
                <h2 class="font-heading font-bold text-2xl text-slate-900 mb-2">Bem-vindo à RTEC</h2>
                <p class="text-slate-600 text-sm mb-4">Gestão inteligente de resíduos e triagem de eletroeletrônicos em Franco da Rocha - SP.</p>
                <button onclick="router.navigate('schedule')" class="w-full py-3 bg-brand hover:bg-brand-dark text-white font-semibold rounded-xl shadow-md transition active:scale-[0.98]">
                    🌱 Agendar Nova Coleta
                </button>
            </div>
        </div>
    `;
}

function renderScheduleView() {
    return `
        <div class="bg-white rounded-2xl p-6 eco-shadow border border-slate-100">
            <h2 class="font-heading font-bold text-xl text-slate-900 mb-4">Agendamento de Coleta</h2>
            <p class="text-slate-600 text-sm">Formulário de solicitação de resíduos em desenvolvimento.</p>
        </div>
    `;
}

function renderDashboardView() {
    return `
        <div class="bg-white rounded-2xl p-6 eco-shadow border border-slate-100">
            <h2 class="font-heading font-bold text-xl text-slate-900 mb-4">Painel Operacional</h2>
            <p class="text-slate-600 text-sm">Listagem de coletas e triagem em tempo real.</p>
        </div>
    `;
}

function renderAboutView() {
    return `
        <div class="bg-white rounded-2xl p-6 eco-shadow border border-slate-100">
            <h2 class="font-heading font-bold text-xl text-slate-900 mb-2">Sobre a RTEC</h2>
            <p class="text-slate-600 text-sm mb-4">Iniciativa focada na destinação correta de resíduos eletroeletrônicos e conscientização ambiental em Franco da Rocha - SP.</p>
        </div>
    `;
}

// Initial Navigation on Load
document.addEventListener('DOMContentLoaded', () => {
    router.navigate('home');

    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js').catch(err => console.log('SW registration failed:', err));
    }
});
