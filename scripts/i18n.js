(function () {
  const DEFAULT_LANG = 'pt';
  const LANG_SELECT_ID = 'lang';

  const TRANSLATIONS = {
    pt: {
      Titles: {
        Profile: "Resumo",
        Experience: "Experiência",
        Education: "Formação",
        Skills: "Habilidades",
        Projects: "Projetos"
      },
      BasicInfo: {
        FirstName: "Fabricio",
        LastName: "Reinert",
        Role: "Engenheiro de Software — Backend, Pagamentos e Cloud",
        Contacts: [
          { Info: '<a href="https://wa.me/5547991524473" target="_blank">+55 (47) 9 9152 4473</a>' },
          { Info: '<a href="mailto:fabricio.reinert@live.com">fabricio.reinert@live.com</a>' },
          { Info: '<a href="https://www.linkedin.com/in/fabricio-reinert-669408173/" target="_blank">LinkedIn</a>' },
          { Info: '<a href="https://github.com/FRReinert" target="_blank">GitHub</a>' },
        ]
      },
      Profile: "Engenheiro de software com foco em back-end, integração bancária e serviços em nuvem. Experiência em desenvolvimento de core bancário, APIs de pagamentos e sistemas resilientes escaláveis. Habilidades em liderar entrega técnica, integrar com instituições financeiras e melhorar desempenho/observabilidade.",
      Experience: [
        {
          Employer: "Corpay",
          Place: "Timbó, BR",
          Positions: [
            {
              Title: "Engenheiro de Software",
              Date: "2023 - Presente",
              Details: [
                "Integrações com instituições públicas e privadas",
                "Desenvolvimento de sistemas de monitoramento de frotas",
                "Desenvolvimento de sistemas de gestão de assinaturas"
              ],
              Badges: ["Python", "FastAPI", "RabbitMQ", "Celery", "K8s", "AWS"]
            }
          ]
        },
        {
          Employer: "Adaga",
          Place: "Timbó, BR",
          Positions: [
            {
              Title: "Engenheiro de Software",
              Date: "2023",
              Details: ["Desenvolvimento de sistema para assinaturas de seguro e assistência"],
              Badges: ["PHP", "JavaScript", "TypeScript", "Vue.js", "Slim", "AWS"]
            }
          ]
        },
        {
          Employer: "Atar B2B",
          Place: "Timbó, BR",
          Positions: [
            {
              Title: "Engenheiro de Software",
              Date: "2021 - 2023",
              Details: [
                "Desenvolvimento do core bancário (homologado pelo Bacen)",
                "Desenvolvimento do BaaS (Bank as a Service)",
                "Desenvolvimento do CM (Cash Management)",
                "Integração dos produtos com o SPI do Banco Central",
                "Integração dos produtos com o SPB do Banco Central",
                "Integração com instituições financeiras",
                "Integração com instituições de pagamento",
                "Desenvolvimento dos módulos de gestão bancária (backoffice)",
                "Desenvolvimento e sustentação de sistemas de transferência de recursos",
                "Desenvolvimento e sustentação de sistemas contábeis"
              ],
              Badges: ["Python", "JavaScript", "FastAPI", "WebApp2", "Vue.js", "AppEngine", "Cloud Functions", "Datastore", "BigQuery", "Memcache", "Cloud Scheduler", "Cloud Tasks", "Docker", "Agile", "Scrum"]
            }
          ]
        },
        {
          Employer: "Septodont",
          Place: "Pomerode, BR",
          Positions: [
            {
              Title: "Desenvolvedor e Analista de Sistemas",
              Date: "2014 - 2021",
              Details: [
                "Implantação de sistemas corporativos",
                "Desenvolvimento de sistemas internos",
                "Documentação e validação de rotinas",
                "Suporte e customização do Totvs Protheus",
                "Gerenciamento de infraestrutura",
                "Planos orçamentários de despesas e investimentos"
              ],
              Badges: ["Python", "C#", "ADVPL", "Delphi", "JavaScript", "Vue.js", "ASP.NET", "Django", "Electron", "Azure", "IIS", "Docker", "Nginx", "SQL Server", "Firebird", "Veeam", "Totvs"]
            }
          ]
        },
        {
          Employer: "Rede de Supermercados Top",
          Place: "Rio dos Cedros, BR",
          Positions: [
            {
              Title: "Gestor de Serviços de TI",
              Date: "2013",
              Details: ["Gestão da infraestrutura", "Análise, documentação e suporte de sistemas corporativos", "Compras e planejamento orçamentário"],
              Badges: ["Gestão", "Infraestrutura", "ERP"]
            }
          ]
        },
        {
          Employer: "Sisplan Sistemas",
          Place: "Indaial, BR",
          Positions: [
            {
              Title: "Consultor de Sistemas Industriais",
              Date: "2011 - 2013",
              Details: ["Implantação de ERP", "Desenvolvimento e implantação de projetos especiais", "Desenvolvimento de relatórios de processo"],
              Badges: ["Delphi", "Outsourcing"]
            }
          ]
        }
      ],
      Education: [
        { Course: "Gestão de Tecnologia", Place: "Unicesumar Indaial", Date: "2021 - 2022", Details: "Gestão de serviços de tecnologia" },
        { Course: "Sistemas de Informação", Place: "Uniasselvi Indaial", Date: "2014 - 2016", Details: "Desenvolvimento de sistemas" }
      ],
      Skills: [
        { Family: "Programação", Items: ["Python", "JavaScript", "TypeScript", "C#", "Delphi", "SQL", "NoSQL"] },
        { Family: "Frameworks", Items: ["Django", "Flask", "FastAPI", "ASP.NET", "Vue.js"] },
        { Family: "Ferramentas", Items: ["Azure", "GCP", "AWS", "K8s"] },
        { Family: "Diversos", Items: ["Scrum", "Agile", "Kanban"] }
      ],
      Projects: [
        { Project: "Core Bancário", Description: "Projeto de PSTI para um banco tradicional feito do zero para se comunicar diretamente com o Banco Central do Brasil. A finalidade é permitir a comunicação nos sistemas de transferência de recursos como o SPB (STRs) e o SPI (Pix)." },
        { Project: "API de Pagamentos BaaS", Description: "API Rest segregada em microsserviços para pagamento de Pix, TED, boletos, recargas de celular, emissão de cartões e autorização de pagamentos, além de integração com bancos parceiros para criação de contas correntes e contas transacionais." },
        { Project: "Backoffice Bancário", Description: "Aplicação web multi-tenant para gestão bancária, segregada em módulos como tesouraria, regulatórios, gestão de clientes e outros." },
        { Project: "PyUDI", Description: "Biblioteca open source para serialização, parsing, validação e consulta de UDIs (Unique Device Identification) para uso médico em compliance com FDA (EUA) e EMA." },
        { Project: "PySSRS", Description: "Biblioteca Python open source para integração com Microsoft SQL Server Reporting Services." },
        { Project: "Sistema Modular de Integração", Description: "Sistema capaz de mapear o banco de dados do ERP, gerar relatórios customizáveis, automatizar serviços e gerenciar notificações." },
        { Project: "API de Impressão Térmica", Description: "Serviço API Rest compatível com IIS que recebe comandos ZPL/EPL e envia para impressoras térmicas." },
        { Project: "Sistema de Inventário de Estoque", Description: "Aplicativo desktop integrado ao ERP para inventariar e movimentar material via API Rest." }
      ]
    },
    en: {
      Titles: {
        Profile: "Summary",
        Experience: "Experience",
        Education: "Education",
        Skills: "Skills",
        Projects: "Projects"
      },
      BasicInfo: {
        FirstName: "Fabricio",
        LastName: "Reinert",
        Role: "Software Engineer — Backend, Payments and Cloud",
        Contacts: [
          { Info: '<a href="https://wa.me/5547991524473" target="_blank">+55 (47) 9 9152 4473</a>' },
          { Info: '<a href="mailto:fabricio.reinert@live.com">fabricio.reinert@live.com</a>' },
          { Info: '<a href="https://www.linkedin.com/in/fabricio-reinert-669408173/" target="_blank">LinkedIn</a>' },
          { Info: '<a href="https://github.com/FRReinert" target="_blank">GitHub</a>' },
        ]
      },
      Profile: "Software engineer focused on backend systems, banking integrations and cloud services. Experienced building banking cores, payments APIs and resilient scalable services. Strong background in delivering technical solutions, integrating with financial institutions and improving performance/observability.",
      Experience: [
        {
          Employer: "Corpay",
          Place: "Timbó, BR",
          Positions: [
            {
              Title: "Software Engineer",
              Date: "2023 - Present",
              Details: [
                "Integrations with public and private institutions",
                "Development of fleet monitoring system",
                "Development of subscription management systems"
              ],
              Badges: ["Python", "FastAPI", "RabbitMQ", "Celery", "K8s", "AWS"]
            }
          ]
        },
        {
          Employer: "Adaga",
          Place: "Timbó, BR",
          Positions: [
            {
              Title: "Software Engineer",
              Date: "2023",
              Details: ["Development of subscription system for insurance and assistance"],
              Badges: ["PHP", "JavaScript", "TypeScript", "Vue.js", "Slim", "AWS"]
            }
          ]
        },
        {
          Employer: "Atar B2B",
          Place: "Timbó, BR",
          Positions: [
            {
              Title: "Software Engineer",
              Date: "2021 - 2023",
              Details: [
                "Development of banking core (approved by Bacen)",
                "Development of BaaS (Bank as a Service)",
                "Development of Cash Management (CM)",
                "Integration of products with SPI (Central Bank)",
                "Integration with SPB (Central Bank)",
                "Integration with financial institutions",
                "Integration with payment institutions",
                "Development of banking management modules (backoffice)",
                "Development and maintenance of fund transfer systems",
                "Development and maintenance of accounting systems"
              ],
              Badges: ["Python", "JavaScript", "FastAPI", "WebApp2", "Vue.js", "AppEngine", "Cloud Functions", "Datastore", "BigQuery", "Memcache", "Cloud Scheduler", "Cloud Tasks", "Docker", "Agile", "Scrum"]
            }
          ]
        },
        {
          Employer: "Septodont",
          Place: "Pomerode, BR",
          Positions: [
            {
              Title: "Systems Developer and Analyst",
              Date: "2014 - 2021",
              Details: [
                "Corporate systems deployment",
                "Internal systems development",
                "Documentation and validation of routines",
                "Support and customization of Totvs Protheus",
                "Infrastructure management",
                "Budget planning for expenses and investments"
              ],
              Badges: ["Python", "C#", "ADVPL", "Delphi", "JavaScript", "Vue.js", "ASP.NET", "Django", "Electron", "Azure", "IIS", "Docker", "Nginx", "SQL Server", "Firebird", "Veeam", "Totvs"]
            }
          ]
        },
        {
          Employer: "Rede de Supermercados Top",
          Place: "Rio dos Cedros, BR",
          Positions: [
            {
              Title: "IT Services Manager",
              Date: "2013",
              Details: ["Infrastructure management", "Analysis, documentation and support of corporate systems", "Purchasing and budget planning"],
              Badges: ["Management", "Infrastructure", "ERP"]
            }
          ]
        },
        {
          Employer: "Sisplan Sistemas",
          Place: "Indaial, BR",
          Positions: [
            {
              Title: "Industrial Systems Consultant",
              Date: "2011 - 2013",
              Details: ["ERP deployment", "Development and deployment of special projects", "Development of process reports"],
              Badges: ["Delphi", "Outsourcing"]
            }
          ]
        }
      ],
      Education: [
        { Course: "Technology Management", Place: "Unicesumar Indaial", Date: "2021 - 2022", Details: "Technology services management" },
        { Course: "Information Systems", Place: "Uniasselvi Indaial", Date: "2014 - 2016", Details: "Systems development" }
      ],
      Skills: [
        { Family: "Programming", Items: ["Python", "JavaScript", "TypeScript", "C#", "Delphi", "SQL", "NoSQL"] },
        { Family: "Frameworks", Items: ["Django", "Flask", "FastAPI", "ASP.NET", "Vue.js"] },
        { Family: "Tools", Items: ["Azure", "GCP", "AWS", "K8s"] },
        { Family: "Misc", Items: ["Scrum", "Agile", "Kanban"] }
      ],
      Projects: [
        { Project: "Banking Core", Description: "PSTI project for a traditional bank built from scratch to communicate directly with the Central Bank of Brazil." },
        { Project: "Payments API (BaaS)", Description: "REST API split into microservices for Pix, TED, boletos, mobile recharges, card issuance and payment authorization." },
        { Project: "Banking Backoffice", Description: "Multi-tenant web application for banking management, split into modules." },
        { Project: "PyUDI", Description: "Open source library for UDI serialization, parsing, validation and querying." },
        { Project: "PySSRS", Description: "Python library for integration with Microsoft SQL Server Reporting Services." },
        { Project: "Modular Integration System", Description: "System to map ERP DB, generate reports, automate services and manage notifications." },
        { Project: "Thermal Print API", Description: "REST service compatible with IIS that receives ZPL/EPL and sends to thermal printers." },
        { Project: "Inventory System", Description: "Desktop app integrated with ERP to inventory and move stock via REST API." }
      ]
    }
  };

  function qs(id) { return document.getElementById(id); }
  function saveLang(lang) { localStorage.setItem('resume_lang', lang); }
  function loadSavedLang() { return localStorage.getItem('resume_lang') || null; }

  function renderBasicInfo(b) {
    if (!b) return;
    qs('name').textContent = `${b.FirstName || ''} ${b.LastName || ''}`.trim();
    const roleEl = qs('role');
    if (roleEl) roleEl.textContent = b.Role || '';

    const contactsContainer = qs('contacts');
    if (contactsContainer && b.Contacts) {
      contactsContainer.innerHTML = '';
      b.Contacts.forEach(c => {
        const li = document.createElement('li');
        li.innerHTML = c.Info;
        contactsContainer.appendChild(li);
      });
    }
    const mapItem = (b.Contacts || []).find(x => (x.Info || '').includes('Timbó'));
    if (mapItem) qs('location').textContent = stripHtml(mapItem.Info);
  }

  function stripHtml(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html || '';
    return tmp.textContent || tmp.innerText || '';
  }

  function renderProfile(profile) { if (!profile) return; qs('profile').textContent = profile; }

  function renderExperience(list) {
    const container = qs('experience');
    if (!container) return;
    container.innerHTML = '';
    (list || []).forEach(emp => {
      const article = document.createElement('article');
      const h3 = document.createElement('h3');
      const pos = emp.Positions && emp.Positions[0];
      h3.textContent = `${emp.Employer} — ${pos ? (pos.Title + ' (' + pos.Date + ')') : ''}`;
      article.appendChild(h3);
      if (pos && pos.Details) {
        const ul = document.createElement('ul');
        pos.Details.forEach(d => { const li = document.createElement('li'); li.textContent = d; ul.appendChild(li); });
        article.appendChild(ul);
      }
      if (pos && pos.Badges) {
        const p = document.createElement('p');
        p.textContent = 'Technologies: ' + pos.Badges.join(', ');
        article.appendChild(p);
      }
      container.appendChild(article);
    });
  }

  function renderEducation(list) {
    const ul = qs('education');
    if (!ul) return;
    ul.innerHTML = '';
    (list || []).forEach(e => {
      const li = document.createElement('li');
      li.textContent = `${e.Course} — ${e.Place} (${e.Date})`;
      ul.appendChild(li);
    });
  }

  function renderSkills(list) {
    const container = qs('skills');
    if (!container) return;
    container.innerHTML = '';
    (list || []).forEach(f => {
      const div = document.createElement('div');
      const strong = document.createElement('strong');
      strong.textContent = f.Family + ': ';
      div.appendChild(strong);
      div.appendChild(document.createTextNode((f.Items || []).join(', ')));
      container.appendChild(div);
    });
  }

  function renderProjects(list) {
    const ul = qs('projects');
    if (!ul) return;
    ul.innerHTML = '';
    (list || []).forEach(p => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${p.Project}</strong> — ${p.Description}`;
      ul.appendChild(li);
    });
  }

  function renderTitles(t) {
    if (!t) return;
    const map = [
      ['profile-title', t.Profile],
      ['experience-title', t.Experience],
      ['education-title', t.Education],
      ['skills-title', t.Skills],
      ['projects-title', t.Projects]
    ];
    map.forEach(([id, text]) => {
      const el = qs(id);
      if (el && text) el.textContent = text;
    });
  }

  function applyContent(doc) {
    if (!doc) return;
    renderBasicInfo(doc.BasicInfo);
    renderProfile(doc.Profile);
    renderExperience(doc.Experience);
    renderEducation(doc.Education);
    renderSkills(doc.Skills);
    renderProjects(doc.Projects);
    if (doc.Titles) renderTitles(doc.Titles);
  }

  function updateSeo(lang, doc) {
    if (!doc) return;
    // Atualiza lang 
    document.documentElement.lang = (lang === 'en') ? 'en' : 'pt-BR';

    // Title
    const name = (doc.BasicInfo && (doc.BasicInfo.FirstName + ' ' + doc.BasicInfo.LastName)) || 'Currículo';
    document.title = `${name} - ${doc.BasicInfo && doc.BasicInfo.Role ? doc.BasicInfo.Role : ''}`.trim();

    // Meta 
    let desc = (doc.Profile && doc.Profile) || '';
    let md = document.querySelector('meta[name="description"]');
    if (!md) {
      md = document.createElement('meta');
      md.setAttribute('name', 'description');
      document.head.appendChild(md);
    }
    md.setAttribute('content', desc);

    // JSON-LD
    const ld = document.getElementById('ld-json') || (function () {
      const s = document.createElement('script'); s.type = 'application/ld+json'; s.id = 'ld-json'; document.head.appendChild(s); return s;
    })();

    const sameAs = [];
    (doc.BasicInfo && doc.BasicInfo.Contacts || []).forEach(c => {
      const m = (c.Info || '').match(/href=["']([^"']+)["']/);
      if (m && m[1]) sameAs.push(m[1]);
    });

    const json = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": name,
      "jobTitle": doc.BasicInfo && doc.BasicInfo.Role,
      "description": doc.Profile,
      "sameAs": sameAs
    };
    ld.textContent = JSON.stringify(json, null, 2);
  }

  function changeLang(lang) {
    const doc = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
    applyContent(doc);
    const sel = qs(LANG_SELECT_ID);
    if (sel) sel.value = lang;
    saveLang(lang);
    updateSeo(lang, doc);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const sel = qs(LANG_SELECT_ID);
    const saved = loadSavedLang() || (navigator.language && navigator.language.startsWith('en') ? 'en' : DEFAULT_LANG);
    if (sel) sel.value = saved;
    changeLang(saved);
    if (sel) sel.addEventListener('change', (e) => changeLang(e.target.value));
  });
})();
