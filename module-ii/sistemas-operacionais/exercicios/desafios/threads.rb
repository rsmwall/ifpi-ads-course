# Definir uma função para a primeira thread
def thread1
  5.times do |i|
    puts "Thread 1: Iteração #{i + 1}"
    sleep(rand(1..3)) # Dorme por um tempo aleatório entre 1 e 3 segundos
  end
end

# Definir uma função para a segunda thread
def thread2
  5.times do |i|
    puts "Thread 2: Iteração #{i + 1}"
    sleep(rand(1..3)) # Dorme por um tempo aleatório entre 1 e 3 segundos
  end
end

# Criação das threads
t1 = Thread.new { thread1 }
t2 = Thread.new { thread2 }

# Espera pelas threads terminarem
t1.join
t2.join

puts 'Programa finalizado!'
