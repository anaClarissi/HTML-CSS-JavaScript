from random import randint
from time import sleep

# DICIONÁRIOS E LISTAS
jogadores = {}

# TABELA DE INICIO
print('='* 20)
print(f'{"JOGO DOS DADOS":^20}')
print('=' * 20)

# JOGADORES
for i in range(1, 4):
    nome = str(input(f'Jogador {i}: '))
    jogadores[nome] = {'dados': [] , 'total': 0}

# RODADAS
rodadas = int(input('Quantas rodadas? '))

# FUNÇÃO PARA RODAR OS DADOS
def jogar_dados(jogador):
    print('=' * 20)
    print(f'O jogador {jogador} está jogando...')
    sleep(1.5)
    for i in range(rodadas):
        dado = randint(1, 6)
        jogadores[jogador]['dados'].append(dado)
        print(f'{i + 1}ª rodada: {dado}')
        sleep(1)
        jogadores[jogador]['total'] = sum(jogadores[jogador]['dados'])
    print('=' * 20)


# EXECUTAR O JOGO
for jogador in jogadores:
    jogar_dados(jogador)

# RANKING
print('=' * 20)
print(f'{"RANKING":^20}')
print('=' * 20)

ranking = sorted(jogadores.items(), key= lambda x: x[1]['total'], reverse= True)

for i, (jogador, pontos) in enumerate(ranking, start=1):
    print(f'{i}° {jogador}: {pontos["total"]}')
print('=' * 20)


