# Directory 구조및 Git commit Message 가이드

```
    - src   // Root Directory
        - assets  // Static Resources Directory
            - images
            - styles
            - scripts
            - fonts
        - views   // Html Resources Directory

```

- 1. `html`파일은 `views` 에 위치하도록 한다.
- 2. 가장 첫 파일은 `index.html` 이 기본이다.
- 3. 이미지, css, javascript, font 파일등은 용도에 맞는 `assets` 디렉토리에 위치한다.
- 4. 비디오나 다른형태의 리소스를 추가한다면, `videos`, `audios`등의 디렉토리를 추가로 생성하여 분리한다.


## Git Commit Message 가이드.

커밋 메세지를 작성할때, 다음 규칙을 준수한다.

- 커밋 메세지의 본문을 생략할 경우, 제목만으로 해당 커밋을 파악할수 있는 경우로 제한한다.
- 그외의 경우에는 `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`의 케이스에 맞춰 사용한다.

    [Github Commit Message Convention](https://www.conventionalcommits.org/en/v1.0.0/)
