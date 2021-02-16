# Web_NODE_JS

### Node.js는 자바스크립트 실행기이다.

### Node.js 이해
- JavaScript 언어의 실행 방법
  - 웹브라우저 : 웹브라우저 안에 실행 환경이 구축(JavaScript Engine)
  - 웹브라우저 밖 : Node.js 필요, JavaScript Engine 이상의 동작 환경을 제공(외부 모듈 로딩 및 Thread 동작 등)
- Node.js
  - JavaScript's runtime built on Chrome's V8 JavaScript engine
  - JavaScript의 활용성이 증가
    - JavaScript로 만든 App들을 사용가능하게 만듬
- Runtime Environment(Runtime)
  - 실행에 필요한 것을 모아둔 환경
  - Runtime은 하나의 Run System이며 실행기
  - 특정 언어는 실행기가 있어야만 App 동작이 가능
- REPL
  - Node의 Shell
  - 사용자의 명령을 읽고, 수행 후 출력하는 동작을 반복하는 터미널을 뜻함
  - R(ead)E(val, 해석)P(rint)L(oop)
  
### Node.js의 활용
- Desktop App 개발
  - Electoron Framework로 개발
  - App 1개에 Node.js, Chromium 브라우저를 포함(사용자는 따로 Node.js 설치 필요 없음)
  - Mattermost, Slack 등
- Mobile App 개발
  - React-Native : iOS, Android App을 동시에 개발 가능
- Web 개발(Server side)
  - Node.js에는 간단한 웹 서버가 내장(테스트 용도)
  - Express.js를 통해 HTTP Protocol로 서버의 Javascript 메소드를 호출할 수 있음
    - REST API 제작 가능
- Web 개발(Client side)
  - Vue.js, React, Angular를 통해 비동기방식 웹사이트를 만들 수 있음
  - 비동기 웹사이트 제작으로 서버 부하를 줄이기 위해 사용
  
### JavaScript 복습
- 콘솔에서 로그 찍기
  - [실습1](https://github.com/KimUJin3359/Web_NODE_JS/blob/master/001.log.js)
- 실행방법
  - Visual Studio Code -> Terminal
    - Terminal에 node ${Javascript 파일명}.js
  - Build -> Add Configuration -> Node.js
    - launch.json 파일에서 F5 
  - Ctrl + F5
- 화살표 함수와 forEach
  - 화살표 함수
  ```
  const func = () => {
    console.log('This is a arrow function');
  };
  ```
  - forEach : 배열 각각의 요소에 작업을 해줄 때 사용
  ```
  arr.forEach(e => {
    console.log(e);
  });
  ```
  - [실습2](https://github.com/KimUJin3359/Web_NODE_JS/blob/master/002.func.js)
- map / filter / reduce
  - this : 객체형에서 this를 써야, 객체 자신의 member에 접근 가능
    ```
    range = 'global';

    const obj = {
      range = 'object';

      print_range() {
        console.log(range);
        console.log(this.range);
      }
    };
    ```
    - global, object 출력
  - 함수 호출에 따른 this 바인딩
    - 일반 함수 호출 : 전역 객체
    - 메서드 호출 : 메서드를 호출한 객체
    - 생성자 함수 호출 : 생성자 함수가 생성할 인스턴스
  - map
    - 각 원소들을 수정한 새로운 배열을 만들어주는 메소드
      - 배열.map((현재 값) => { 새로운 값 });
  - filter
    - 특정 조건에 맞는 원소만 뽑아내서 배열을 만들어주는 메소드
      - 배열.filter((현재 값) => { 조건 });
  - [실습3](https://github.com/KimUJin3359/Web_NODE_JS/blob/master/003.filter_forEach.js)
  - reduce
    - 원소를 하나씩 탐색하며, 누적 값을 구할 때 사용
      - 배열.reduce((누적 값, 현재 값) => { 리턴 누적값 }, 시작 누적값 );
    - [실습4](https://github.com/KimUJin3359/Web_NODE_JS/blob/master/004.reduce.js)      
- Promise와 async, await
  - 동기(sync) : 순차적 처리
  - 비동기(async) : 다른 코드 수행도중 이벤트 발생 시 콜백함수 호출
  - 동기/비동기 함수 순서
    1) call stack에 먼저 함수들을 넣어둔다
    2) 비동기 함수가 나타나면 event queue에 넣어둔다
    3) call stack이 empty가 되고 나면, event queue에 있는 비동기 함수들 차례로 실행
    
### Node.js 기능
- Node.js 동작 원리
  - Non Blocking(처리요청)
    - 요청자에게 Response를 대기시키지 않음
    - 요청자에게 event Listener를 전달 받고, 처리가 끝나면 event Listener를 호출해 줌
  - Blocking
    - Timer, 파일처리 같은 동작은 커널에 요청
    - Ajax 같은 것은 Workers Thread를 생성하여 직접 처리
- 모듈
  - 객체로 묶인 member들을 변수로 분해할 수 있는 문법
  - destructuring 할당
  ```
  const {data} = obj;
  <=>
  const data = obj.data;
  ```
  - 실습1 : [main](https://github.com/KimUJin3359/Web_NODE_JS/blob/master/module001.module/005.module.js), [module](https://github.com/KimUJin3359/Web_NODE_JS/blob/master/module001.module/005.lib.js)
  - 실습2 : [main](https://github.com/KimUJin3359/Web_NODE_JS/blob/master/module002.module/main.js), [member module](https://github.com/KimUJin3359/Web_NODE_JS/blob/master/module002.module/member.js), [function module](https://github.com/KimUJin3359/Web_NODE_JS/blob/master/module002.module/sum.js)
- 파일입출력
  - 방법1 : require('fs')를 이용해 file system을 받아옴 => if(err), else로 처리
  - 방법2 : require('fs').promises를 통해 promise로 받아옴 => then, catch로 처리
  - [실습3](https://github.com/KimUJin3359/Web_NODE_JS/blob/master/module003.file/file.js)
  - 실습4 : [main](https://github.com/KimUJin3359/Web_NODE_JS/blob/master/module004.file/index.js), [file](https://github.com/KimUJin3359/Web_NODE_JS/blob/master/module004.file/file.js)
  
### Server의 이해
- 클라이언트와 서버
  - 클라이언트 : 서버를 통해 접속할 수 있는 응용프로그램이나 서비스
  - 서버 : 클라이언트에게 네트워크를 통해 정보나 서비스를 제공하는 시스템
- HTTP Request Method
  - GET
    - 리소스를 조회하기 위해 사용
    - 서버에 데이터를 전송할 때 query를 사용해서 전달
  - POST
    - 요청 데이터 처리, 주로 서버의 자원을 생성 하기위해 사용
    - 회원가입, 게시글 작성 등
  - PUT/PATCH
    - 리소스를 수정하기 위해 사용
    - PUT은 일괄 수정, PATCH는 부분 수정
  - DELETE
    - 리소스를 삭제하기 위해 사용
- HTTP Request의 특징
  - 안전(Safe) : 여러번 호출해도 리소스를 변경하지 않음
    - GET
  - 멱등성(Idempotent)
    - GET, PUT, DELETE
    - 한번 호출이던 여러 번 호출이던 결과가 같은 경우
  - 캐시가능(Cacheable)
    - GET, POST, PATCH
    - 주로 GET을 캐시로 사용

### Front, Back-end 개발 범위
- Front-end
  - 사용자가 웹 사이트를 보고 상호 작용할 수 있도록 개발
  - html, css, javascript, react, view 등
- Back-end
  - 유저에게 보이지 않지만 사용하는 기능들을 만듬
  - server, DB, API
  - php, java, python, javascript 등
- DevOps(개발과 운영)
  - 개발과 운영지식을 모두 보유해서 이 둘이 함께 작업할 수 있는지 이해하고 개발 및 운영
  - 빌드, 테스트, 배포, 이슈 관리 등
  - CI/CD
- Full Stack
  - Front-end, Back-end, DevOps를 전부 할 줄 아는 개발자
  
### Node.js 내장 웹서버 구축
- [실습5](https://github.com/KimUJin3359/Web_NODE_JS/blob/master/module005.server/server.js)
  - writeHead : 응답에 대한 정보를 기록하는 메소드
  - write : 클라이언트로 보낼 데이터
  - end : 응답을 종료하는 메소드
  - listen : 서버를 실행할 떄 사용하는 메소드
- [실습6](https://github.com/KimUJin3359/Web_NODE_JS/blob/master/module006.server/server.js), [html](https://github.com/KimUJin3359/Web_NODE_JS/blob/master/module006.server/index.html)
- [실습7(라우팅)](https://github.com/KimUJin3359/Web_NODE_JS/blob/master/module007.server/index.js)
### express
- 특징
  - Node.js의 대표 웹 프레임워크
  - Http와 Connect 컴포넌트를 기반으로 만들어짐
  - Node.js의 API들을 단순화
  - 쉬운 확장성
- npm
  - javaScript를 위한 패키지 관리자
  - npm init
  ![파일](https://user-images.githubusercontent.com/50474972/108080160-e8f82c00-70b2-11eb-89a4-e705768133c6.JPG)
- 웹서버 구축
  - [실습8](https://github.com/KimUJin3359/Web_NODE_JS/blob/master/module008.express/index.js)
- routing
  - [실습9](https://github.com/KimUJin3359/Web_NODE_JS/blob/master/module009.routing/index.js)
  - [실습10](https://github.com/KimUJin3359/Web_NODE_JS/blob/master/module010.routing/index.js)
- middleware  
  - 요청과 응답사이에 실행되는 함수
  - 요청에 대한 응답을 완수하기 전에 중간중간 다양한 일 처리 가능
  - [실습11](https://github.com/KimUJin3359/Web_NODE_JS/blob/master/module011.middleware/index.js)
  - [실습12](https://github.com/KimUJin3359/Web_NODE_JS/blob/master/module012.middleware/index.js)
  
  
  
  
  
  
  

