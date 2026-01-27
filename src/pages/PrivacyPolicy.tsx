// src/pages/PrivacyPolicy.tsx
import React from "react";

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = "27/01/2026";

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top spacing */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-muted-foreground">Stride Digital</span>
          </div>

          <h1 className="mt-6 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Política de Privacidade
          </h1>

          <p className="mt-3 text-muted-foreground max-w-2xl">
            A Stride Digital valoriza a sua privacidade e está comprometida com a
            proteção dos seus dados pessoais, em conformidade com a LGPD (Lei nº
            13.709/2018).
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            Última atualização: <span className="font-medium">{lastUpdated}</span>
          </p>
        </header>

        {/* Content */}
        <section className="space-y-10">
          {/* 1 */}
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-semibold">1. Coleta de informações</h2>
            <p className="mt-3 text-muted-foreground">
              Podemos coletar informações pessoais fornecidas diretamente por você
              quando:
            </p>
            <ul className="mt-4 list-disc pl-6 text-muted-foreground space-y-2">
              <li>Você preenche formulários de contato, anúncios ou landing pages;</li>
              <li>Você entra em contato via WhatsApp, Instagram, Messenger ou e-mail;</li>
              <li>Você navega em nosso site e interage com nossas páginas.</li>
            </ul>

            <p className="mt-4 text-muted-foreground">
              Os dados podem incluir:
            </p>
            <ul className="mt-3 list-disc pl-6 text-muted-foreground space-y-2">
              <li>Nome;</li>
              <li>Telefone;</li>
              <li>E-mail;</li>
              <li>Nome da empresa;</li>
              <li>Outras informações que você fornecer voluntariamente.</li>
            </ul>
          </section>

          {/* 2 */}
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-semibold">2. Uso das informações</h2>
            <p className="mt-3 text-muted-foreground">
              Utilizamos as informações coletadas para:
            </p>
            <ul className="mt-4 list-disc pl-6 text-muted-foreground space-y-2">
              <li>Entrar em contato com você;</li>
              <li>Entender suas necessidades e objetivos;</li>
              <li>Apresentar soluções, serviços e estratégias de marketing;</li>
              <li>Melhorar nossos serviços, comunicação e experiência;</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <div className="mt-5 rounded-xl border border-border bg-secondary/40 p-4">
              <p className="text-sm text-muted-foreground">
                A Stride Digital <span className="font-medium">não vende</span>,{" "}
                <span className="font-medium">não aluga</span> e{" "}
                <span className="font-medium">não comercializa</span> seus dados pessoais.
              </p>
            </div>
          </section>

          {/* 3 */}
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-semibold">3. Compartilhamento de dados</h2>
            <p className="mt-3 text-muted-foreground">
              Podemos compartilhar dados apenas quando necessário para:
            </p>
            <ul className="mt-4 list-disc pl-6 text-muted-foreground space-y-2">
              <li>Operar ferramentas de marketing, mídia e mensuração (ex.: Meta e Google);</li>
              <li>Prestadores de serviço essenciais para a execução e suporte das nossas operações;</li>
              <li>Atender solicitações legais, judiciais ou regulatórias.</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              Sempre que possível, aplicamos medidas para garantir que os dados sejam tratados com
              segurança e somente pelo tempo necessário.
            </p>
          </section>

          {/* 4 */}
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-semibold">4. Armazenamento e segurança</h2>
            <p className="mt-3 text-muted-foreground">
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra
              acessos não autorizados, perda, uso indevido, alteração ou divulgação.
            </p>
            <p className="mt-3 text-muted-foreground">
              Mesmo com boas práticas de segurança, nenhum sistema é 100% inviolável. Caso identifiquemos
              incidentes relevantes, adotaremos as medidas necessárias conforme a legislação aplicável.
            </p>
          </section>

          {/* 5 */}
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-semibold">5. Cookies e tecnologias de rastreamento</h2>
            <p className="mt-3 text-muted-foreground">
              Podemos utilizar cookies e tecnologias semelhantes para melhorar a experiência no site,
              entender o comportamento de navegação e medir a performance de campanhas.
            </p>
            <p className="mt-3 text-muted-foreground">
              Você pode gerenciar cookies no seu navegador. Ao desativar cookies, algumas funcionalidades
              podem ser afetadas.
            </p>
          </section>

          {/* 6 */}
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-semibold">6. Direitos do titular (LGPD)</h2>
            <p className="mt-3 text-muted-foreground">
              Você pode solicitar, a qualquer momento:
            </p>
            <ul className="mt-4 list-disc pl-6 text-muted-foreground space-y-2">
              <li>Confirmação e acesso aos dados;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>Portabilidade, quando aplicável;</li>
              <li>Informações sobre uso e compartilhamento;</li>
              <li>Revogação do consentimento, quando aplicável.</li>
            </ul>
          </section>

          {/* 7 */}
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-semibold">7. Retenção de dados</h2>
            <p className="mt-3 text-muted-foreground">
              Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades descritas nesta
              Política, respeitando exigências legais e regulatórias.
            </p>
          </section>

          {/* 8 */}
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-semibold">8. Alterações nesta Política</h2>
            <p className="mt-3 text-muted-foreground">
              Esta Política pode ser atualizada periodicamente para refletir melhorias e mudanças legais.
              Recomendamos que você revise esta página de tempos em tempos.
            </p>
          </section>

          {/* 9 */}
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-semibold">9. Contato</h2>
            <p className="mt-3 text-muted-foreground">
              Para dúvidas, solicitações ou exercício de direitos relacionados aos seus dados, entre em contato:
            </p>

            <div className="mt-4 rounded-xl border border-border bg-secondary/40 p-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Stride Digital</span>
                <br />
                E-mail: <span className="font-medium">stridedigital01@gmail.com</span>
                <br />
                Atendimento: Segunda a sexta, 9h às 18h
              </p>
            </div>
          </section>
        </section>

        {/* Footer note */}
        <footer className="mt-12 text-xs text-muted-foreground">
          Ao utilizar nossos canais e fornecer seus dados, você declara estar ciente e de acordo com esta
          Política de Privacidade.
        </footer>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
