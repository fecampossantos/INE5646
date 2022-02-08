# Sheets'n Dragons
Sistema com propósito de gerenciar personagens de DnD, criado para trabalho na matéria de programação web (INE5646)

### Alunos
* Felipe de Campos Santos - 17200441  
* Enzo Gomes Sônego - 17202002  
* Bryan Martins Lima - 18100521  
* Arthur Moreira Rodrigues Alves - 17202296  

### Gestão
[Trello](https://trello.com/b/EobkBlns/prog-web)  
[Figma](https://www.figma.com/file/3sevFLC4XVbLsrV3H7JayY/INE5646---%C3%A9obraia?node-id=41%3A147)  

### Solução Geral
O sistema proposto tem como objetivo ser um repositório para “personagens” de DnD (Dungeons and Dragons), onde o usuário fará upload de um arquivo padronizado no formato PDF com as informações de seu personagem, essa informação será modelada como um objeto do sistema e ficará atrelada ao usuário, formando assim um compêndio de personagens do mesmo.  
O sistema pode ser escalado para:  
Um compêndio público de personagens, onde todos os usuários poderão ver os personagens de outros usuários;  
Uma ferramenta para ser usada durante o jogo, facilitando algumas ações no mesmo, como por exemplo o jogar de um dado, a “tradução” do número do dado em uma ação, entre outras.  

### Atividades Principais

Cadastro e Login  
Download do PDF padronizado  
Upload de PDF preenchido  
Visualizar lista de personagens cadastrados  

##### Atividades possíveis para o futuro, dado um prazo que possibilite a implementação:
Editar informações do personagem e baixar PDF atualizado deste  
Visualizar personagens de outros usuários  


### Diferencial da Proposta
O sistema de jogo DnD é conhecido pela sua construção “manual”, onde os participantes levam suas “planilhas” (sheets) de personagem de forma física para jogar. A plataforma servirá como um “deck de cartas de personagem”, facilitando a seleção de um personagem para o jogo.


### Público alvo
Pessoas que joguem DnD e pessoas que tenham interesse em começar a jogar

### Rodando o projeto localmente
_em breve_  

### Link para visualização
_em breve_

# Como rodar o backend

### Criando um ambiente virtual
No diretório base do projeto crie um ambiente virtual pelo terminal com o seguinte:
```
python3 -m venv venv
```
Após criado, para ativá-lo no linux:
```
source env/bin/activate
```
Para ativá-lo no windows:
```
env\Scripts\activate
```
Com o ambiente virtual ativado instale as dependências do projeto:
```
pip3 install -r requirements.txt
```
