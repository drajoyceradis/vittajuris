# Backend integration notes

Este site roda em GitHub Pages, portanto o front-end pode ser hospedado normalmente, mas o backend precisa ficar em um serviço externo ou serverless.

## O que já está integrado

- Página pública estática
- Calendly para agendamento
- Typeform para triagem jurídica
- WhatsApp como contato direto

## O que é possível integrar agora

1. Formulário de pacientes com envio para webhook externo
2. Formulário jurídico com triagem separada
3. Captação de leads em planilha/CRM
4. Disparo de e-mail automático
5. Painel administrativo em serviço externo

## Opções práticas

- Supabase Functions + banco
- Firebase / Firestore
- Netlify Forms
- Formspree / webhook
- Google Apps Script ligado a Google Sheets
- Vercel Serverless Functions

## Recomendação estratégica

Para o seu caso, o caminho mais simples costuma ser:

- GitHub Pages para o site
- formulário separado para pacientes
- formulário separado para advogados
- webhook para salvar leads
- notificação por e-mail ou WhatsApp

## Observação

Sem credenciais de um serviço externo, não existe backend real dentro do próprio GitHub Pages. O máximo que o repositório consegue fazer sozinho é hospedar front-end estático.
