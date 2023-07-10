const cursoValidator = {
    nome: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 3,
            message: 'A quantidade de caracteres mínima é 3'
        },
        maxLength: {
            value: 10,
            message: 'A quantidade de caracteres máxima é 10'
        }
    },
  
    duracao: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 2,
            message: 'A quantidade de caracteres máxima é 2'
        },
        min: {
            value: 5,
            message: 'O valor mínimo é 5'
        },
        max: {
            value: 12,
            message: 'O valor máximo é 12'
        }
    },
    modalidade: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 20,
            message: 'A quantidade de caracteres máxima é 20'
        },
    },
    cnpj:{
        required: 'o campo CNPJ é obrigatório',
        maxLength: {
            value:18,
            message: 'o maximo é de 18 caracteres!'
        },       
        pattern: {
            value: /[0-9]+$/,
            message: "Digite somente números!",
          },
    },
    cpf: {
        required: "o campo CPF é obrigatorio",
        maxLength: {
            value:14,
            message: 'o maximo é de 14 caracteres!'
        },       
        pattern: {
            value: /[0-9]+$/,
            message: "Digite somente números!",
          },
    }
}

export default cursoValidator