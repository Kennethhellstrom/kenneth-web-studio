'use client';
import { Button, Checkbox, Input, Radio, RadioGroup, Spacer, Textarea } from '@nextui-org/react';
import { useActionState, useState } from 'react';
import { RegistrarCliente, State } from '@/lib/actions';
import { ButtonSubmit } from './ButtonSubmit';

export default function FormOrcamento() {
  const [hasWebsite, setHasWebsite] = useState<'sim' | 'nao' | null>(null);
  const [hasPhotos, setHasPhotos] = useState<'sim' | 'nao' | null>(null);
  const [phone, setPhone] = useState<string>('');

  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(RegistrarCliente, initialState);

  const handleRadioChange = (setter: React.Dispatch<React.SetStateAction<'sim' | 'nao' | null>>) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setter(e.target.value as 'sim' | 'nao');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 15);
    setPhone(value);
  };

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          name="nome"
          label="Nome"
          placeholder="Digite seu nome"
          fullWidth
          aria-describedby="nome-error"
        />
        <div id="nome-error" aria-live="polite" aria-atomic="true">
          {state.errors?.nome && state.errors.nome.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>

        <Input
          name="sobrenome"
          label="Sobrenome"
          placeholder="Digite seu sobrenome"
          fullWidth
          aria-describedby="sobrenome-error"
        />
        <div id="sobrenome-error" aria-live="polite" aria-atomic="true">
          {state.errors?.sobrenome && state.errors.sobrenome.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>

        <div className="flex gap-4 md:gap-4">
          <div className="flex-1">
            <Input
              name="email"
              label="E-mail"
              placeholder="Digite seu e-mail"
              type="email"
              aria-describedby="email-error"
            />
            <div id="email-error" aria-live="polite" aria-atomic="true">
              {state.errors?.email && state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <Input
              name="telefone"
              label="Telefone"
              placeholder="Digite seu telefone"
              aria-describedby="telefone-error"
              onChange={handlePhoneChange}
            />
            <div id="telefone-error" aria-live="polite" aria-atomic="true">
              {state.errors?.telefone && state.errors.telefone.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold">Quais serviços você teria interesse?</h3>
      <div className="flex flex-wrap gap-4">
        {['landingpage', 'portfolio', 'email', 'suporte'].map((service) => (
          <Checkbox
            key={service}
            className="flex-shrink-0"
            name="servicos_interesse"
            value={service}
          >
            {service.charAt(0).toUpperCase() + service.slice(1).replace('page', ' Page')}
          </Checkbox>
        ))}
      </div>

      <RadioGroup
        label="Você possui fotos profissionais para o site?"
        value={hasPhotos ?? 'sim'}
        name='possui_fotos'
        onChange={handleRadioChange(setHasPhotos)}
      >
        <Radio value="sim">Sim</Radio>
        <Radio value="nao">Não</Radio>
      </RadioGroup>

      {hasPhotos === 'nao' && (
        <RadioGroup
          name='incluir_no_orcamento'
          label="Gostaria de incluir no orçamento?"
        >
          <Radio value="sim">Sim</Radio>
          <Radio value="nao">Não</Radio>
        </RadioGroup>
      )}

      <RadioGroup
        label="Você já possui um site?"
        name='hasWebsite'
        value={hasWebsite ?? 'nao'}
        onChange={handleRadioChange(setHasWebsite)}
      >
        <Radio value="sim">Sim</Radio>
        <Radio value="nao">Não</Radio>
      </RadioGroup>

      {hasWebsite === 'sim' && (
        <Input
          name="website"
          label="Por favor, digite o endereço do site"
          placeholder="www.seusite.com"
          fullWidth
          aria-describedby="website-error"
        />
      )}
      <div id="website-error" aria-live="polite" aria-atomic="true">
        {state.errors?.endereco_site && state.errors.endereco_site.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
      </div>

      <Textarea
        name="descricao"
        label="Descrição"
        placeholder="Digite aqui suas ideias para o site"
        aria-describedby="descricao-error"
        className='w-7/12'
      />
      <div id="descricao-error" aria-live="polite" aria-atomic="true">
        {state.errors?.descricao && state.errors.descricao.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
      </div>

      <Checkbox name="notificacoes" value="on">
        Gostaria de receber novidades e atualizações
      </Checkbox>

      {/* Botão de Envio em um div separado e centralizado */}
      <div className="flex justify-start mt-6">
        <ButtonSubmit type="submit" color='primary' className="w-auto">Enviar</ButtonSubmit>
      </div>
      <div
        aria-live="polite"
        aria-atomic="true"
        className={`transition-opacity duration-300 ease-in-out ${state.message ? 'opacity-100' : 'opacity-0'
          } mt-4 flex items-center max-w-md rounded-lg bg-green-50 p-4 shadow-lg border-l-4 border-green-400`}
      >
        {state.message && (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-600 mr-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 11.586 7.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-green-800 text-sm font-semibold">{state.message}</p>
          </>
        )}
      </div>
    </form>
  );
}
