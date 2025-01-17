# 🌟 React 지하철 노선도 미션

## Features

### 회원기능

- [x] 사용자는 회원 가입을 할 수 있다.

  - [x] 필요 정보: 이름, 이메일, 비밀번호, 비밀번호 확인 정보
  - [x] 비밀번호, 비밀번호 확인이 같은지 확인
  - [x] 실시간으로 회원가입 양식이 올바른지 사용자에게 알려준다.

- [x] 사용자는 가입한 계정으로 로그인을 할 수 있다.
  - [x] 로그인에 실패한 경우 실패한 이유를 확인할 수 있어야 한다.
- [x] 사용자는 로그인하여 지하철 노선도 관리 페이지에 접근할 수 있다.
- [x] 회원가입 성공시 자동 로그인 구현된다.

### 역 관리 기능

- [x] 사용자는 지하철 역을 추가할 수 있다.
  - [x] 역 이름은 2자 이상 20자 이하의 한글이어야 한다
  - [x] 역 이름은 숫자 포함 하지 않는다.
  - [x] 역 이름은 공백이 있을 수 없다.
- [x] 사용자는 지하철 역을 삭제할 수 있다.
- [x] 사용자는 등록되어 있는 전체 지하철 역 목록을 조회할 수 있다.

### 노선 관리 기능

- [x] 사용자는 지하철 노선을 추가할 수 있다.

  - 필요 정보: 노선 이름, 상행역, 하행역, (최초 상행역과 하행역 구간의)거리, (최초 상행역과 하행역 구간 통행에 걸리는)시간, 색상
  - [x] 노선 이름은 2자 이상 10자 이하의 한글이어야 한다.
  - [x] 노선 이름은 숫자 포함 하지 않는다.
  - [x] 노선 이름은 공백이 있을 수 없다.
  - [x] 상행선역을 설정하면 하행선 선택창에서는 해당 역이 존재하지 않는다.
  - [x] 상행역 설정 전에는 하행선역에 접근 불가히다.

  - [x] 상행역, 하행역: 기존에 등록되어 있는 지하철 역 목록 중에서 선택

- [x] 사용자는 지정되어 있는 10가지 색상 중 한 색상을 선택할 수 있다.
  - [x] 다른 노선에서 사용한 색은 선택할 수 없다.
- [x] 사용자는 등록되어 있는 지하철 노선을 삭제할 수 있다.
- [x] 사용자는 등록되어 있는 전체 지하철 노선 목록을 조회할 수 있다.

### 구간 관리 기능

- [x] 사용자는 특정 노선의 전체 구간 목록을 확인할 수 있다.
- [x] 사용자는 특정 지하철 노선에 구간을 추가할 수 있다.
  - [x] 하나의 역은 여러 개 노선에 중복되어 포함될 수 있음
  - [x] 역과 역 사이에 새로운 역 추가 가능
  - [x] 기존 구간의 거리보다 긴 거리의 사이 구간을 추가할 수 없다.
  - [x] 상행역에서는 해당 노선에 존재하는 역만 노출한다.
  - [x] 하행역에서는 전체 역 리스트 중 해당 노선의 역을 제외한 역들을 노출한다.
  - [x] 상행역 설정 전에는 하행역에 접근 불가하다.
  - 하나의 노선에서 갈래길은 생길 수 없음
- [x] 사용자는 노선에 등록되어 있는 구간을 삭제할 수 있다.
