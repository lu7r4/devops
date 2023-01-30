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
classTitle2.classList.remove('teamcity_text_title_active');
    classTitle1.classList.add('teamcity_text_title_active');
    
}
)
button2.addEventListener('click', () => {
    p2.innerHTML = 
    `<ul>
    <li>умение работать с какой-либо CI/CD системой</li>
    <li>писать пайплайны</li>
    </ul>`
    classTitle1.classList.remove('teamcity_text_title_active');
    classTitle2.classList.add('teamcity_text_title_active');
}
)

