import styled from "@emotion/styled";

//전체 레이아웃
export const Wrapper = styled.div`
  position: relative;
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 50px;
  background-color: #fff;
`;

//공통 레이아웃
export const inner = styled.div`
  padding: 30px;
`;

//앱 타이틀
export const AppTitle = styled.h1`
  text-align: center;
  padding: 30px 0;
  font-size: 30px;
  color: cornflowerblue;
`;

//입력창
export const TodoInputWrap = styled.div`
  width: 95%;
  margin: 0 auto;
`;

//목록창
export const TodoListWrap = styled.div`
  width: 95%;
  margin: 0 auto;
  padding-bottom: 50px;
  margin-bottom: 50px;
`;
