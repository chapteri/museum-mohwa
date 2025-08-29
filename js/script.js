$(function () {
    // exhibitions__view
    $('#exhibit__view .answer').hide();
    $('#exhibit__view .question').click(function () {
        $(this).next().slideToggle();
        $(this).children().children("img").toggleClass('turn');
    });
    // TopBtn
    $(function () {
        $('#topbtn').click(function () {
            $('html,body').animate({
                scrollTop: '0'
            }, 2000);
        });

        // 일정구간부터 버튼 나타나게 하기
        $('#topbtn').hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#topbtn').fadeIn()
            } else {
                $('#topbtn').fadeOut()
            }
        });
    });


    // 메뉴 클릭 이동
    $(document).ready(function () {
        $('.gnb a[href^="#"]').on('click', function (event) {
            var target = $(this.hash);
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500); // 부드러운 스크롤 속도
            }
        });
    });

    // exhibitions의 exhibit__view스크롤로 이동
    // 아래로 부드럽게 이동
    $('.scrolldown a[href^="#"]').click(function () {
        $('html,body').animate({
            scrollTop: '2350'
        }, 1500);
    });


    // typing 두줄
    const $text = document.querySelector(".typing .text");

    // 글자 모음 - 개행문자(\n)로 줄바꿈
    const letters = [
        "모네展: \n 자연을 그리는 빛"
    ];

    // 글자 입력 속도
    const speed = 200;
    let i = 0;

    // 줄바꿈을 위한 <br> 치환
    const changeLineBreak = (letter) => {
        return letter.map(text => text === "\n" ? "<br>" : text);
    }

    // 타이핑 효과
    const typing = async () => {
        // 기존코드에서 개행치환코드 추가
        const letter = changeLineBreak(letters[i].split(""));

        while (letter.length) {
            await wait(speed);
            $text.innerHTML += letter.shift();
        }

        // 잠시 대기
        await wait(800);

        // 지우는 효과
        remove();
    }

    // 글자 지우는 효과
    const remove = async () => {
        // 기존코드에서 개행치환코드 추가
        const letter = changeLineBreak(letters[i].split(""));

        while (letter.length) {
            await wait(speed);

            letter.pop();
            $text.innerHTML = letter.join("");
        }

        // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
        i = !letters[i + 1] ? 0 : i + 1;
        typing();
    }

    // 딜레이 기능 ( 마이크로초 )
    function wait(ms) {
        return new Promise(res => setTimeout(res, ms))
    }

    // 초기 실행
    setTimeout(typing, 1500);

});    