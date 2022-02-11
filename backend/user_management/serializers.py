from rest_framework.exceptions import ValidationError
from rest_framework.fields import EmailField, CharField
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password


class RegisterSerializer(ModelSerializer):
    """
    Serializer usado para converter informações contidas em um request body para um objeto do tipo User
    """
    email = EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    # aqui é estabelecido que o campo password é obrigatório, e que deve ser validado pela funcao validade_password
    password = CharField(write_only=True, required=True, validators=[validate_password])
    password2 = CharField(write_only=True, required=True)

    class Meta:
        """
        Método que define o tipo de modelo que esse serializer gera e gerencia
        """
        model = User
        fields = ('username', 'password', 'password2', 'email', 'first_name', 'last_name')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }

    def validate(self, data):
        """
        Método chamado para validar se as senhas informadas são iguais
        :param data:
        :return:
        """
        if data['password'] != data['password2']:
            raise ValidationError({"password": "Password fields didn't match."})

        return data

    def create(self, validated_data):
        """
        Método chamada para criar um usuário com os dados contidos no dict validated_data. Esse método assume que a
        verificação dos dados já foi realizada
        """
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user
