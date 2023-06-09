export interface Facility {
  codigo_cnes: number;
  numero_cnpj_entidade: string | null;
  nome_razao_social: string | null;
  nome_fantasia: string | null;
  natureza_organizacao_entidade: string | null;
  tipo_gestao: string | null;
  descricao_nivel_hierarquia: string | null;
  descricao_esfera_administrativa: string | null;
  codigo_tipo_unidade: number | null;
  codigo_cep_estabelecimento: string | null;
  endereco_estabelecimento: string | null;
  numero_estabelecimento: string | null;
  bairro_estabelecimento: string | null;
  numero_telefone_estabelecimento: string | null;
  latitude_estabelecimento_decimo_grau: number | null;
  longitude_estabelecimento_decimo_grau: number | null;
  endereco_email_estabelecimento: string | null;
  numero_cnpj: string | null;
  codigo_identificador_turno_atendimento: string | null;
  descricao_turno_atendimento: string | null;
  estabelecimento_faz_atendimento_ambulatorial_sus: string | null;
  codigo_estabelecimento_saude: string | null;
  codigo_uf: number | null;
  codigo_municipio: number | null;
  descricao_natureza_juridica_estabelecimento: string | null;
  codigo_motivo_desabilitacao_estabelecimento: string | null;
  estabelecimento_possui_centro_cirurgico: number | null;
  estabelecimento_possui_centro_obstetrico: number | null;
  estabelecimento_possui_centro_neonatal: number | null;
  estabelecimento_possui_atendimento_hospitalar: number | null;
  estabelecimento_possui_servico_apoio: number | null;
  estabelecimento_possui_atendimento_ambulatorial: number | null;
  codigo_atividade_ensino_unidade: string | null;
  codigo_natureza_organizacao_unidade: number | null;
  codigo_nivel_hierarquia_unidade: number | null;
  codigo_esfera_administrativa_unidade: number | null;
}

export interface FacilityResponse {
  estabelecimentos: Facility[];
}
