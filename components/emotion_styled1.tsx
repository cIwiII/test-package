import React, { useState } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Index() {
  const [isRegister, setIsRegister] = useState(false);
  const [isRegisterStyled, setIsRegisterStyled] = useState(false);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => setIsRegister(!isRegister)}>
          原生-切换到{isRegister ? "登录" : "注册"}
        </button>
      </div>
      <hr />
      <Container>
        <button onClick={() => setIsRegisterStyled(!isRegisterStyled)}>
          styled-切换到{isRegisterStyled ? "登录" : "注册"}
        </button>
      </Container>
    </div>
  );
}
