CREATE OR REPLACE FUNCTION VERIFICA_PAC()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT' OR TG_OP = 'UPDATE') THEN
        IF NEW.CPF IS NULL OR NEW.CPF = '' THEN
            RAISE EXCEPTION 'O CPF do paciente não pode ser nulo ou vazio.';
        END IF;
		IF EXISTS(SELECT CPF FROM PACIENTE WHERE CPF ILIKE NEW.CPF) THEN
            RAISE EXCEPTION 'Um paciente já foi registrado nesse CPF.';
        END IF;
        IF NEW.NOME IS NULL OR NEW.NOME = '' THEN
            RAISE EXCEPTION 'O nome do paciente não pode ser nulo ou vazio.';
        END IF;
        IF NEW.CONTATO IS NULL OR NEW.CONTATO = '' THEN
            RAISE EXCEPTION 'O contato do paciente não pode ser nulo ou vazio.';
        END IF;
        IF NEW.ENDERECO IS NULL OR NEW.ENDERECO = '' THEN
            RAISE EXCEPTION 'O endereço do paciente não pode ser nulo ou vazio.';
        END IF;

        IF LENGTH(NEW.CPF) > 11 THEN
            RAISE EXCEPTION 'O CPF do paciente excede o limite de 11 caracteres.';
        END IF;
        IF LENGTH(NEW.NOME) > 50 THEN
            RAISE EXCEPTION 'O nome do paciente excede o limite de 50 caracteres.';
        END IF;
        IF LENGTH(NEW.CONTATO) > 15 THEN
            RAISE EXCEPTION 'O contato do paciente excede o limite de 15 caracteres.';
        END IF;
        IF LENGTH(NEW.ENDERECO) > 100 THEN
            RAISE EXCEPTION 'O endereço do paciente excede o limite de 100 caracteres.';
        END IF;
    END IF;

    IF TG_OP = 'DELETE' THEN
		IF EXISTS (SELECT COD_PAC FROM CONSULTA WHERE COD_PAC = OLD.COD_PAC) OR EXISTS
				  (SELECT COD_PAC FROM INTERNACAO WHERE COD_PAC = OLD.COD_PAC) OR EXISTS
				  (SELECT COD_PAC FROM PROCEDIMENTO WHERE COD_PAC = OLD.COD_PAC) THEN
        DELETE FROM CONSULTA WHERE COD_PAC = OLD.COD_PAC;
        DELETE FROM INTERNACAO WHERE COD_PAC = OLD.COD_PAC;
		DELETE FROM PROCEDIMENTO WHERE COD_PAC = OLD.COD_PAC;
		END IF;
		RETURN OLD;
    END IF;

    RETURN NEW;
END;
$$
LANGUAGE PLPGSQL;

CREATE OR REPLACE FUNCTION VERIFICA_MEDICAMENTO()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT' OR TG_OP = 'UPDATE') THEN
        IF NEW.NOME IS NULL OR NEW.NOME = '' THEN
            RAISE EXCEPTION 'O nome do medicamento não pode ser nulo ou vazio.';
        END IF;

        IF LENGTH(NEW.NOME) > 50 THEN
            RAISE EXCEPTION 'O nome do medicamento excede o limite de 50 caracteres.';
        END IF;

        IF NEW.BULA IS NOT NULL AND LENGTH(NEW.BULA) > 255 THEN
            RAISE EXCEPTION 'A bula do medicamento excede o limite de 255 caracteres.';
        END IF;
    END IF;

    IF TG_OP = 'DELETE' THEN
        IF EXISTS (SELECT 1 FROM ITEM_MED WHERE COD_MED = OLD.COD_MED) THEN
            DELETE FROM ITEM_MED WHERE COD_MED = OLD.COD_MED;
        END IF;
        
        IF EXISTS (SELECT 1 FROM PM WHERE COD_MED = OLD.COD_MED) THEN
            DELETE FROM PM WHERE COD_MED = OLD.COD_MED;
        END IF;
		RETURN OLD;
    END IF;

    RETURN NEW;
END;
$$
LANGUAGE PLPGSQL;

CREATE OR REPLACE FUNCTION VERIFICA_FUNCIONARIO()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT' OR TG_OP = 'UPDATE') THEN
        IF NEW.NOME IS NULL OR NEW.NOME = '' THEN
            RAISE EXCEPTION 'O nome do funcionário não pode ser nulo ou vazio.';
        END IF;
        IF NEW.CPF IS NULL OR NEW.CPF = '' THEN
            RAISE EXCEPTION 'O CPF do funcionário não pode ser nulo ou vazio.';
        END IF;
        
        IF LENGTH(NEW.NOME) > 50 THEN
            RAISE EXCEPTION 'O nome do funcionário excede o limite de 50 caracteres.';
        END IF;
        IF LENGTH(NEW.CPF) > 11 THEN
            RAISE EXCEPTION 'O CPF do funcionário excede o limite de 11 caracteres.';
        END IF;
    END IF;

    IF TG_OP = 'DELETE' THEN
        IF EXISTS (SELECT 1 FROM PROCEDIMENTO WHERE COD_FUNC = OLD.COD_FUNC) THEN
            DELETE FROM PROCEDIMENTO WHERE COD_FUNC = OLD.COD_FUNC;
        END IF;
		    RETURN OLD;
    END IF;

    RETURN NEW;
END;
$$
LANGUAGE PLPGSQL;

CREATE OR REPLACE FUNCTION VERIFICA_ITEM_MED()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT' OR TG_OP = 'UPDATE') THEN
        IF NEW.QUANTIDADE IS NULL THEN
            RAISE EXCEPTION 'A quantidade do item médico não pode ser nula.';
        END IF;
        
        IF NEW.QUANTIDADE <= 0 THEN
            RAISE EXCEPTION 'A quantidade do item médico deve ser maior que zero.';
        END IF;
    END IF;

    IF TG_OP = 'DELETE' THEN
	    RETURN OLD;
    END IF;

    RETURN NEW;
END;
$$
LANGUAGE PLPGSQL;

CREATE OR REPLACE FUNCTION VERIFICA_CARGO()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT' OR TG_OP = 'UPDATE') THEN
        IF NEW.NOME IS NULL OR NEW.NOME = '' THEN
            RAISE EXCEPTION 'O nome do cargo não pode ser nulo ou vazio.';
        END IF;
        
        IF NEW.SALARIO IS NULL OR NEW.SALARIO <= 0 THEN
            RAISE EXCEPTION 'O salário do cargo não pode ser nulo ou menor que zero.';
        END IF;

        IF LENGTH(NEW.NOME) > 50 THEN
            RAISE EXCEPTION 'O nome do cargo excede o limite de 50 caracteres.';
        END IF;
    END IF;

    IF TG_OP = 'DELETE' THEN
        IF EXISTS (SELECT 1 FROM FUNCIONARIO WHERE COD_CARGO = OLD.COD_CARGO) THEN
            DELETE FROM FUNCIONARIO WHERE COD_CARGO = OLD.COD_CARGO;
        END IF;
		   RETURN OLD;
    END IF;

    RETURN NEW;
END;
$$
LANGUAGE PLPGSQL;

CREATE OR REPLACE FUNCTION VERIFICA_SERVICO()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT' OR TG_OP = 'UPDATE') THEN
        IF NEW.NOME IS NULL OR NEW.NOME = '' THEN
            RAISE EXCEPTION 'O nome do serviço não pode ser nulo ou vazio.';
        END IF;

        IF NEW.PRECO IS NULL OR NEW.PRECO <= 0 THEN
            RAISE EXCEPTION 'O preço do serviço não pode ser nulo ou menor que zero.';
        END IF;

        IF LENGTH(NEW.NOME) > 50 THEN
            RAISE EXCEPTION 'O nome do serviço excede o limite de 50 caracteres.';
        END IF;
    END IF;

    IF TG_OP = 'DELETE' THEN
        IF EXISTS (SELECT 1 FROM PROCEDIMENTO WHERE COD_SERVICO = OLD.COD_SERVICO) THEN
            DELETE FROM PROCEDIMENTO WHERE COD_SERVICO = OLD.COD_SERVICO;
        END IF;
		    RETURN OLD;
    END IF;

    RETURN NEW;
END;
$$
LANGUAGE PLPGSQL;

CREATE OR REPLACE FUNCTION VERIFICA_MEDICO()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT' OR TG_OP = 'UPDATE') THEN
        IF NEW.NOME IS NULL OR NEW.NOME = '' THEN
            RAISE EXCEPTION 'O nome do médico não pode ser nulo ou vazio.';
        END IF;
        
        IF NEW.CPF IS NULL OR NEW.CPF = '' THEN
            RAISE EXCEPTION 'O CPF do médico não pode ser nulo ou vazio.';
        END IF;

        IF LENGTH(NEW.NOME) > 50 THEN
            RAISE EXCEPTION 'O nome do médico excede o limite de 50 caracteres.';
        END IF;
        IF LENGTH(NEW.CPF) > 11 THEN
            RAISE EXCEPTION 'O CPF do médico excede o limite de 11 caracteres.';
        END IF;
    END IF;

    IF TG_OP = 'DELETE' THEN
        IF EXISTS (SELECT 1 FROM CONSULTA WHERE CRM = OLD.CRM) THEN
            DELETE FROM CONSULTA WHERE CRM = OLD.CRM;
        END IF;

        IF EXISTS (SELECT 1 FROM INTERNACAO WHERE CRM = OLD.CRM) THEN
            DELETE FROM INTERNACAO WHERE CRM = OLD.CRM;
			
        IF EXISTS (SELECT 1 FROM SUPERVISAO WHERE COD_SUPERVISOR = OLD.COD_SUPERVISOR) THEN
            RAISE EXCEPTION 'Não é possível deletar um médico associado a um supervisionado.';
        END IF;
		
        IF EXISTS (SELECT 1 FROM SUPERVISAO WHERE COD_SUPERVISIONA = OLD.COD_SUPERVISIONA) THEN
            RAISE EXCEPTION 'Não é possível deletar um médico associado a um supervisor.';
        END IF;
        END IF;
		    RETURN OLD;
    END IF;

    RETURN NEW;
END;
$$
LANGUAGE PLPGSQL;

CREATE OR REPLACE FUNCTION VERIFICA_PLANO()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT' OR TG_OP = 'UPDATE') THEN
        IF NEW.NOME IS NULL OR NEW.NOME = '' THEN
            RAISE EXCEPTION 'O nome do plano não pode ser nulo ou vazio.';
        END IF;

        IF NEW.VALOR_CON IS NULL OR NEW.VALOR_CON <= 0 THEN
            RAISE EXCEPTION 'O valor de consulta do plano não pode ser nulo ou menor que zero.';
        END IF;

        IF NEW.VALOR_INT < 0 THEN
            RAISE EXCEPTION 'O valor de internação do plano não pode ser menor que zero.';
        END IF;

        IF LENGTH(NEW.NOME) > 50 THEN
            RAISE EXCEPTION 'O nome do plano excede o limite de 50 caracteres.';
        END IF;
    END IF;

    IF TG_OP = 'DELETE' THEN
        IF EXISTS (SELECT 1 FROM CONSULTA WHERE COD_PLANO = OLD.COD_PLANO) THEN
            DELETE FROM CONSULTA WHERE COD_PLANO = OLD.COD_PLANO;
        END IF;

        IF EXISTS (SELECT 1 FROM INTERNACAO WHERE COD_PLANO = OLD.COD_PLANO) THEN
            DELETE FROM INTERNACAO WHERE COD_PLANO = OLD.COD_PLANO;
        END IF;
		    RETURN OLD;
    END IF;

    RETURN NEW;
END;
$$
LANGUAGE PLPGSQL;

CREATE OR REPLACE FUNCTION VERIFICA_CONSULTA()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT' OR TG_OP = 'UPDATE') THEN
        IF NEW.MOTIVO IS NULL OR NEW.MOTIVO = '' THEN
            RAISE EXCEPTION 'O motivo da consulta não pode ser nulo ou vazio.';
        END IF;

        IF NEW.DT_PREV_CONSULTA IS NULL THEN
            RAISE EXCEPTION 'A data prevista da consulta não pode ser nula.';
        END IF;

        IF LENGTH(NEW.MOTIVO) > 100 THEN
            RAISE EXCEPTION 'O motivo da consulta excede o limite de 100 caracteres.';
        END IF;
    END IF;

    IF TG_OP = 'DELETE' THEN
	    RETURN OLD;
    END IF;

    RETURN NEW;
END;
$$
LANGUAGE PLPGSQL;

CREATE OR REPLACE FUNCTION VERIFICA_PM()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT' OR TG_OP = 'UPDATE') THEN
        IF NEW.PRECO IS NULL OR NEW.PRECO <= 0 THEN
            RAISE EXCEPTION 'O preço da combinação plano-medicamento não pode ser nulo ou menor que zero.';
        END IF;
    END IF;

    IF TG_OP = 'DELETE' THEN
        IF EXISTS (SELECT 1 FROM INTERNACAO WHERE COD_PM = OLD.COD_PM) THEN
            DELETE FROM INTERNACAO WHERE COD_PM = OLD.COD_PM;
        END IF;
		    RETURN OLD;
    END IF;

    RETURN NEW;
END;
$$
LANGUAGE PLPGSQL;

CREATE OR REPLACE FUNCTION VERIFICA_APARTAMENTO()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT' OR TG_OP = 'UPDATE') THEN
        IF NEW.LOCALIZACAO IS NULL OR NEW.LOCALIZACAO = '' THEN
            RAISE EXCEPTION 'A localização do apartamento não pode ser nula ou vazia.';
        END IF;

        IF LENGTH(NEW.LOCALIZACAO) > 50 THEN
            RAISE EXCEPTION 'A localização do apartamento excede o limite de 50 caracteres.';
        END IF;
    END IF;

    IF TG_OP = 'DELETE' THEN
        IF EXISTS (SELECT 1 FROM INTERNACAO WHERE NUMERO = OLD.NUMERO) THEN
            DELETE FROM INTERNACAO WHERE NUMERO = OLD.NUMERO;
        END IF;
		    RETURN OLD;
    END IF;

    RETURN NEW;
END;
$$
LANGUAGE PLPGSQL;

CREATE OR REPLACE FUNCTION VERIFICA_INTERNACAO()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT' OR TG_OP = 'UPDATE') THEN
        IF NEW.DT_INTERNA IS NULL THEN
            RAISE EXCEPTION 'A data de início da internação não pode ser nula.';
        END IF;

    END IF;

    IF TG_OP = 'DELETE' THEN
	    RETURN OLD;
    END IF;

    RETURN NEW;
END;
$$
LANGUAGE PLPGSQL;

CREATE OR REPLACE FUNCTION VERIFICA_PROCEDIMENTO()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT' OR TG_OP = 'UPDATE') THEN
        IF NEW.COD_FUNC IS NULL THEN
            RAISE EXCEPTION 'O código do funcionário não pode ser nulo.';
        END IF;
        IF NEW.COD_SERVICO IS NULL THEN
            RAISE EXCEPTION 'O código do serviço não pode ser nulo.';
        END IF;
        IF NEW.COD_PAC IS NULL THEN
            RAISE EXCEPTION 'O código do paciente não pode ser nulo.';
        END IF;
        IF NEW.DT_ATEND IS NULL THEN
            RAISE EXCEPTION 'A data de atendimento não pode ser nula.';
        END IF;
        IF NEW.VALOR IS NULL THEN
            RAISE EXCEPTION 'O valor do procedimento não pode ser nulo.';
        END IF;

        IF LENGTH(NEW.VALOR::TEXT) > 10 THEN
            RAISE EXCEPTION 'O valor do procedimento excede o limite de 10 caracteres.';
        END IF;
    END IF;

    IF TG_OP = 'DELETE' THEN
		    RETURN OLD;
    END IF;

    RETURN NEW;
END;
$$
LANGUAGE PLPGSQL;

CREATE OR REPLACE FUNCTION VERIFICA_SUPERVISAO()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT' OR TG_OP = 'UPDATE') THEN
        IF NEW.COD_SUPERVISOR IS NULL THEN
            RAISE EXCEPTION 'O código do supervisor não pode ser nulo.';
        END IF;
        IF NEW.COD_SUPERVISIONA IS NULL THEN
            RAISE EXCEPTION 'O código do supervisionado não pode ser nulo.';
        END IF;
    END IF;

    IF TG_OP = 'DELETE' THEN
	    RETURN OLD;
    END IF;

    RETURN NEW;
END;
$$
LANGUAGE PLPGSQL;

INSERT INTO PACIENTE VALUES(DEFAULT, '1234', 'NOME', 'CONTATO', 'ENDERECO')
SELECT INSERIR_LINHA('PACIENTE', '122934', 'NOME', 'CONTATO', 'ENDERECO')
SELECT REMOVER_LINHA('PACIENTE', '2');
SELECT * FROM PACIENTE;
SELECT * FROM PACIENTE;

