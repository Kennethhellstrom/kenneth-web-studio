'use server'
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const FormOrcamentoSchema = z.object({
    nome: z.string().min(1, { message: 'Por favor, digite seu nome.' }),
    sobrenome: z.string().min(1, { message: 'Por favor, digite seu sobrenome.' }),
    email: z
        .string()
        .email({ message: 'Por favor, digite um e-mail válido.' })
        .nonempty({ message: 'O campo de e-mail é obrigatório.' }),
    telefone: z
        .string()
        .regex(/^(?:\(\d{2}\) \d{5}-\d{4}|\d{11})$/, { message: 'Por favor, insira um telefone válido.' }),
    servicos_interesse: z.array(
        z.enum(['landingpage', 'portfolio', 'email', 'suporte'], {
            invalid_type_error: 'Selecione pelo menos um serviço.',
        })
    ),
    possui_fotos: z.boolean({
        invalid_type_error: 'Por favor, escolha uma opção.',
    }),
    incluir_no_orcamento: z.enum(['sim', 'nao'], {
        invalid_type_error: 'Por favor, escolha uma opção.',
    })
    .transform((val) => (val === 'sim' ? true : false)), // Muda a transformação para retornar apenas true ou false

    possui_site: z.boolean({
        invalid_type_error: 'Por favor, escolha uma opção.',
    }),
    endereco_site: z
        .string()
        
        .nullable()
        .optional(),
    descricao: z
        .string()
        .min(1, { message: 'Por favor, forneça uma descrição para o projeto.' }),
    receber_novidades: z.boolean().optional(),
});



export type State = {
    errors?: {
        nome?: string[];
        sobrenome?: string[];
        email?: string[];
        telefone?: string[];
        servicos_interesse?: string[];
        possui_fotos?: string[];
        incluir_no_orcamento?: string[];
        possui_site?: string[];
        endereco_site?: string[];
        descricao?: string[];
        receber_novidades?: string[];
    };
    message?: string | null;
};



export async function RegistrarCliente(prevState: State, formData: FormData) {

    try {

console.log("metodo começou")
    let prisma = new PrismaClient();
    const validatedFields = FormOrcamentoSchema.safeParse({
        nome: formData.get('nome')?.toString(),
        sobrenome: formData.get('sobrenome')?.toString(),
        email: formData.get('email')?.toString(),
        telefone: formData.get('telefone')?.toString(),
        servicos_interesse: formData.getAll('servicos_interesse').map((v) => v.toString()),
        possui_fotos: formData.get('possui_fotos') === 'sim', 
        incluir_no_orcamento: formData.get('incluir_no_orcamento')?.toString() || null, 
        possui_site: formData.get('hasWebsite') === 'sim'? true : false, 
        endereco_site: formData.get('website')?.toString() || null,
        descricao: formData.get('descricao')?.toString(),
        receber_novidades: formData.has('notificacoes'), 
    });
        console.log(validatedFields.data)
        console.log(validatedFields.data?.nome)
        console.log(formData.get('sobrenome'))
        console.log(formData.get('email'))
        console.log(formData.get('telefone'))
        console.log(formData.getAll('servicos_interesse'))
        console.log(formData.get('possui_fotos'))
        console.log(formData.get('incluir_no_orcamento'))
        console.log(formData.get('hasWebsite'))
        console.log(formData.get('website'))
        console.log(formData.get('descricao'))
        console.log(formData.has('notificacoes'))



        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
                message: 'Falha ao criar orçamento.',
            };
        }


        await prisma.cliente.create({
            data: {
                nome: validatedFields.data.nome,
                sobrenome: validatedFields.data.sobrenome,
                email: validatedFields.data.email,
                telefone: validatedFields.data.telefone,
                servicos_interesse: validatedFields.data.servicos_interesse,
                possui_fotos: validatedFields.data.possui_fotos,
                incluir_no_orcamento: validatedFields.data.incluir_no_orcamento,
                possui_site: validatedFields.data.possui_site,
                endereco_site: validatedFields.data.endereco_site,
                descricao: validatedFields.data.descricao,
                receber_novidades: validatedFields.data.receber_novidades,
            },
        });
        console.log("metodo finalizou")
        return { message: 'Solicitação enviada com sucesso!' }; 
    }


    catch (error) {
        console.error('Erro ao criar cliente:', error);
        return {
            message: 'Falha ao criar orçamento devido a um erro no servidor.',
        };
    } finally {
        let prisma = new PrismaClient();
        await prisma.$disconnect(); // Garante que a conexão seja fechada
    }
}