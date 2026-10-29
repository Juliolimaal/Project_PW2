# World Wines

Loja de vinhos migrada para Angular 22, com estrutura baseada no exemplo de portfolio do professor. O catálogo usa a tabela `wines` do Supabase quando as credenciais estão configuradas. Sem conexão, o catálogo mostra os produtos locais do próprio projeto.

## Rodar localmente

1. Instale Node.js e npm.
2. Copie `src/environments/environment.development.example.ts` para `src/environments/environment.development.ts` e preencha a URL do projeto Supabase e a chave anon.
3. No Supabase, crie uma tabela `wines` com as colunas `id` (text, primary key), `name` (text), `category` (text), `description` (text), `price` (numeric) e `image` (text). Configure as políticas RLS para permitir leitura pública; restrinja inclusão e exclusão a usuários autorizados antes de publicar.
4. Execute `npm install` e `npm start`.
5. Abra `http://localhost:4200`.

A inclusão e remoção no painel `/admin` usam POST e DELETE do Supabase. Esses controles servem para a atividade; em produção, o acesso de escrita deve ser protegido por autenticação e políticas RLS. Não coloque a chave service_role no frontend.

## Estrutura

```
public/images/                  imagens originais da loja
src/
  app/
    components/                 navegação e cartão de vinho
    pages/                      início, catálogo, carrinho, pagamento e painel
    services/                   catálogo/Supabase e carrinho com Signals
    models/                     modelo de vinho
    app.config.ts               Router e HttpClient
    app.routes.ts               rotas da aplicação
  environments/                 configuração do Supabase
  main.ts
  styles.css
legacy-next/                    versão Next.js original preservada
```

## Divisão para três pessoas

A divisão acompanha o desenvolvimento em três rodadas. Em cada rodada, as três pessoas fazem uma parte do mesmo fluxo: alinham o modelo de dados e os templates, integram com a outra parte e revisam a tela completa.

| Rodada | Pessoa 1 | Pessoa 2 | Pessoa 3 |
| --- | --- | --- | --- |
| Catálogo | Rotas e página de início | Cartão de vinho e template da coleção | Modelo, GET e carga pelo Supabase |
| Carrinho | Botões de adicionar/remover nos cards | Estado com Signals e persistência local | Tela do carrinho, totais e navegação |
| Finalização | Formulário e validações | Resumo do pedido e limpeza do carrinho | Conferência da integração, estilos e revisão do fluxo |
| Painel de gestão | Formulário de novo vinho | POST e retorno da lista | DELETE, mensagens de estado e revisão conjunta |

Para equilibrar o trabalho, troquem as áreas entre as rodadas. Cada pessoa deve revisar uma mudança feita por outra e participar da integração final. Os nomes das três pessoas podem ser colocados ao lado das colunas quando o grupo definir a ordem.

## Requisitos da atividade

- Angular standalone, componentes e templates externos.
- Signals para estado dos vinhos e carrinho.
- Rotas para início, catálogo, carrinho, pagamento e administração.
- Formulários reativos no pagamento e cadastro de vinhos.
- HttpClient com GET, POST e DELETE no Supabase.
