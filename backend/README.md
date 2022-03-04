# Como rodar o backend

### Criando um ambiente virtual
No primeiro diretório ```backend``` do projeto crie um ambiente virtual pelo terminal com o seguinte:
```
python3 -m venv venv
```
Após criado, para ativá-lo no linux:
```
source venv/bin/activate
```
Para ativá-lo no windows:
```
venv\Scripts\activate
```
Com o ambiente virtual ativado instale as dependências do projeto:
```
pip3 install -r requirements.txt
```
Após ativar o ambiente crie a base de dados com:
```
python3 manage.py migrate
```
Por fim, para iniciar o servidor execute:
```
python3 manage.py runserver
```
O backend estará disponível em [aqui](http://localhost:8000/). Para testar a conexão realize um curl ou acesse
diretamente esse [endpoint](http://localhost:8000/example/public_hello/).
```
curl --location --request GET 'http://localhost:8000/example/public_hello'
```

### Estrutura do projeto
- O diretório `backend ` contém o código do servidor backend em si. Nele se encontram os arquivos onde
as configurações do servidor são ajustadas.
- O arquivo `manage.py` é o script pelo qual o servidor é iniciado.
- Os outros diretórios contém os apps. Os apps representam as funcionalidades do servidor, como criação de usuários e
outros tipos  de funcionalidades pertinentes para o sistema.

### Criando um usuário
Para realizar a criação de um usuário execute o requisição que seja equivalente ao seguinte
comando curl:
```
curl --location --request POST 'http://localhost:8000/user/register/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "test_user",
    "password": "gostosa1234",
    "password2": "gostosa1234",
    "email": "test@ufsc.br",
    "first_name": "Joao",
    "last_name": "Teste"
}'
```
Caso o processo tenha sido executado com sucesso será retornado um jason da seguinte maneira:
```
{
    "username": "test_user",
    "email": "test@ufsc.br",
    "first_name": "Joao",
    "last_name": "Teste"
}
```

###Acessando endpoints protegidos
Alguns endpoints podem ser protegidos contra acesso não autenticado. Para acessar esse endpoints
deve-se obter um token através do endpoint http://localhost:8000/api_token_auth/. Para obter um token
realize uma requisição que seja semelhante ao seguinte comando curl:
```
curl --location --request POST 'http://localhost:8000/api-token-auth/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "test_user",
    "password": "gostosa1234"
}'
```
Se as informações estiverem corretas o servidor retornará um token da seguinte maneira:
```
{
    "token": "bdae8b97d02e1cb701e795ffe021b769ba0986d0"
}
```
Para utilizar esse token em um endpoint protegido adicione-o aos headers do request. Um exemplo
é o comando curl abaixo:
```
curl --location --request GET 'http://localhost:8000/example/protected_hello/' \
--header 'Authorization: Token bf781d1ff88185315ac5f128805f95757cfbe0c6'
```
