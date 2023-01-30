//terraform
let button1 = document.querySelector('.title_1');
let button2 = document.querySelector('.title_2');

let p1 = document.querySelector('.teamcity_text_p');
let p2 = document.querySelector('.teamcity_text_p');
let classTitle1 = document.querySelector('.title_1');
let classTitle2 = document.querySelector('.title_2');


button1.addEventListener('click', () => {
    p1.innerHTML = `<ul>
    <li>понимание для чего нужны pipeline'ы и как они выглядят</li>
    <li>понимание как должен выглядеть хороший пайлайн</li>
</ul>`;
classTitle2.classList.remove('title_active');
    classTitle1.classList.add('title_active');
    
}
)
button2.addEventListener('click', () => {
    p2.innerHTML = 
    `<ul>
    <li>умение работать с какой-либо CI/CD системой</li>
    <li>писать пайплайны</li>
    </ul>`
    classTitle1.classList.remove('title_active');
    classTitle2.classList.add('title_active');
}
)
//rabbitmq
let button3 = document.querySelector('.title_3');
let button4 = document.querySelector('.title_4');

let p3 = document.querySelector('.rabbitmq_text_p');
let p4 = document.querySelector('.rabbitmq_text_p');
let classTitle3 = document.querySelector('.title_3');
let classTitle4 = document.querySelector('.title_4');

button3.addEventListener('click', () => {
    p3.innerHTML = `<ul>
    <li>Exchanges</li> 
    <li>Queues</li> 
    <li>Bindings</li> 
    <li>Как происходит миграция схемы</li>
    <li>Как настраивается отказоустойчивость в кластере</li>
</ul>`;
classTitle4.classList.remove('title_active');
    classTitle3.classList.add('title_active');
    
}
)
button4.addEventListener('click', () => {
    p4.innerHTML = 
    `<ul>
    <li>Посмотреть состоние кластера</li> 
    <li>Посмотреть в какой очереди накопились сообщения
    </li> 
    <li>Прочитать сообщение из очереди</li> 
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
</ul>`
    classTitle3.classList.remove('title_active');
    classTitle4.classList.add('title_active');
}
)
//graylog
let button5 = document.querySelector('.title_5');
let button6 = document.querySelector('.title_6');

let p5 = document.querySelector('.graylog_text_p');
let p6 = document.querySelector('.graylog_text_p');
let classTitle5 = document.querySelector('.title_5');
let classTitle6 = document.querySelector('.title_6');

button5.addEventListener('click', () => {
    p5.innerHTML = `<ul>
    <li>input</li>
    <li>index</li>
    <li>stream</li>
    <li>alerts</li>
    <li>graylog query language basic</li>
    <li>архитектуру</li>
</ul>`;
classTitle6.classList.remove('title_active');
    classTitle5.classList.add('title_active');
    
}
)
button6.addEventListener('click', () => {
    p6.innerHTML = 
    `<ul>
    <li>Писать запросы (смотреть логи приложений)</li> 
    <li>Настраивать сбор логов с новых кластеров</li> 
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>

</ul>`
    classTitle5.classList.remove('title_active');
    classTitle6.classList.add('title_active');
}
)

//postgres
let button7 = document.querySelector('.title_7');
let button8 = document.querySelector('.title_8');
let button9 = document.querySelector('.title_9');


let p7 = document.querySelector('.postgres_text_p');
let p8 = document.querySelector('.postgres_text_p');
let p9 = document.querySelector('.postgres_text_p');

let classTitle7 = document.querySelector('.title_7');
let classTitle8 = document.querySelector('.title_8');
let classTitle9 = document.querySelector('.title_9');


button7.addEventListener('click', () => {
    p7.innerHTML = `<ul>
    <li>WAL-логи (что такое, зачем нужны, WAL-levels)</li>
    <li>Схемы (что такое, зачем нужны)</li>
    <li>Основы SQL (базовы запросы SELECT\INSERT\UPDATE\DELETE + понимание ORDER\LIMIT и JOIN в базовом виде (на простых примерах))</li>
    <li>Репликация (как работает, как смотреть отставание, что такое replication slots)</li>
    <li>Фоновые процессы (autovacuum, checkpoint, bgwriter)</li>
    <li>Базовое понимание индексов (что такое, зачем нужны, как смотреть)</li>
    <li>Базовое понимание транзакций</li>
    <li>Как работают миграции схем в БД</li>
    <li>Знать для чего нужен pg_stat_statements и что там можно увидеть</li>
    <li>Понимать все, что есть в мониторинге</li>
    <li>Как снимаются бекапы (хорошо расписано в документации barman https://docs.pgbarman.org/release/2.18/ )</li>
    <li>Миграции схемы БД (pgmigrate)</li>
</ul>`;
classTitle9.classList.remove('title_active');
classTitle8.classList.remove('title_active');
    classTitle7.classList.add('title_active');
    
}
)
button8.addEventListener('click', () => {
    p8.innerHTML = 
    `<ul>
    <li>Развернуть (при помощи ansible, но руками тоже нужно уметь)</li> 
    <li>Настроить pg_hba.conf</li> 
    <li>Развернуть реплику</li>
    <li>Смотреть базы/пользователей/схемы/гранты</li>
    <li>Смотреть подключения к БД (например, посмотреть сколько подключений к определнной БД определенным пользователем; посмотреть запросы\зависшие запросы)</li>
    <li>Убить запрос пользователя</li>
    <li>Выполнить запрос в БД</li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>




</ul>`
    classTitle9.classList.remove('title_active');
    classTitle7.classList.remove('title_active');

    classTitle8.classList.add('title_active');
}
)
button9.addEventListener('click', () => {
    p9.innerHTML = 
    `<a href="https://postgrespro.ru/docs/postgresql/14/" target="_blank">руссифицированная официальная документация</a>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>



    `
    classTitle8.classList.remove('title_active');
    classTitle7.classList.remove('title_active');

    classTitle9.classList.add('title_active');
}
)