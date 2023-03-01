
<a href="url"><img src="https://raw.githubusercontent.com/Opseua/M5-GRU_FINAL_Case-2-Site-do-Meu-app/BRANCH_Orlando/src/views/login/logo_circulo.jpg" align="center" height="200" width="200" ></a>



# Caderno da Saúde

A proposta da nossa aplicação é permitir e facilitar que qualquer pessoa possa registrar informações em um 'bloco de notas' voltado para área da saúde.

Além das notas criadas, nossa aplicação ainda permite que o usuário crie um perfil com o seu 'nome', 'gênero', 'data de nascimento', 'peso', 'altura','tipo sanguineo' e 'IMC', que é gerado automaticamente com base nos dados inseridos.

A ideia é que a aplicação auxilie no registro de consultas agendadas, horário de remédios, controle de medicamentos, cronograma de vacinação, e muito mais!

Nossa API é composta por 4 entidades

'usuarios' que armazena todas as informações dos respectivos usuário da aplicação
## Entidades

- 'usuarios'
- 'notas'
- 'perguntas'
- 'comunicados'


## Entidades

![ENTIDADE_USUARIOS](https://raw.githubusercontent.com/Opseua/M5-GRU_FINAL_Case-2-Site-do-Meu-app/BRANCH_Orlando/src/views/login/ENTIDADE_USUARIOS.png)

![ENTIDADE_NOTAS](https://raw.githubusercontent.com/Opseua/M5-GRU_FINAL_Case-2-Site-do-Meu-app/BRANCH_Orlando/src/views/login/ENTIDADE_NOTAS.png)

![ENTIDADE_PERGUNTAS](https://raw.githubusercontent.com/Opseua/M5-GRU_FINAL_Case-2-Site-do-Meu-app/BRANCH_Orlando/src/views/login/ENTIDADE_PERGUNTAS.png)

![ENTIDADE_COMUNICADOS](https://raw.githubusercontent.com/Opseua/M5-GRU_FINAL_Case-2-Site-do-Meu-app/BRANCH_Orlando/src/views/login/ENTIDADE_COMUNICADOS.png)


## API Rest

GetAll 'usuarios'

```bash
{
    "data": [
        {
            "usuario_id": 1,
            "usuario_nome": "Orlando",
            "usuario_genero": "Masculino",
            "usuario_nascimento": "2001-01-01T02:00:00.000Z",
            "usuario_peso": "75.2",
            "usuario_altura": "1.85",
            "usuario_tipo_sanguineo": "A+",
            "usuario_imc": "25.41",
            "usuario_email": "orlando@gmail.com",
            "usuario_senha": "d0401f7ad4fc4db75a9c9f76bef3f630946a82e8",
            "usuario_reset_pergunta": "Comida favorita?",
            "usuario_reset_resposta": "maça",
            "usuario_extra": "{\"inf_1\":\"Essa é a informação adicional 1\",\"inf_2\":\"Essa é a informação adicional 2\",\"inf_3\":\"Essa é a informação adicional 3\"}",
            "usuario_status": "on"
        },
        {
            "usuario_id": 2,
            "usuario_nome": "Thiago",
            "usuario_genero": "Masculino",
            "usuario_nascimento": "2002-02-02T02:00:00.000Z",
            "usuario_peso": "80.6",
            "usuario_altura": "1.73",
            "usuario_tipo_sanguineo": "O-",
            "usuario_imc": "35.61",
            "usuario_email": "thiago@gmail.com",
            "usuario_senha": "032c63503cc890b0e5918db424076f8d104a95a7",
            "usuario_reset_pergunta": "Cor favorita?",
            "usuario_reset_resposta": "azul",
            "usuario_extra": "{\"inf_1\":\"Essa é a informação adicional 1\",\"inf_2\":\"Essa é a informação adicional 2\",\"inf_3\":\"Essa é a informação adicional 3\"}",
            "usuario_status": "on"
        }
    ]
}
```
    

GetAll 'notas'

```bash
"data": [
        {
            "nota_id": 1,
            "nota_titulo": "Consultas marcadas",
            "nota_informacao": "15/02/2023 consulta no Centro do RJ com o Dr Marcelo, para checar a minha coluna",
            "nota_ultima_edicao": "2001-01-01T14:27:00.000Z",
            "usuario_id": 1
        },
        {
            "nota_id": 2,
            "nota_titulo": "Remédios para tomar",
            "nota_informacao": "Tomar o remédio para diabetes nesses horários 12:00, 22:00, 04:00",
            "nota_ultima_edicao": "2002-02-02T15:12:00.000Z",
            "usuario_id": 1
        }
    ]
}
```
        


GetAll 'perguntas'

```bash
{
    "data": [
        {
            "pergunta_id": 1,
            "pergunta_pergunta": "Qual seu peso?"
        },
        {
            "pergunta_id": 2,
            "pergunta_pergunta": "Qual sua altura?"
        },
        {
            "pergunta_id": 3,
            "pergunta_pergunta": "Qual seu tipo sanguineo?"
        }
    ]
}
```




GetAll 'comunicados'

```bash
{
    "data": [
        {
            "comunicado_id": 1,
            "comunicado_genero": "Feminino",
            "comunicado_informacao": "você sabe fazer o auto exame?",
            "comunicado_feedback": "beleza!é isso aí, mantenha a saúde em dia!",
            "comunicado_link": "https://www.inca.gov.br/noticias/confira-recomendacoes-do-ministerio-da-saude-para-o-rastreamento-do-cancer-de-mama"
        },
        {
            "comunicado_id": 2,
            "comunicado_genero": "Feminino",
            "comunicado_informacao": "Gostaria de fazer mais sobre o câncer de mama",
            "comunicado_feedback": "Tudo bem! quem sabe no futuro!?",
            "comunicado_link": "https://www.gov.br/inca/pt-br/assuntos/gestor-e-profissional-de-saude/controle-do-cancer-de-mama/dados-e-numeros/mamografias-no-sus"
        }
    ]
}
```
