import Pagina from '@/components/Pagina'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import cursoValidator from '@/validators/cursoValidator'
import { mask } from 'remask';


const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors }, setValue} = useForm()

    function salvar(dados) {
        const cadastros = JSON.parse(window.localStorage.getItem('cadastros')) || []
        cadastros.push(dados)
        window.localStorage.setItem('cadastros', JSON.stringify(cadastros))
        push('/cadastros')
    }

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const mascara = event.target.getAttribute('mask');
        setValue(name, mask(value, mascara));
      }

    return (
        <Pagina titulo="Curso">
            <Form>
            <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF: </Form.Label>
                    <Form.Control 
                    mask="999.999.999-99"
                    type="text" 
                    placeholder='insira seu CPF:' 
                    {...register('cpf', cursoValidator.cpf)}
                    onChange={handleChange} 
                    isInvalid={errors.cpf}/>
                    
                    {
                        errors.cpf &&
                        <small className='error-message bg-danger text-white'>{errors.cpf.message}</small>
                    }
                </Form.Group>

            <Form.Group className="mb-3" controlId="cnpj">
                    <Form.Label>CNPJ: </Form.Label>
                    <Form.Control 
                    mask="99.999.999/0001-99"
                    type="text" 
                    placeholder='insira seu CNPJ:' 
                    {...register('cnpj', cursoValidator.cnpj)}
                    onChange={handleChange} 
                    isInvalid={errors.cnpj}/>
                    {
                        errors.cnpj &&
                        <small className='error-message bg-danger text-white'>{errors.cnpj.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder='insira seu nome:' 
                    {...register('nome', cursoValidator.nome)} 
                    isInvalid={errors.nome}/>
                    {
                        errors.nome &&
                        <small className='error-message bg-danger text-white'>{errors.nome.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="duracao">
                    <Form.Label>Duração: </Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder='Insira a duração:' 
                    {...register('duracao', cursoValidator.duracao)}  
                    isInvalid={errors.duracao}/>
                    {
                        errors.duracao &&
                        <small className='error-message bg-danger text-white'>{errors.duracao.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Modalidade: </Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder='Insira a modalidade:'
                    {...register('modalidade', cursoValidator.modalidade)}  
                    isInvalid={errors.modalidade}/>
                    {
                        errors.modalidade &&
                        <small className='error-message bg-danger text-white'>{errors.modalidade.message}</small>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/cadastros">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form